"use client";

import React, {
  useEffect,
  useState,
} from "react";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import axiosSecure from "@/hooks/useAxiosSecure";

import axios from "axios";

import { useRouter } from "next/navigation";

const UpdatePetPage = ({ params }) => {

  const { id } = React.use(params);

  const router = useRouter();

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
        `http://localhost:5000/pets/${id}`
      );

      reset(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  const onSubmit = async (data) => {

    try {

      const res = await axiosSecure.put(
        `/pets/${id}`,
        data
      );



      if (res.data.modifiedCount > 0) {

        toast.success("Pet Updated");

        router.push("/dashboard/my-listings");
      }

    } catch (error) {

      console.log(error);

      toast.error("Update Failed");
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
    <div className="max-w-5xl mx-auto px-4 py-12">

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-8">

          Update Pet

        </h1>



        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6"
        >

          <input
            {...register("petName")}
            placeholder="Pet Name"
            className="border p-4 rounded-xl"
          />



          <input
            {...register("species")}
            placeholder="Species"
            className="border p-4 rounded-xl"
          />



          <input
            {...register("breed")}
            placeholder="Breed"
            className="border p-4 rounded-xl"
          />



          <input
            {...register("age")}
            placeholder="Age"
            className="border p-4 rounded-xl"
          />



          <input
            {...register("image")}
            placeholder="Image URL"
            className="border p-4 rounded-xl"
          />



          <input
            {...register("location")}
            placeholder="Location"
            className="border p-4 rounded-xl"
          />



          <input
            type="number"
            {...register("adoptionFee")}
            placeholder="Adoption Fee"
            className="border p-4 rounded-xl"
          />



          <textarea
            {...register("description")}
            rows={5}
            placeholder="Description"
            className="border p-4 rounded-xl md:col-span-2"
          ></textarea>



          <button className="bg-blue-600 text-white py-4 rounded-xl md:col-span-2 hover:bg-blue-700">

            Update Pet

          </button>

        </form>

      </div>

    </div>
  );
};

export default UpdatePetPage;