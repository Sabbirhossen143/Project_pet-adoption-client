"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "@/components/PetCard";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

const AllPetsPage = () => {

  const [pets, setPets] = useState([]);

  const [allSpecies, setAllSpecies] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [species, setSpecies] = useState("");

  const [location, setLocation] = useState("");

  const fetchSpecies = async () => {
  try {
    const res = await axios.get(
      "https://project-pet-adoption-server.onrender.com/species"
    );

    setAllSpecies(res.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchLocations = async () => {
  try {
    const res = await axios.get(
      "https://project-pet-adoption-server.onrender.com/locations"
    );

    setAllLocations(res.data);
  } catch (error) {
    console.log(error);
  }
};  

useEffect(() => {
  fetchSpecies();
  fetchLocations();
}, []);


  useEffect(() => {

    fetchPets();

  }, [search, species, location]);



  const fetchPets = async () => {

    try {

      const res = await axios.get(
        `https://project-pet-adoption-server.onrender.com/pets?search=${search}&species=${species}&location=${location}`
      );

      setPets(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex items-center justify-center gap-4 mb-10">

  <Image
    src="/images/pet.png"
    alt="Pets"
    width={0}
    height={0}

    className="object-contain  w-10 h-10 sm:w-12 sm:h-12"
  />

  <h1
    className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-extrabold
      text-[#0f172a]
    "
  >

    All Pets

  </h1>

</div>


{/* SEARCH & FILTER */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-[1.6fr_1fr_1fr]
    lg:grid-cols-[2.6fr_0.6fr_0.8fr]
    gap-4
    items-center
    mb-12
  "
>

  {/* SEARCH */}
  <div className="relative">

    <FaSearch
      className="
        absolute
        left-4
sm:left-5
        top-1/2
        -translate-y-1/2
        text-[#16C6C0]
        text-sm
sm:text-base
      "
    />



    <input
      type="text"
      placeholder="Search pet name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
  w-full
  bg-white
  border-2
  border-[#16C6C0]/30
  focus:border-[#16C6C0]
  focus:ring-4
  focus:ring-[#16C6C0]/10
  outline-none
  rounded-2xl
  pl-12
  sm:pl-14
  pr-4
  sm:pr-5
  py-2.5
  sm:py-3
  md:py-4
  shadow-lg
  transition
  duration-300
  text-[13px]
  sm:text-sm
  md:text-base
"
    />

  </div>



  {/* SMALL SCREEN FILTER WRAPPER */}
  <div
    className="
      grid
      grid-cols-2
      gap-4
      md:contents
    "
  >

    {/* SPECIES */}
    <div className="dropdown w-full">

      <div
        tabIndex={0}
        role="button"
        className="
          w-full
          h-[44px]
          sm:h-[50px]
          md:h-[56px]
          bg-white/95
          border
          border-[#16C6C0]/40
          rounded-2xl
          shadow-md
          px-3
          md:px-4
          flex
          items-center
          justify-between
          cursor-pointer
          hover:border-[#16C6C0]
          focus-within:border-[#16C6C0]
          focus-within:border-2
          hover:shadow-lg
          transition-all
          duration-300
        "
      >

        <div className="flex items-center gap-2 md:gap-3">

          <span className="text-[#16C6C0]">

            🐾

          </span>



          <span
            className="
              text-[13px]
              sm:text-sm
              md:text-base
              font-medium
              text-[#0f172a]
            "
          >

            {species || "All Species"}

          </span>

        </div>



        <span className="text-[#16C6C0] text-[14px] md:text-base">

          ▼

        </span>

      </div>



      <ul
        tabIndex={0}
        className="
          dropdown-content
          z-[20]
          
          p-2
          shadow-2xl
          bg-white
          rounded-2xl
          w-full
          mt-2
          border
          border-[#16C6C0]/20
          
        "
      >

        <li>
  <button
    className="
      w-full
      text-left
      px-2
      py-1.5
      sm:px-3
      sm:py-2
      rounded-xl
      hover:bg-[#16C6C0]
      hover:text-white
      transition
      duration-300
      text-[12px]
      md:text-sm
      mb-1
    "
    onClick={() => {
      setSpecies("");
      document.activeElement.blur();
    }}
  >
    All Species
  </button>
</li>

{/* Other Species */}
  <div className="grid grid-cols-2 gap-1">

    {allSpecies.map((item) => (
      <button
        key={item}
        className="
          text-left
          px-2
          py-1.5
          sm:px-3
          sm:py-2
          rounded-xl
          hover:bg-[#16C6C0]
          hover:text-white
          transition
          duration-300
          text-[12px]
          md:text-sm
        "
        onClick={() => {
          setSpecies(item);
          document.activeElement.blur();
        }}
      >
        {item}
      </button>
    ))}

  </div>

</ul>

    </div>



    {/* LOCATION */}
    <div className="dropdown w-full">

      <div
        tabIndex={0}
        role="button"
        className="
          w-full
          h-[44px]
          sm:h-[50px]
          md:h-[56px]
          bg-white/95
          border
          border-[#F9B000]/40
          rounded-2xl
          shadow-md
          px-3 md:px-4
          flex
          items-center
          justify-between
          cursor-pointer
          hover:border-[#F9B000]
focus-within:border-[#F9B000]
focus-within:border-2
hover:shadow-lg
transition-all
duration-300
        "
      >

        <div className="flex items-center gap-2 md:gap-3">

          <FaLocationDot className="text-[#F9B000]" />



          <span
            className="
              text-[13px]
              sm:text-sm
              md:text-base
              font-medium
              text-[#0f172a]
            "
          >

            {location || "All Locations"}

          </span>

        </div>



        <span className="text-[#F9B000] text-[14px] md:text-base">

          ▼

        </span>

      </div>



      <ul
        tabIndex={0}
        className="
          dropdown-content
          z-[20]
          p-1
          shadow-2xl
          bg-white
          rounded-2xl
          w-full
          mt-2
          border
          border-[#F9B000]/20
          
        "
      >

        <li>

          <button
          className="
    w-full
    text-left
    px-2
    py-1.5
    sm:px-3
    sm:py-2
    rounded-xl
    hover:bg-[#F9B000]
    hover:text-black
    transition
    duration-300
    text-[12px]
    md:text-sm
    mb-1
  "
            onClick={() => {
              setLocation("");
              document.activeElement.blur();
            }}
          >

            All Locations

          </button>

        </li>


        {/* Other Locations */}
<div className="grid grid-cols-2 gap-1">

  {allLocations.map((item) => (
    <button
      key={item}
      className="
        text-left
        px-1
        py-1.5
        sm:px-3
        sm:py-2
        rounded-xl
        hover:bg-[#F9B000]
        hover:text-black
        transition
        duration-300
        text-[11px]
sm:text-[12px]
md:text-sm
      "
      onClick={() => {
        setLocation(item);
        document.activeElement.blur();
      }}
    >
      {item}
    </button>
  ))}

</div>

      </ul>

    </div>

  </div>

</div>

      

      {/* Pets */}

{loading ? (

  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      py-20
    "
  >

    <div className="relative">

      <div
        className="
          w-20
          h-20
          rounded-full
          border-[6px]
          border-[#F9C62B]/20
        "
      ></div>

      <div
        className="
          absolute
          inset-0
          w-20
          h-20
          rounded-full
          border-[6px]
          border-transparent
          border-t-[#16C6C0]
          border-r-[#F9B000]
          animate-spin
        "
      ></div>

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <img
          src="/images/petss.png"
          alt="loading"
          className="
            w-8
            h-8
            animate-pulse
          "
        />
      </div>

    </div>

    <p
      className="
        mt-5
        text-sm
        font-semibold
        text-gray-500
      "
    >
      Loading pets...
    </p>

  </div>

) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4
    md:gap-5
    lg:gap-2">

        {
  pets.length === 0 ? (

    <div
      className="
        col-span-full
        flex
        flex-col
        items-center
        justify-center
        py-20
        text-center
      "
    >

      <Image
  src="/images/nopet.png"
  alt="No Pets"
  width={180}
  height={180}
  quality={100}
  priority
  unoptimized
  className="
    object-contain
    drop-shadow-2xl
  "
/>



      <h2
        className="
          text-2xl
          sm:text-3xl
          font-bold
          text-[#0f172a]
          mt-4
        "
      >

        No Pets Found

      </h2>



      <p
        className="
          text-gray-500
          mt-3
          max-w-md
        "
      >

        Try changing search keywords or filters
        to find your perfect pet companion.

      </p>

    </div>

  ) : (

    pets.map((pet) => (
      <PetCard
        key={pet._id}
        pet={pet}
      />
    ))

  )
}

      </div>

      )}

    </div>
  );
};

export default AllPetsPage;