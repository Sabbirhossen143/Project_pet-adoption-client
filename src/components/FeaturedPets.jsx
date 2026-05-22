"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import PetCard from "./PetCard";

const FeaturedPets = () => {

  const [pets, setPets] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchPets();

  }, []);



  const fetchPets = async () => {

    try {

      const res = await axios.get(
        "https://project-pet-adoption-server.onrender.com/pets"
      );

      setPets(res.data.slice(0, 8));

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  if (loading) {

    return (

      <div className="py-20 flex justify-center">

        <span className="loading loading-spinner loading-lg text-[#16C6C0]"></span>

      </div>
    );
  }



  return (

    <section className="py-16 sm:py-20 bg-[#f8fbfb]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* SECTION TITLE */}
        <div className="text-center mb-12 md:mb-16">

          <p
            className="
              text-[#16C6C0]
              font-bold
              uppercase
              tracking-[4px]
              text-sm
              sm:text-base
            "
          >

            Meet Your Companion

          </p>



          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              text-[#111827]
            "
          >

            Featured Pets

          </h2>



          <p
            className="
              text-gray-500
              mt-5
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-8
            "
          >

            Discover adorable pets waiting
            for a loving family and forever home.

          </p>

        </div>



        {/* PET GRID */}
        <div
          className="
            grid md:grid-cols-2 lg:grid-cols-4 gap-4
    md:gap-5
    lg:gap-2       
          "
        >

          {
            pets.map((pet) => (

              <PetCard
                key={pet._id}
                pet={pet}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
};

export default FeaturedPets;