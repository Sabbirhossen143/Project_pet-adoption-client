"use client";

import Link from "next/link";
import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "@/providers/AuthProvider";

import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {

    try {

      await logoutUser();

      toast.success("Logout Successful");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">
            Pet Adoption
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 font-medium">
          
            <ThemeToggle />
            
          <Link href="/">
            Home
          </Link>

          <Link href="/all-pets">
            All Pets
          </Link>

          {
            user && (
              <>
                <Link href="/dashboard/my-requests">
                  My Requests
                </Link>

                <Link href="/dashboard/add-pet">
                  Add Pet
                </Link>

                <Link href="/dashboard/my-listings">
                  My Listings
                </Link>
              </>
            )
          }

          {
            user ? (
              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  role="button"
                  className="cursor-pointer"
                >
                  <img
                    src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >

                  <li>
                    <Link href="/dashboard/add-pet">
                      Dashboard
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

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Login
                </button>

              </Link>
            )
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;