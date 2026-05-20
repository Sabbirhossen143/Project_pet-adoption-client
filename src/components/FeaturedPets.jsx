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
        "http://localhost:5000/pets"
      );

      setPets(res.data.slice(0, 6));

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Featured Pets
          </h2>

          <p className="text-gray-600 mt-4">
            Meet adorable pets waiting for adoption
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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