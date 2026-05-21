"use client";

import { useContext } from "react";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import PrivateRoute from "@/components/PrivateRoute";

import { AuthContext } from "@/providers/AuthProvider";

import axiosSecure from "@/hooks/useAxiosSecure";

const AddPetPage = () => {

  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();



  const onSubmit = async (data) => {

    const petData = {
      ...data,
      adoptionFee: parseFloat(data.adoptionFee),
      ownerEmail: user?.email,
      adopted: false,
      createdAt: new Date(),
    };



    try {

      const res = await axiosSecure.post(
        "/pets",
        petData
      );



      if (res.data.insertedId) {

        toast.success("Pet Added Successfully");

        reset();
      }

    } catch (error) {

      console.log(error);

      toast.error("Failed To Add Pet");
    }
  };



  return (
    <PrivateRoute>

      <div className="max-w-5xl mx-auto px-4 py-12">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-4xl font-bold text-center mb-8">
            Add Pet
          </h1>



          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6"
          >

            <input
              {...register("petName")}
              placeholder="Pet Name"
              className="border p-4 rounded-xl"
              required
            />

            <input
              {...register("species")}
              placeholder="Species"
              className="border p-4 rounded-xl"
              required
            />

            <input
              {...register("breed")}
              placeholder="Breed"
              className="border p-4 rounded-xl"
              required
            />

            <select
  {...register("gender")}
  className="
    border
    p-4
    rounded-xl
    bg-white
  "
  required
>

  <option value="">
    Select Gender
  </option>

  <option value="Male">
    Male
  </option>

  <option value="Female">
    Female
  </option>

</select>

            <input
              {...register("age")}
              placeholder="Age"
              className="border p-4 rounded-xl"
              required
            />

            <input
              {...register("image")}
              placeholder="Image URL"
              className="border p-4 rounded-xl"
              required
            />

            <input
              {...register("location")}
              placeholder="Location"
              className="border p-4 rounded-xl"
              required
            />

            <input
              type="number"
              {...register("adoptionFee")}
              placeholder="Adoption Fee"
              className="border p-4 rounded-xl"
              required
            />

            <textarea
              {...register("description")}
              placeholder="Description"
              rows={5}
              className="border p-4 rounded-xl md:col-span-2"
              required
            ></textarea>



            <button className="bg-blue-600 text-white py-4 rounded-xl md:col-span-2 hover:bg-blue-700">

              Add Pet

            </button>

          </form>

        </div>

      </div>

    </PrivateRoute>
  );
};

export default AddPetPage;