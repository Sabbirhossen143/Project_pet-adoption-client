"use client";

import Link from "next/link";

const NotFoundPage = () => {

  return (
  <div
    className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-[#f8fbfb]
      via-white
      to-[#fff8e6]
      px-4
    "
  >

    <div
      className="
        max-w-2xl
        text-center
      "
    >

      {/* IMAGE */}
      <img
        src="/images/404.png"
        alt="404"
        className="
          w-35
          md:w-40
          mx-auto
          drop-shadow-2xl
        "
      />

      {/* 404 */}
      <h1
        className="
          text-7xl
          sm:text-8xl
          font-extrabold
          text-[#F9B000]
          mt-4
        "
      >
        404
      </h1>

      {/* TITLE */}
      <h2
        className="
          text-3xl
          sm:text-5xl
          font-extrabold
          text-[#0f172a]
          mt-3
        "
      >
        Oops! Page Not Found
      </h2>

      {/* MESSAGE */}
      <p
        className="
          text-gray-500
          mt-5
          text-sm
          sm:text-lg
          max-w-xl
          mx-auto
          leading-relaxed
        "
      >
        The page you are looking for seems to
        have wandered away like a curious pet.
        Let's help you find your way back home.
      </p>

      {/* BUTTON */}
      <Link href="/">
        <button
          className="
            mt-8
            bg-[#16C6C0]
            hover:bg-[#11b3ad]
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            flex
            items-center
            gap-2
            mx-auto
          "
        >
          🏠 Back To Home
        </button>
      </Link>

    </div>

  </div>
);

};

export default NotFoundPage;
