"use client";

export default function DashboardHome() {

  return (

    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        min-h-[70vh]
        text-center
      "
    >

      <img
        src="/images/dashboardd.png"
        alt="Dashboard"
        className="
          w-15
          h-15
          md:w-28
          md:h-28
          object-contain
          mb-6
        "
      />



      <h1
        className="
          text-2xl
          md:text-4xl
          font-extrabold
          text-[#0f172a]
        "
      >

        Welcome to Dashboard

      </h1>



      <p
        className="
          mt-4
          text-gray-500
          max-w-md
          text-sm
          md:text-lg
        "
      >

        Manage your pets, listings, and adoption
        requests easily from one place.

      </p>

    </div>

  );

}