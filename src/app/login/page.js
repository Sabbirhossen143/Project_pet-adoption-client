"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "@/providers/AuthProvider";

import toast from "react-hot-toast";

const LoginPage = () => {

  const { loginUser, googleLogin } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await loginUser(email, password);
      setError("");

      toast.success("Login Successful");

router.push("/");

    } catch (err) {

  if (err.code === "auth/invalid-credential") {

    setError("Incorrect email or password");

  } else {

    setError("Login failed. Please try again.");

  }

}
  };

  const handleGoogleLogin = async () => {

    try {

      await googleLogin();

      toast.success("Google Login Successful");

router.push("/");

    } catch (err) {

  console.log(err);

  setError("Google login failed");

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
          src="/images/login-pet.png"
          alt="Login"
          className="
            w-16
            h-16
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

        Welcome Back

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

        Login to continue your pet journey

      </p>



      {/* FORM */}
      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >

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
      transition
      duration-300
    "
  >

    {showPassword ? <FaEye /> : <FaEyeSlash />}

  </button>

</div>



        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}



        {/* LOGIN BUTTON */}
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

          Login

        </button>

      </form>



      {/* DIVIDER */}
      <div
        className="
          text-center
          text-gray-400
          my-6
          text-sm
          mt-4
          mb-4
        "
      >

        OR CONTINUE WITH

      </div>



      {/* GOOGLE LOGIN */}
      <button
        onClick={handleGoogleLogin}
        className="
  w-full
  border
  border-gray-200
  hover:border-[#F9B000]
  py-3
  rounded-xl
  text-sm
  font-medium
  flex
  items-center
  justify-center
  gap-2
  transition
  duration-300
  hover:bg-[#FFF8E6]
"
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="Google"
          className="w-4 h-4"
        />

        Continue With Google

      </button>



      {/* REGISTER */}
      <p
        className="
          text-center
          mt-4
          text-gray-500
          text-sm
        "
      >

        Don&apos;t have an account?

        <Link
          href="/register"
          className="
            text-[#F9B000]
            font-semibold
            ml-2
            hover:underline
          "
        >

          Register

        </Link>

      </p>

    </div>

  </div>
);

};

export default LoginPage;