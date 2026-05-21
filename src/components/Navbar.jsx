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

      toast.success("Logout Successful");

    } catch (error) {

      console.log(error);
    }
  };



  return (
    <nav className="sticky top-0 z-50 bg-[#16C6C0] backdrop-blur-md shadow-md">

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

      <span className="text-[#FF6B35]">
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
        ? "bg-[#FF6B35] text-white"
        : "hover:bg-[#FF6B35] hover:text-white"
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
        ? "bg-[#FF6B35] text-white"
        : "hover:bg-[#FF6B35] hover:text-white"
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
    hover:bg-[#FF6B35]
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
                      className="w-12 h-12 rounded-full border-2 border-[#FF6B35]"
                    />

                  </div>



                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white rounded-2xl z-[1] mt-4 w-56 p-3 shadow-xl"
                  >

                    <li>

                      <Link href="/dashboard/my-requests">

                        My Requests

                      </Link>

                    </li>



                    <li>

                      <Link href="/dashboard/add-pet">

                        Add Pet

                      </Link>

                    </li>



                    <li>

                      <Link href="/dashboard/my-listings">

                        My Listings

                      </Link>

                    </li>



                    <li>

                      <button onClick={handleLogout}>

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