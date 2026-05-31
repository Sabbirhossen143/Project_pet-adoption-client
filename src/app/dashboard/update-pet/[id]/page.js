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
  watch,
  setValue,
} = useForm();

const inputStyle = `
  w-full
  bg-[#F8FAFC]
  border
  border-gray-200
  focus:border-[#F9C62B]
  focus:ring-4
  focus:ring-[#F9C62B]/10
  outline-none
  px-4
  py-3
  rounded-2xl
  transition
  duration-300
  text-sm
`;

  useEffect(() => {

    fetchPet();

  }, []);



  const fetchPet = async () => {

    try {

      const res = await axios.get(
        `https://project-pet-adoption-server.onrender.com/pets/${id}`
      );

      reset(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  const onSubmit = async (data) => {

    delete data._id;

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

  console.log("UPDATE ERROR:", error);

  console.log(
    "SERVER RESPONSE:",
    JSON.stringify(
      error.response?.data,
      null,
      2
    )
  );

  toast.error(
    error.response?.data?.message ||
    "Update Failed"
  );

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
    <div className="max-w-6xl mx-auto px-0 md:px-4 py-5">

      <div
  className="
    bg-white/95
    backdrop-blur-2xl
    border
    border-[#F9C62B]/80
    rounded-[32px]
    shadow-[0_20px_60px_rgba(249,198,43,0.18)]
    p-3
    sm:p-8
  "
>

        <div
  className="
    flex
    items-center
    justify-center
    gap-3
    mb-4
  "
>

  <img
    src="/images/edit.png"
    alt="Update Pet"
    className="
      w-12
      md:w-14
      h-12
      md:h-14
      object-contain
    "
  />

  <div>

    <h1
      className="
        text-2xl
        md:text-3xl
        sm:text-4xl
        font-extrabold
        text-[#0f172a]
      "
    >
      Update Pet
    </h1>

    <p
      className="
        text-gray-500
        text-[10px]
        sm:text-sm
      "
    >
      Update your pet listing information
    </p>

  </div>

</div>

<form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-4 md:space-y-5"
>

  {/* ROW 1 */}
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:grid-cols-2">

  <div>
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Pet Name *
    </label>
    <input {...register("petName")} placeholder="Pet Name" className={inputStyle} />
  </div>

  <div>
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Species *
    </label>
    <input {...register("species")} placeholder="Species" className={inputStyle} />
  </div>

  <div>
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Age (Years) *
    </label>
    <input {...register("age")} placeholder="Age" className={inputStyle} />
  </div>

  <div className="lg:hidden">
  <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
    Location *
  </label>

  <input
    {...register("location")}
    placeholder="Location"
    className={inputStyle}
  />
</div>


</div>


  {/* ROW 2 */}
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

  <div>
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Breed *
    </label>
    <input {...register("breed")} placeholder="Breed" className={inputStyle} />
  </div>

  <div>
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Adoption Fee ($)
    </label>
    <input
      type="number"
      {...register("adoptionFee")}
      placeholder="Adoption Fee"
      className={inputStyle}
    />
  </div>

  <div className="hidden lg:block">
    <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
      Location *
    </label>
    <input {...register("location")} placeholder="Location" className={inputStyle} />
  </div>

</div>

  {/* ROW 3 */}
  <div className="grid grid-cols-1 gap-3">

    <div>
  <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
    Image URL *
  </label>

  <input
    {...register("image")}
    placeholder="Image URL"
    className={inputStyle}
  />
</div>

  </div>

  {/* DESCRIPTION */}
  <div>
  <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 mb-1.5">
    Description *
  </label>

  <textarea
    {...register("description")}
    rows={5}
    placeholder="Description"
    className="
      w-full
      bg-[#F8FAFC]
      border
      border-gray-200
      focus:border-[#F9C62B]
      focus:ring-4
      focus:ring-[#F9C62B]/10
      outline-none
      p-4
      rounded-2xl
      text-sm
    "
  />
</div>

  {/* BUTTONS */}
  <div
    className="
      grid
      grid-cols-2
      gap-3
      pt-2
    "
  >

    <button
      type="button"
      onClick={() =>
        router.push("/dashboard/my-listings")
      }
      className="
        w-full
        bg-white
        border
        border-red-200
        hover:bg-red-500
        hover:text-white
        text-red-500
        py-3
        rounded-2xl
        font-bold
        transition
      "
    >
      Cancel
    </button>

    <button
      type="submit"
      className="
        w-full
        bg-[#16C6C0]
        hover:bg-[#11b3ad]
        text-white
        py-3
        rounded-2xl
        font-bold
        shadow-lg
        transition
      "
    >
      Save Changes
    </button>

  </div>

</form>

      </div>

    </div>
  );
};

export default UpdatePetPage;