"use client";

import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { AuthContext } from "@/providers/AuthProvider";

import axiosSecure from "@/hooks/useAxiosSecure";

const PetDetailsPage = ({ params }) => {

  const { user } = useContext(AuthContext);

  const [pet, setPet] = useState(null);

  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();



  useEffect(() => {

    fetchPet();

  }, []);



  const fetchPet = async () => {

    try {

      const res = await axios.get(
        `https://project-pet-adoption-server.onrender.com/pets/${params.id}`
      );

      setPet(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  const onSubmit = async (data) => {

    // Prevent Owner Adoption
    if (user?.email === pet?.ownerEmail) {

      return toast.error(
        "You cannot adopt your own pet"
      );
    }



    const requestData = {
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.image,
      userName: user?.displayName,
      userEmail: user?.email,
      pickupDate: data.pickupDate,
      message: data.message,
      status: "pending",
      requestDate: new Date(),
    };



    try {

      const res = await axiosSecure.post(
        "/requests",
        requestData
      );



      if (res.data.insertedId) {

        toast.success(
          "Adoption Request Submitted"
        );

        reset();
      }

    } catch (error) {

      console.log(error);

      toast.error("Failed To Request");
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

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Pet Details */}
        <div>

          <img
            src={pet.image}
            alt={pet.petName}
            className="w-full rounded-2xl shadow-lg"
          />

          <div className="mt-6">

            <h1 className="text-5xl font-bold">
              {pet.petName}
            </h1>

            <p className="mt-4">
              Species: {pet.species}
            </p>

            <p className="mt-2">
              Breed: {pet.breed}
            </p>

            <p className="mt-2">
              Age: {pet.age}
            </p>

            <p className="mt-2">
              Location: {pet.location}
            </p>

            <p className="mt-2">
              Fee: ${pet.adoptionFee}
            </p>

            <p className="mt-5 text-gray-600">
              {pet.description}
            </p>

          </div>

        </div>



        {/* Adoption Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">

          <h2 className="text-3xl font-bold mb-6">
            Adoption Request
          </h2>



          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            <input
              value={pet.petName}
              readOnly
              className="border p-4 rounded-xl w-full bg-gray-100"
            />



            <input
              value={user?.displayName || ""}
              readOnly
              className="border p-4 rounded-xl w-full bg-gray-100"
            />



            <input
              value={user?.email || ""}
              readOnly
              className="border p-4 rounded-xl w-full bg-gray-100"
            />



            <input
              type="date"
              {...register("pickupDate")}
              className="border p-4 rounded-xl w-full"
              required
            />



            <textarea
              {...register("message")}
              placeholder="Message"
              rows={5}
              className="border p-4 rounded-xl w-full"
              required
            ></textarea>



            <button className="bg-blue-600 text-white py-4 rounded-xl w-full hover:bg-blue-700">

              Adopt Now

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default PetDetailsPage;