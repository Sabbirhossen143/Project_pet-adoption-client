"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {

  const [dark, setDark] = useState(false);



  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");



    if (savedTheme === "dark") {

      document.body.classList.add("bg-gray-900");

      document.body.classList.add("text-white");

      setDark(true);
    }

  }, []);




  const toggleTheme = () => {

    if (dark) {

      document.body.classList.remove("bg-gray-900");

      document.body.classList.remove("text-white");

      localStorage.setItem("theme", "light");

    } else {

      document.body.classList.add("bg-gray-900");

      document.body.classList.add("text-white");

      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };



  return (
    <button
      onClick={toggleTheme}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >

      {
        dark
          ? "Light"
          : "Dark"
      }

    </button>
  );
};

export default ThemeToggle;