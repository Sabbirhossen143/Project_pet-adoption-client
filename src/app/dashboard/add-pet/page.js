"use client";

import { useContext, useState } from "react";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import PrivateRoute from "@/components/PrivateRoute";

import { AuthContext } from "@/providers/AuthProvider";

import axiosSecure from "@/hooks/useAxiosSecure";

const AddPetPage = () => {

  const { user } = useContext(AuthContext);
  const [gender, setGender] = useState("");
  const [vaccination, setVaccination] =
  useState("");

  const {
  register,
  handleSubmit,
  reset,
  watch,
  setValue,
} = useForm();



  const onSubmit = async (data) => {

  /* GENDER VALIDATION */
  if (!gender) {

    return toast.error(
      "Please select gender"
    );

  }



  /* VACCINATION VALIDATION */
  if (!vaccination) {

    return toast.error(
      "Please select vaccination status"
    );

  }



  const petData = {

    ...data,

    gender,

    vaccinationStatus: vaccination,

    adoptionFee: parseFloat(
      data.adoptionFee
    ),

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

      toast.success(
        "Pet Added Successfully"
      );



      reset();

      setGender("");

      setVaccination("");

    }

  } catch (error) {

    console.log(error);

    toast.error(
      "Failed To Add Pet"
    );

  }

};


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



  return (

    <PrivateRoute>

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
            border-1
          "
        >

          {/* HEADER */}
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
              src="/images/add-pet.png"
              alt="Add Pet"
              className="
                w-11
                md:w-14
                h-11
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
                  leading-none
                "
              >

                Add Pet

              </h1>



              <p
                className="
                  text-gray-500
                  mt-0.5
                  text-[11px]
                  sm:text-sm
                "
              >

                 Fill all details carefully for adoption

              </p>

            </div>

          </div>



          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 md:space-y-5"
          >

            {/* ROW 1 */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

              <input
                {...register("petName")}
                placeholder="Pet Name"
                className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
                required
              />



              <input
                {...register("species")}
                placeholder="Species"
                className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
                required
              />



              <div className="dropdown w-full">

  <div
    tabIndex={0}
    role="button"
    className="
      w-full
      h-[52px]
      bg-[#F8FAFC]
      border
      border-gray-200
      rounded-2xl
      shadow-sm
      px-4
      flex
      items-center
      justify-between
      cursor-pointer
      hover:border-[#F9C62B]
      focus-within:border-[#F9C62B]
      focus-within:border-2
      hover:shadow-md
      transition-all
      duration-300
    "
  >

    <span
      className="
        text-[13px]
        md:text-sm
        text-[#0f172a]
      "
    >

      {gender || "Select Gender"}

    </span>



    <span className="text-[11px]
    sm:text-sm text-[#F9C62B]">

      ▼

    </span>

  </div>



  <ul
    tabIndex={0}
    className="
      dropdown-content
      z-[20]
      menu
      p-2
      shadow-2xl
      bg-white
      rounded-2xl
      w-full
      mt-2
      border
      border-[#F9C62B]/20
      space-y-1
    "
  >

    <li>

      <button
        type="button"
        className="
          w-full
          text-left
          px-3
          py-2
          rounded-xl
          hover:bg-[#F9C62B]
          hover:text-black
          transition
          duration-300
        "
        onClick={() => {
          setGender("Male");
          document.activeElement.blur();
        }}
      >

        <span
  className="
    text-[13px]
    sm:text-sm
  "
>

  Male

</span>

      </button>

    </li>



    <li>

      <button
        type="button"
        className="
          w-full
          text-left
          px-3
          py-2
          rounded-xl
          hover:bg-[#F9C62B]
          hover:text-black
          transition
          duration-300
        "
        onClick={() => {
          setGender("Female");
          document.activeElement.blur();
        }}
      >

        <span
  className="
    text-[13px]
    sm:text-sm
  "
>

  Female

</span>

      </button>

    </li>

  </ul>



  <input
  type="hidden"
  value={gender}
  {...register("gender")}
/>

</div>

<input
  placeholder="Age"
  value={watch("age", "")}
  onChange={(e) =>
    setValue("age", e.target.value)
  }
  className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm block lg:hidden`}
/>

</div>

            {/* ROW 2 */}
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

              <input
                {...register("breed")}
                placeholder="Breed"
                className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
                required
              />

<div className="dropdown w-full">

  <div
    tabIndex={0}
    role="button"
    className="
      w-full
      h-[52px]
      bg-[#F8FAFC]
      border
      border-gray-200
      rounded-2xl
      shadow-sm
      px-4
      flex
      items-center
      justify-between
      cursor-pointer
      hover:border-[#F9C62B]
      focus-within:border-[#F9C62B]
      focus-within:border-2
      hover:shadow-md
      transition-all
      duration-300
    "
  >

    <span
      className="
        text-[13px]
        md:text-sm
        text-[#0f172a]
      "
    >

      {vaccination ||
        "Vaccination Status"}

    </span>



    <span className="text-[11px]
    sm:text-sm text-[#F9C62B]">

      ▼

    </span>

  </div>



  <ul
    tabIndex={0}
    className="
      dropdown-content
      z-[20]
      menu
      p-2
      shadow-2xl
      bg-white
      rounded-2xl
      w-full
      mt-2
      border
      border-[#F9C62B]/20
      space-y-1
    "
  >

    {[
      "Unvaccinated",
      "Partially Vaccinated",
      "Fully Vaccinated",
      "Boosted",
      "Up-to-Date",
    ].map((item) => (

      <li key={item}>

        <button
          type="button"
          className="
            w-full
            text-left
            px-3
            py-2
            rounded-xl
            hover:bg-[#F9C62B]
            hover:text-black
            transition
            duration-300
          "
          onClick={() => {
            setVaccination(item);
            document.activeElement.blur();
          }}
        >

          <span
          className="
            text-[13px]
            sm:text-sm
          "
        >

          {item}
          
          </span>

        </button>

      </li>

    ))}

  </ul>



  <input
  type="hidden"
  value={vaccination}
  {...register("vaccinationStatus")}
/>

</div>

              <input
  {...register("age")}
  placeholder="Age"
  className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm hidden lg:block`}
  required
/>

            </div>



            {/* ROW 3 */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

              <input
              type="number"
              {...register("adoptionFee")}
              placeholder="Adoption Fee"
              className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
              required
            />



              <input
                {...register("healthStatus")}
                placeholder="Health Status"
                className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
                required
              />



              <input
                {...register("location")}
                placeholder="Location"
                className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm`}
                required
              />

              <input
  placeholder="Image URL"
  value={watch("image", "")}
  onChange={(e) =>
    setValue("image", e.target.value)
  }
  className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm block lg:hidden`}
/>     

            </div>



            {/* ROW 4 */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

              <input
                {...register("ownerEmail")}
                defaultValue={user?.email}
                readOnly
                className="
    w-full
    col-span-2
    md:col-span-1

    bg-[#FFF8E6]
    border
    border-[#F9C62B]/30

    px-4
    py-3

    rounded-2xl
    text-sm
    text-gray-500
  "
              />



              <input
              {...register("image")}
              placeholder="Image URL"
               className={`${inputStyle} placeholder:text-[13px] sm:placeholder:text-sm hidden lg:block`}
              required
            />

            </div>



            {/* ROW 5 */}
            <textarea
              {...register("description")}
              placeholder="Description"
              rows={5}
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
                text-[13px]
                sm:text-sm
                placeholder:text-[13px]
                sm:placeholder:text-sm
              "
              required
            ></textarea>


            {/* BUTTONS */}
<div
  className="
    grid
    grid-cols-2
    gap-3
  "
>

  {/* CANCEL */}
  <button
    type="button"
    onClick={() => reset()}
    className="
      w-full
      bg-white
      border
      border-red-200
      hover:bg-red-500
      hover:text-white
      text-red-500

      py-3
      sm:py-4

      rounded-2xl

      font-bold

      text-xs
      sm:text-base

      transition
      duration-300

      shadow-md
    "
  >

    Cancel

  </button>



  {/* ADD PET */}
  <button
    type="submit"
    className="
      w-full
      bg-[#F9C62B]
      hover:bg-[#eab308]

      text-[#0f172a]

      py-3
      sm:py-4

      rounded-2xl

      font-bold

      text-xs
      sm:text-base

      transition
      duration-300

      shadow-lg

      hover:scale-[1.01]
    "
  >

    Add Pet

  </button>

</div>

          </form>

        </div>

      </div>

    </PrivateRoute>

  );

};

export default AddPetPage;