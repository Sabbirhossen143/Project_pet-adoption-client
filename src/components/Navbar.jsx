"use client";

import Link from "next/link";
import Image from "next/image";
import {useContext,useState,useEffect} from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const [showWishlist, setShowWishlist] =
  useState(false);

  const [wishlistPets, setWishlistPets] =
  useState([]);



  useEffect(() => {

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  setWishlistPets(wishlist);

}, [showWishlist]);

  const { user, logoutUser } =
    useContext(AuthContext);
  const pathname = usePathname();

  const router = useRouter();

  const handleLogout = async () => {

    try {

      await logoutUser();

     toast(
  "Logout Successful!\nThanks for visiting PawConnect.",
  {
    icon: (
  <img
    src="/images/logout.png"
    alt="Pet"
    className={`
      rounded-full
      object-cover
      ${
        window.innerWidth < 640
          ? "w-5 h-5"
          : "w-7 h-7"
      }
    `}
  />
),

    style: {
  borderRadius:
    window.innerWidth < 640
      ? "14px"
      : "20px",

  background:
    "linear-gradient(135deg,#16C6C0,#0EA5A4)",

  color: "#fff",

  border: "2px solid #7DE7E2",

  fontWeight: "700",

  padding:
    window.innerWidth < 640
      ? "8px 12px"
      : "14px 18px",

  fontSize:
    window.innerWidth < 640
      ? "11px"
      : "14px",

  minWidth:
    window.innerWidth < 640
      ? "240px"
      : "280px",

  maxWidth:
    window.innerWidth < 640
      ? "280px"
      : "340px",

  lineHeight: "1.2",
  marginTop:
  window.innerWidth < 640
    ? "10px"
    : "35px",
},
  }
);

   setTimeout(() => {
  router.push("/");
}, 500);

    } catch (error) {

      console.log(error);
    }
  };

  const totalFee = wishlistPets.reduce(
  (sum, pet) =>
    sum + Number(pet.adoptionFee || 0),
  0
);


const removeFromWishlist = (id) => {

  const updatedWishlist =
    wishlistPets.filter(
      (pet) => pet._id !== id
    );

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );

  setWishlistPets(updatedWishlist);

  window.dispatchEvent(
  new Event("wishlistUpdated")
);

  toast.success(
    "Removed from Wishlist"
  );
};


  return (

      <>
      
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
  onClick={() =>
    setShowWishlist(true)
  }
  className="
    px-2
    sm:px-2
    md:px-3
    lg:px-4
    py-[3px]
    sm:py-1
    md:py-2
    rounded-full
    hover:scale-110
    transition
    duration-300
  "
>
  <img
    src="/images/wishlist.png"
    alt="Wishlist"
    className="
      w-5 h-5
      sm:w-6 sm:h-6
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
        gap-2
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
        className="w-5 h-5
md:w-6 md:h-6 object-contain"
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

    {showWishlist && (

  <div
  className="
    fixed
    inset-0
    z-[9999]
    bg-black/60
    flex
    items-center
    justify-center
    pt-16
    sm:pt-24
    md:pt-28
  "
>

    <div
      className="
  bg-white
  rounded-3xl
  w-[85%]
  sm:w-[88%]
  md:w-[80%]
  lg:w-full
  max-w-5xl
  max-h-[80vh]
  overflow-y-auto
  p-3
"
    >

      {/* HEADER */}
<div
  className="
    sticky
    top-2
    z-20
    mb-8
    md:mb-10
    px-1
    md:px-2
    py-3
    bg-white/60
    backdrop-blur-2xl
    border-1
    border-[#F9C62B]/70
    rounded-2xl
    shadow-[0_8px_25px_rgba(249,198,43,0.15)]
  "
>

  <div className="flex justify-between items-start">

    <div className="pl-1 sm:pl-1 md:pl-1">

      <h2
        className="
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          text-[#0f172a]
        "
      >
        My Wishlist ❤️
      </h2>

      <div className="flex items-center gap-2 mt-2 flex-wrap">

  <div
    className="
      bg-[#16C6C0]
      text-white
      px-3
      py-1
      rounded-full
      text-xs
      sm:text-sm
      font-semibold
    "
  >
    Total Pets : {wishlistPets.length}
  </div>

  <div
    className="
      bg-[#F9C62B]
      text-black
      px-3
      py-1
      rounded-full
      text-xs
      sm:text-sm
      font-semibold
    "
  >
    Total Fee : ${totalFee}
  </div>

</div>

    </div>

    <button
      onClick={() =>
        setShowWishlist(false)
      }
      className="
        -mt-1
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-red-500
        text-white
        font-bold
        hover:bg-red-600
        transition
        flex
        items-center
        justify-center
        flex-shrink-0
      "
    >
      ✕
    </button>

  </div>

</div>



{/* CARDS */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

  {wishlistPets.length > 0 ? (

    wishlistPets.map((pet) => (

      <div
        key={pet._id}
        className="
          border
          border-[#F9C62B]
          rounded-2xl
          overflow-hidden
          bg-white
        "
      >

        <div className="relative p-3">

  {/* REMOVE BUTTON */}
  <button
    onClick={() => removeFromWishlist(pet._id)}
    className="
  absolute
  top-2
  right-2
  px-2
  py-1
  rounded-full
  bg-red-500
  text-white
  text-[11px]
  font-semibold
  hover:bg-red-600
  transition
"
  >
    Remove
  </button>

  <div className="flex gap-4">

    {/* IMAGE */}
    <img
      src={pet.image}
      alt={pet.petName}
      className="
        w-24
        h-24
        sm:w-28
        sm:h-28
        object-cover
        rounded-2xl
        flex-shrink-0
      "
    />

    {/* INFO */}
    <div className="flex-1">

      <h3
        className="
          text-lg
          font-bold
          text-[#0f172a]
          pr-8
        "
      >
        {pet.petName}
      </h3>

      <div className="mt-2 space-y-1">

        <div
  className="
    flex
    items-center
    gap-1
    text-sm
  "
>
  🐾 {pet.species}

  <span
    className="
      text-gray-500
      text-[11px]
      
    "
  >
    ({pet.breed})
  </span>
</div>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
          "
        >
          📍 {pet.location}
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#F9B000]
          "
        >
          💰 ${pet.adoptionFee}
        </div>

      </div>

    </div>

  </div>



          <div
            className="
              grid
              grid-cols-2
              gap-3
              mt-4
            "
          >

            <button
              onClick={() => {

                if (!user) {

                  setShowWishlist(false);

                  router.push("/login");
                  return;
                }

                setShowWishlist(false);
                router.push(`/pet/${pet._id}`);
              }}
              className="
  py-1.5
  text-xs
  sm:text-sm
  rounded-lg
  border
  border-[#16C6C0]
  text-[#16C6C0]
  font-semibold
  hover:bg-[#16C6C0]
  hover:text-white
  transition
  duration-300
"
            >
              View Details
            </button>



            <button
              onClick={() => {

                if (!user) {

                  setShowWishlist(false);
                  router.push("/login");
                  return;
                }

                setShowWishlist(false);

                router.push(`/pet/${pet._id}`);
              }}
              className="
  py-1.5
  text-xs
  sm:text-sm
  rounded-lg
  bg-[#F9C62B]
  font-bold
  text-black
  hover:bg-[#E5A400]
  transition
  duration-300
"
            >
              Adopt Now
            </button>

          </div>

        </div>

      </div>

    ))

  ) : (

    <div className="col-span-2 text-center py-10">

      No pets in wishlist ❤️

    </div>

  )}

  </div>

      </div>

    </div>

  )}

</>
  );
};

export default Navbar;