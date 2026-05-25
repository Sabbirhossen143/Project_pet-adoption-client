"use client";

import Link from "next/link";

import { usePathname }
from "next/navigation";

export default function DashboardLayout({
  children,
}) {

  const pathname = usePathname();

  return (

    <div className="min-h-screen bg-[#F8FAFC]">

      {/* TOP DASHBOARD BAR */}
<div
  className="
    fixed
    top-[72px]
    md:top-[90px]
    left-1/2
    -translate-x-1/2
    z-40

    w-[95%]
    sm:w-[92%]
    lg:w-[75%]

    bg-white/95
    backdrop-blur-xl

    border
    border-[#F9C62B]/20

    shadow-[0_10px_40px_rgba(0,0,0,0.08)]

    rounded-[30px]

    mt-3
  "
>

        <div
  className="
   max-w-4xl
    mx-auto
    px-3
sm:px-4
py-3
    flex
    flex-col
    items-center
    text-center
  "
>

          {/* TITLE */}
<div className="mb-4">

  {/* IMAGE + TITLE */}
  <div
    className="
      flex
      items-center
      justify-center
      gap-3
    "
  >

    <img
      src="/images/dashboardd.png"
      alt="dashboard"
      className="
        w-7
h-7
sm:w-8
sm:h-8
        object-contain
      "
    />



    <h1
      className="
        text-lg
sm:text-2xl
        font-extrabold
        text-[#0f172a]
        leading-none
      "
    >

      Dashboard

    </h1>

  </div>



  {/* SUBTEXT */}
  <p
    className="
      text-[10px]
sm:text-xs
      text-gray-500
      mt-1
      text-center
    "
  >

    Manage your pets and requests

  </p>

</div>
          



          {/* TOP MENU */}
<div
  className="
    flex
    flex-wrap
    justify-center
    gap-2
sm:gap-3
  "
>

            {/* ADD PET */}
            <Link
              href="/dashboard/add-pet"
              className={`
                flex
                items-center
                gap-1
                md:gap-3
                px-2.5
sm:px-3
py-1.5
sm:py-2
                rounded-2xl
                transition-all
                duration-300
                font-semibold
                text-[10px]
sm:text-xs
                border

                ${
                  pathname ===
                  "/dashboard/add-pet"
                    ? "bg-[#F9C62B] text-black border-[#F9C62B] shadow-lg"
                    : "bg-white border-[#16C6C0]/20 text-[#16C6C0] hover:bg-[#16C6C0] hover:text-white"
                }
              `}
            >

              <img
                src="/images/add.gif"
                alt="Add Pet"
                className="
                  w-3.5
h-3.5
sm:w-4
sm:h-4
                  object-contain
                "
              />

              Add Pet

            </Link>



            {/* MY LISTINGS */}
            <Link
              href="/dashboard/my-listings"
              className={`
                flex
                items-center
                gap-1
                md:gap-3
                px-3
                py-2
                rounded-2xl
                transition-all
                duration-300
                font-semibold
                text-xs
                border

                ${
                  pathname ===
                  "/dashboard/my-listings"
                    ? "bg-[#F9C62B] text-black border-[#F9C62B] shadow-lg"
                    : "bg-white border-[#16C6C0]/20 text-[#16C6C0] hover:bg-[#16C6C0] hover:text-white"
                }
              `}
            >

              <img
                src="/images/list.gif"
                alt="Listings"
                className="
                  w-4
                  h-4
                  object-contain
                "
              />

              My Listings

            </Link>



            {/* MY REQUESTS */}
            <Link
              href="/dashboard/my-requests"
              className={`
                flex
                items-center
                gap-1
                md:gap-3
                px-3
                py-2
                rounded-2xl
                transition-all
                duration-300
                font-semibold
                text-xs
                border

                ${
                  pathname ===
                  "/dashboard/my-requests"
                    ? "bg-[#F9C62B] text-black border-[#F9C62B] shadow-lg"
                    : "bg-white border-[#16C6C0]/20 text-[#16C6C0] hover:bg-[#16C6C0] hover:text-white"
                }
              `}
            >

              <img
                src="/images/sos.gif"
                alt="Requests"
                className="
                  w-4
                  h-4
                  object-contain
                "
              />

              My Requests

            </Link>

          </div>

        </div>

      </div>



      {/* PAGE CONTENT */}
      <main
        className="
          max-w-7xl
          mx-auto
          px-4
          pt-[130px]
          md:pt-[150px]
pb-8
        "
      >

        {children}

      </main>

    </div>

  );

}