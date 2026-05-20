"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import PetCard from "@/components/PetCard";

const AllPetsPage = () => {

  const [pets, setPets] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [species, setSpecies] = useState("");



  useEffect(() => {

    fetchPets();

  }, [search, species]);



  const fetchPets = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/pets?search=${search}&species=${species}`
      );

      setPets(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }



  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-5xl font-bold text-center mb-10">
        All Pets
      </h1>



      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="Search by pet name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-4 rounded-xl w-full"
        />



        <select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="border p-4 rounded-xl"
        >

          <option value="">
            All Species
          </option>

          <option value="Dog">
            Dog
          </option>

          <option value="Cat">
            Cat
          </option>

          <option value="Bird">
            Bird
          </option>

          <option value="Rabbit">
            Rabbit
          </option>

        </select>

      </div>



      {/* Pets */}
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
  );
};

export default AllPetsPage;