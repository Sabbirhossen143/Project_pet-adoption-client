"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

  const { createUser, logoutUser } =
  useContext(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

const [showConfirmPassword, setShowConfirmPassword] =
  useState(false);

const router = useRouter();

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password Validation
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain one lowercase letter");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {

      await createUser(
  email,
  password,
  name,
  photo
);

      toast.success(

  `Registration Successful !\nPlease login to continue..`,

  {
    duration: 3000,

    position: "top-right",

    icon: (
      <img
        src="/images/registerpet.png"
        alt="Pet"
        className="
          w-5
          h-5
          md:w-7
          md:h-7
          rounded-full
          object-cover
        "
      />
    ),

    style: {
  marginTop:
    window.innerWidth < 640
      ? "58px"
      : "70px",

  padding:
    window.innerWidth < 640
      ? "8px 10px"
      : "14px 16px",

  borderRadius: "14px",

  background: "#fff",

  color: "#0f172a",

  fontSize:
    window.innerWidth < 640
      ? "10px"
      : "14px",

  fontWeight: "600",

  lineHeight: "1.15",

  minWidth:
    window.innerWidth < 640
      ? "190px"
      : "280px",

  maxWidth:
    window.innerWidth < 640
      ? "210px"
      : "320px",

  boxShadow:
    "0 10px 30px rgba(249,176,0,0.18)",
},

  }

);

await logoutUser();

form.reset();

router.push("/login");

    } catch (err) {

  if (err.code === "auth/email-already-in-use") {

    setError("This email is already registered");

  } else {

    setError("Registration failed. Try again.");

  }

}
  };

  return (
  <div
    className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#F6E7D5]
      px-5
      md:px-2
      pt-0
      pb-10
    "
  >

    <div
      className="
        w-full
        max-w-sm
        bg-white/90
        backdrop-blur-xl
        rounded-[35px]
        shadow-[0_20px_60px_rgba(249,176,0,0.25)]
        p-6
      "
    >

      {/* LOGO IMAGE */}
      <div className="flex justify-center mb-2">

        <img
          src="/images/dog.png"
          alt="Register"
          className="
            w-18
            h-18
            object-contain
          "
        />

      </div>



      {/* TITLE */}
      <h2
        className="
          text-2xl
          font-extrabold
          text-center
          text-[#0f172a]
        "
      >

        Create Account

      </h2>



      <p
        className="
          text-center
          text-gray-500
          mt-2
          mb-4
          text-sm
        "
      >

        Register to start your pet journey

      </p>



      {/* FORM */}
      <form
        onSubmit={handleRegister}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="
            w-full
            bg-[#F4F4F4]
            border
            border-transparent
            focus:border-[#F9B000]
            focus:ring-2
            focus:ring-[#F9B000]/10
            outline-none
            px-4
            py-3
            rounded-xl
            transition
            duration-300
            text-sm
          "
          required
        />



        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="
            w-full
            bg-[#F4F4F4]
            border
            border-transparent
            focus:border-[#F9B000]
            focus:ring-2
            focus:ring-[#F9B000]/10
            outline-none
            px-4
            py-3
            rounded-xl
            transition
            duration-300
            text-sm
          "
          required
        />



        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="
            w-full
            bg-[#F4F4F4]
            border
            border-transparent
            focus:border-[#F9B000]
            focus:ring-2
            focus:ring-[#F9B000]/10
            outline-none
            px-4
            py-3
            rounded-xl
            transition
            duration-300
            text-sm
          "
          required
        />

<div className="relative">

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter your password"
    className="
      w-full
      bg-[#F4F4F4]
      border
      border-transparent
      focus:border-[#F9B000]
      focus:ring-2
      focus:ring-[#F9B000]/10
      outline-none
      px-4
      py-3
      pr-12
      rounded-xl
      transition
      duration-300
      text-sm
    "
    required
  />



  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-gray-500
      hover:text-[#F9B000]
    "
  >

    {showPassword ? <FaEye /> : <FaEyeSlash />}

  </button>

</div>


<div className="relative">

  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    placeholder="Confirm password"
    className="
      w-full
      bg-[#F4F4F4]
      border
      border-transparent
      focus:border-[#F9B000]
      focus:ring-2
      focus:ring-[#F9B000]/10
      outline-none
      px-4
      py-3
      pr-12
      rounded-xl
      transition
      duration-300
      text-sm
    "
    required
  />



  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-gray-500
      hover:text-[#F9B000]
    "
  >

    {showConfirmPassword
      ? <FaEye />
      : <FaEyeSlash />}

  </button>

</div>


        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}



        {/* REGISTER BUTTON */}
        <button
          className="
            w-full
            bg-[#F9B000]
            hover:bg-[#e0a100]
            text-white
            py-3
            rounded-xl
            font-semibold
            text-sm
            transition
            duration-300
            shadow-md
            mt-2
          "
        >

          Register

        </button>

      </form>



      {/* LOGIN */}
      <p
        className="
          text-center
          mt-4
          text-gray-500
          text-sm
        "
      >

        Already have an account?

        <Link
          href="/login"
          className="
            text-[#F9B000]
            font-semibold
            ml-2
            hover:underline
          "
        >

          Login

        </Link>

      </p>

    </div>

  </div>
);
};

export default RegisterPage;