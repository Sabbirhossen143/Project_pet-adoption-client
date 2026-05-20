"use client";

import Link from "next/link";

const NotFoundPage = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-8xl font-bold text-blue-600">

        404

      </h1>



      <h2 className="text-4xl font-bold mt-6">

        Page Not Found

      </h2>



      <p className="text-gray-600 mt-4 max-w-lg">

        Sorry, the page you are looking for does not exist.

      </p>



      <Link href="/">

        <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">

          Back To Home

        </button>

      </Link>

    </div>
  );
};

export default NotFoundPage;
