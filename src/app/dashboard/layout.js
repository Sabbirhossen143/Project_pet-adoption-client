"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}) {

  return (

    <div className="min-h-screen bg-[#F8FAFC]">

      {/* MAIN */}
      <div className="flex">

        {/* SIDEBAR */}
        <aside
          className="
            w-[250px]
            min-h-screen
            bg-[#16C6C0]
            border-r
            border-gray-100
            shadow-lg
            p-6
          "
        >

          <h2
            className="
              text-2xl
              font-extrabold
              text-[#0f172a]
              mb-8
            "
          >

            Dashboard

          </h2>



          <div className="space-y-3">

            <Link
              href="/dashboard/add-pet"
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
                font-semibold
              "
            >

              <>
  <img
    src="/images/add.gif"
    alt="Add Pet"
    className="
      w-5
      h-5
      object-contain
    "
  />

  <span>
    Add Pet
  </span>
</>

            </Link>



            <Link
              href="/dashboard/my-listings"
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
                font-semibold
              "
            >

              <>
  <img
    src="/images/list.gif"
    alt="Listings"
    className="
      w-5
      h-5
      object-contain
    "
  />

  <span>
    My Listings
  </span>
</>

            </Link>



            <Link
              href="/dashboard/my-requests"
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
                font-semibold
              "
            >

              <>
  <img
    src="/images/sos.gif"
    alt="Requests"
    className="
      w-5
      h-5
      object-contain
    "
  />

  <span>
    My Requests
  </span>
</>

            </Link>

          </div>

        </aside>



        {/* CONTENT */}
        <main className="flex-1 p-6">

          {children}

        </main>

      </div>

    </div>

  );

}