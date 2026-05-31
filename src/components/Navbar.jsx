"use client";

import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";

import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

import { AuthContext } from "@/providers/AuthProvider";

import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logoutUser } =
    useContext(AuthContext);
  const pathname = usePathname();


  const handleLogout = async () => {

    try {

      await logoutUser();

      toast.success(

  `Logout Successful !!\nThanks for visiting PawConnect..`,

  {
    duration: 3000,

    position: "top-right",

    icon: (
      <img
        src="/images/logout.png"
        alt="Pet"
        className="
  w-5
  h-5
  sm:w-7
  sm:h-7
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

    } catch (error) {

      console.log(error);
    }
  };



  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-1 md:px-4">

        <div className="navbar py-4">

          {/* LEFT LOGO */}
<div className="navbar-start">

  <Link
    href="/"
    className="flex items-center gap-1 md:gap-2"
  >

    <Image
  src="/images/logo.png"
  alt="PawConnect Logo"
  width={0}
  height={0}
  sizes="100vw"
  className="object-contain w-8 h-8 sm:w-10 sm:h-10  md:w-10 md:h-10"
/>

    <h1 className="text-[13px] md:text-[15px] font-extrabold gap-0.5 flex">

      <span className="text-[#0F172A]">
        Paw
      </span>

      <span className="text-[#F9B000]">
        Connect
      </span>

    </h1>

  </Link>

</div>

          {/* CENTER MENU */}
<div className="navbar-center">

  <ul className="flex items-center gap-1 sm:gap-3 md:gap-5 lg:gap-10 font-semibold text-[13px] sm:text-[15px] md:text-base lg:text-[16px]">

    <li>

      <Link
  href="/"
  className={`
    px-2.5 sm:px-4 md:px-3 lg:px-4 py-[5px] sm:py-[6px] md:py-2 rounded-full transition duration-300
    ${
      pathname === "/"
        ? "bg-[#F9B000] text-white"
        : "hover:bg-[#e5a400] hover:text-white"
    }
  `}
>

  Home

</Link>

    </li>



    <li>

      <Link
  href="/all-pets"
  className={`
    px-2.5 sm:px-4 md:px-3 lg:px-4 py-[5px] sm:py-[6px] md:py-2 rounded-full transition duration-300
    ${
      pathname === "/all-pets"
        ? "bg-[#F9B000] text-white"
        : "hover:bg-[#e5a400] hover:text-white"
    }
  `}
>

  All Pets

</Link>

    </li>

  </ul>

</div>



          {/* RIGHT SIDE */}
          <div className="navbar-end flex items-center gap-1 sm:gap-4 md:gap-3">

          
            {/* DARK MODE */}
<button
  className="
    px-2 sm:px-2 md:px-3 lg:px-4
    py-[3px] sm:py-1 md:py-2
    rounded-full
    hover:bg-[#e5a400]
    transition
    duration-300
    flex items-center justify-center
  "
>

  <Image
    src="/images/moon.png"
    alt="Dark Mode"
    width={0}
    height={0}
    sizes="100vw"
    className="
      w-4 h-4
      sm:w-5 sm:h-5
      md:w-5 md:h-5
    "
  />

</button>



            {
              user ? (

                <div className="dropdown dropdown-end">

                  <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer"
                  >

                    <img
  src={
    user?.photoURL ||
    "https://i.ibb.co/4pDNDk1/avatar.png"
  }
  alt="profile"
  className="
    w-10 h-10
    sm:w-11 sm:h-11
    md:w-12 md:h-12
    rounded-full
    border-2
    border-[#F9B000]
    object-cover
  "
/>

                  </div>



                  <ul
  tabIndex={0}
  className="
  dropdown-content
  z-[100]
  mt-3
  w-44
  sm:w-45
  bg-white/95
  backdrop-blur-2xl
  rounded-[20px]
  border
  border-[#F9B000]/20
  shadow-[0_15px_40px_rgba(249,176,0,0.15)]
  p-2
  space-y-1
"
>

  {/* USER INFO */}
  <li
    className="
      px-4
      py-3
      rounded-2xl
      bg-[#FFF8E6]
      border
      border-[#F9B000]/20
    "
  >

    <div
  className="
    flex
    items-center
    gap-1
    text-[11px]
    sm:text-xs
  "
>

  <span className="text-[#0f172a]">
    Name :
  </span>

  <span
    className="
      font-bold
      text-[#0f172a]
      truncate
    "
  >

    {user?.displayName || "User"}

  </span>

</div>

  </li>



  {/* DASHBOARD */}
  <li>

    <Link
      href="/dashboard"
      onClick={() => {
    document.activeElement?.blur();
  }}
      className="
        flex
        items-center
        gap-3
        px-3
py-2
text-[12px]
sm:text-sm
        rounded-2xl
        font-semibold
        text-[#0f172a]
        hover:bg-[#16C6C0]
        hover:text-white
        transition
        duration-300
      "
    >

      <img
        src="/images/dashboard.png"
        alt="Dashboard"
        className="w-4 h-4
sm:w-5 sm:h-5 object-contain"
      />

      Dashboard

    </Link>

  </li>



  {/* LOGOUT */}
  <li>

    <button
      onClick={handleLogout}
      className="
        w-full
        flex
        items-center
        gap-3
        px-3
py-2
text-[12px]
sm:text-sm
        rounded-2xl
        
        font-semibold
        text-[#0f172a]
        hover:bg-red-500
        hover:text-white
        transition
        duration-300
      "
    >

      <img
        src="/images/log-out.png"
        alt="Logout"
        className="w-4 h-4
sm:w-5 sm:h-5 object-contain"
      />

      Logout

    </button>

  </li>

</ul>

                </div>

              ) : (

                <Link href="/login">

  <button
    className="
      flex items-center gap-1 sm:gap-2
      bg-[#F9C62B]
      text-black
      px-3 sm:px-4 md:px-3 lg:px-4
      py-[5px] sm:py-[6px] md:py-2
      rounded-full
      hover:bg-[#eab308]
      transition
      duration-300
      font-semibold
      text-[12px]
      sm:text-[14px]
      md:text-base
      lg:text-[16px]
    "
  >

    <Image
      src="/images/login.png"
      alt="Login"
      width={0}
      height={0}
      sizes="100vw"
      className="
        w-3 h-3
        sm:w-4 sm:h-4
        md:w-5 md:h-5
      "
    />

    <span>
      Login
    </span>

  </button>

</Link>

              )
            }

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;