"use client";

import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { AuthContext } from "@/providers/AuthProvider";

import axiosSecure from "@/hooks/useAxiosSecure";

const PetDetailsPage = ({ params }) => {

   const id = React.use(params).id;
  const { user } = useContext(AuthContext);

  const [pet, setPet] = useState(null);

  const [loading, setLoading] = useState(true);

  const [submitted, setSubmitted] = useState(false);

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
        `https://project-pet-adoption-server.onrender.com/pets/${id}`
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

  ownerEmail: pet.ownerEmail,

  userName:
    user?.displayName || "User",

  userEmail:
    user?.email,

  pickupDate:
    data.pickupDate,

  message:
    data.message,

  status: "pending",

  createdAt: new Date(),

};



    try {

      const res = await axiosSecure.post(
        "/requests",
        requestData
      );



      if (res.data.insertedId) {

  toast.success(
  "Adoption Request Submitted",
  {
    icon: (
      <img
        src="/images/request1.png"
        alt="request"
        className="
          w-5 h-5
          md:w-7 md:h-7
          rounded-full
          object-cover
        "
      />
    ),

    style: {
      borderRadius:
        window.innerWidth < 640
          ? "14px"
          : "20px",

      background:
        "linear-gradient(135deg,#16C6C0,#0EA5A4)",

      color: "#fff",

      border:
        "2px solid #7DE7E2",

      fontWeight: "700",

      padding:
        window.innerWidth < 640
          ? "8px 12px"
          : "14px 18px",

      fontSize:
        window.innerWidth < 640
          ? "11px"
          : "14px",

      minWidth:
        window.innerWidth < 640
          ? "240px"
          : "280px",

      maxWidth:
        window.innerWidth < 640
          ? "280px"
          : "340px",

      lineHeight: "1.2",

      marginTop:
        window.innerWidth < 640
          ? "10px"
          : "35px",
    },
  }
);

  setSubmitted(true);

  reset();
}

    } catch (error) {

      console.log(error);

      toast.error("❌ Failed To Request");
    }
  };


  const petInfoCard = `
  bg-gradient-to-br
  from-[#F0FFFE]
  via-[#DDFCF9]
  to-[#BDF5F1]
  p-4
  rounded-3xl
  border
  border-[#16C6C0]/40
`;

const petInfoTitle = `
  text-[11px]
  uppercase
  tracking-wider
  text-[#16C6C0]
  font-bold
  mb-1
`;

const petInfoValue = `
  font-bold
  text-[#0f172a]
  text-base
  md:text-lg
`;


  const inputStyle = `
  w-full
  bg-[#F8FAFC]
  border
  border-1
  border-[#F9C62B]
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

  if (loading) {

  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

}
    

    return (
  <div className="max-w-5xl mx-auto px-2 md:px-4 py-4 md:py-8">

    <div className="grid lg:grid-cols-[1.15fr_0.85fr] md:grid-cols-2 gap-8 md:gap-8">

      {/* PET DETAILS */}
      <div>

        <div className="relative">

          <img
            src={pet.image}
            alt={pet.petName}
            className="
  w-full
  h-[300px]
  object-cover
  rounded-[32px]
  shadow-2xl
  border
  border-[#F9C62B]
"
          />

          <div
            className="
              absolute
              top-4
              right-4
              bg-[#16C6C0]
              text-white
              px-4
              py-1.5
              rounded-full
              text-xs
              font-bold
            "
          >
            {pet.adopted
              ? "Adopted"
              : "Available"}
          </div>

        </div>

        <div className="mt-4">

          <div
            className="
              flex
              justify-between
              items-start
              gap-3
            "
          >

            <div>

              <h1
                className="
                  text-2xl
                  md:text-3xl
                  font-extrabold
                  text-[#0f172a]
                "
              >
                {pet.petName}
              </h1>

              <div
                className="
                  flex
                  gap-2
                  mt-2
                  flex-wrap
                "
              >

                <span
                  className="
                    bg-[#F9C62B]/15
                    text-[#F9B000]
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                  "
                >
                  {pet.species}
                </span>

                <span
                  className="
                    bg-[#16C6C0]/10
                    text-[#16C6C0]
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                  "
                >
                  {pet.gender}
                </span>

              </div>

            </div>

            <div className="text-right">

              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Adoption Fee
              </p>

              <h2
                className="
                  text-2xl
                  md:text-2xl
                  font-extrabold
                  text-[#F9B000]
                "
              >
                ${pet.adoptionFee}
              </h2>

            </div>

          </div>

          
          {/* INFO CARDS */}
<div
  className="
    grid
    grid-cols-2
    gap-2
    md:gap-3
    mt-3
  "
>
  <div className={petInfoCard}>
    <p className={petInfoTitle}>🐾 Species</p>
    <h3 className={petInfoValue}>{pet.species}</h3>
  </div>

  <div className={petInfoCard}>
    <p className={petInfoTitle}>🦴 Breed</p>
    <h3 className={petInfoValue}>{pet.breed}</h3>
  </div>

  <div className={petInfoCard}>
    <p className={petInfoTitle}>🎂 Age</p>
    <h3 className={petInfoValue}>{pet.age} Years</h3>
  </div>

  <div className={petInfoCard}>
    <p className={petInfoTitle}>⚥ Gender</p>
    <h3 className={petInfoValue}>{pet.gender}</h3>
  </div>

  <div className={petInfoCard}>
    <p className={petInfoTitle}>❤️ Health Status</p>
    <h3 className={petInfoValue}>{pet.healthStatus}</h3>
  </div>

  <div className={petInfoCard}>
    <p className={petInfoTitle}>💉 Vaccination Status</p>
    <h3 className={petInfoValue}>
      {pet.vaccinationStatus}
    </h3>
  </div>
</div>


<div
  className="
    mt-2
    md:mt-3
    bg-gradient-to-r
    from-[#E8FFFE]
    via-[#D9FBF9]
    to-[#C8F7F4]
    p-5
    rounded-3xl
    border
    border-[#16C6C0]/30
  "
>
  <p className={petInfoTitle}>
    📍 Location
  </p>

  <h3 className={petInfoValue}>
    {pet.location}
  </h3>
</div>


    <div
  className="
    mt-5
    bg-gradient-to-br
    from-[#E8FFFE]
    via-[#D9FBF9]
    to-[#C8F7F4]
    p-5
    rounded-3xl
    border
    border-[#16C6C0]/30
  "
>

            <h3
  className="
    text-xl
    md:text-2xl
    font-extrabold
    text-[#0f172a]
    mb-3
  "
>
              About {pet.petName}
            </h3>

            <p
  className="
    text-[#374151]
    leading-relaxed
    text-sm
    md:text-base
  "
>
              {pet.description}
            </p>

          </div>

        </div>

      </div>


{/* RIGHT SIDE */}

<div>

  {!user ? (

  <div
    className="
      bg-white
      rounded-[32px]
      p-6 md:p-8
      text-center
      border
      border-[#16C6C0]/20
      h-fit
      mb-5
    "
  >

    <img
      src="/images/login-pet.png"
      alt="Login"
      className="
        w-20
        h-20
        mx-auto
        mb-5
      "
    />

    <h2
      className="
        text-2xl
        font-extrabold
        text-[#0f172a]
      "
    >
      Login Required
    </h2>

    <p
      className="
        text-gray-600
        mt-3
      "
    >
      Please login to submit an adoption request
      for this pet.
    </p>

    <button
      onClick={() =>
        window.location.href = "/login"
      }
      className="
        mt-6
        w-full
        py-3
        rounded-2xl
        bg-[#16C6C0]
        hover:bg-[#14b3ae]
        text-white
        font-bold
      "
    >
      Login Now
    </button>

  </div>

) : pet.adopted ? (

    <div
  className="
    bg-gradient-to-br
    from-[#FEF2F2]
    to-[#FFF5F5]
    rounded-[32px]
    p-6 md:p-8
    text-center
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    border
    border-red-200
    h-fit
    mb-5
  "
>

  <div
    className="
      w-20
      h-20
      mx-auto
      mb-5
      rounded-full
      overflow-hidden
      bg-red-50
      border-2
      border-red-400
      flex
      items-center
      justify-center
      shadow-md
    "
  >
    <img
      src="/images/adopt.png"
      alt="Adopted"
      className="
        w-12
        h-12
        object-contain
      "
    />
  </div>

  <h2
    className="
      text-2xl
      md:text-3xl
      font-extrabold
      text-red-600
    "
  >
    {pet.petName} Has Been Adopted!
  </h2>

  <p
    className="
      text-gray-600
      text-sm
      md:text-base
      mt-3
      leading-relaxed
      max-w-md
      mx-auto
    "
  >
    This pet has found a loving forever home.
    Explore other wonderful pets waiting
    for adoption.
  </p>

  <button
    onClick={() =>
      window.location.href = "/all-pets"
    }
    className="
      mt-6
      w-full
      py-3
      rounded-2xl
      bg-red-500
      hover:bg-red-600
      text-white
      font-bold
      transition
      duration-300
      shadow-lg
      hover:scale-[1.01]
    "
  >
    Browse Available Pets
  </button>

</div>

  ) : user?.email === pet?.ownerEmail ? (

    <div
      className="
        bg-gradient-to-br
from-[#FFF8E6]
to-[#FFFDF6]
        rounded-[32px]
        p-6 md:p-8
        text-center
        shadow-2xl
        border
        border-[#F9C62B]
        h-fit
        mb-5
      "
    >

      <div
  className="
    w-20
    h-20
    mx-auto
    mb-5
    rounded-full
    overflow-hidden
    border-2
    border-[#F97316]
    shadow-lg
    flex
    items-center
    justify-center
    bg-[#FFF3D6]
  "
>
  <img
    src="/images/own.png"
    alt="My Pet"
    className="
      w-10
      h-10
      object-contain
    "
  />
</div>

      <h2 className="
  text-xl
  md:text-2xl
  font-extrabold
  text-[#0f172a]
">
        This Is Your Pet Listing
      </h2>

      <p className="
  text-gray-600
  text-sm
  mt-3
  leading-relaxed
">
        You are the owner of this pet.
        Adoption requests are only available
        for other users.
      </p>

      <button
        onClick={() =>
          window.location.href =
          "/dashboard/my-listings"
        }
        className="
  mt-5
  w-full
  py-3
  rounded-2xl
  bg-[#F9C62B]
  hover:bg-[#eab308]
  text-[#0f172a]
  font-bold
  transition
  duration-300
  shadow-lg
"
      >
        View My Listings
      </button>

    </div>

  ) : submitted ? (

    <div
  className="
    bg-gradient-to-br
from-[#ECFDF5]
to-[#F0FDF4]
    rounded-[32px]
    p-6 md:p-8
    text-center
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    border
    border-[#F9C62B]/40
    h-fit
    mb-5
  "
>

  <div
    className="
      w-20
      h-20
      mx-auto
      mb-5
      rounded-full
      bg-[#D1FAE5]
      border-[#10B981]
      border-2
      flex
      items-center
      justify-center
      shadow-md
    "
  >
    <img
      src="/images/success.png"
      alt="Success"
      className="
        w-10
        h-10
        object-contain
      "
    />
  </div>

  <h2
    className="
      text-2xl
      md:text-3xl
      font-extrabold
      text-[#065F46]
    "
  >
    Request Submitted!
  </h2>

  <p
    className="
      text-gray-600
      text-sm
      md:text-base
      mt-3
      leading-relaxed
      max-w-md
      mx-auto
    "
  >
    Your adoption request for
    <span className="font-semibold text-[#10B981]">
      {" "}{pet.petName}
    </span>
    {" "}has been successfully sent to the owner.
    You can track the request status from your dashboard.
  </p>

  <button
    onClick={() =>
      window.location.href =
      "/dashboard/my-requests"
    }
    className="
      mt-6
      w-full
      py-3
      rounded-2xl
      bg-[#10B981]
hover:bg-[#059669]
text-white
      font-bold
      transition
      duration-300
      shadow-lg
      hover:scale-[1.01]
    "
  >
    View My Requests
  </button>

</div>

  ) : (   

        
        <div
  className="
  bg-gradient-to-br
from-white
to-[#FFFDF6]
  p-4
  md:p-4
  rounded-[32px]
  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  h-fit
  border
  border-[#F9C62B]
"
>

          <div className="mb-4">

  <h2
    className="
      text-2xl
      md:text-3xl
      font-extrabold
      text-[#0f172a]
    "
  >
    Adoption Request
  </h2>

  <p
    className="
      text-gray-500
      text-sm
      mt-2
    "
  >
    Complete the form below to adopt
    {` ${pet.petName}`}
  </p>

</div>



          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 md:space-y-4"
          >

            

  <div>

  <label
    className="
      block
      text-[11px] sm:text-xs
      font-semibold
      text-gray-600
      mb-1
    "
  >
    Pet Name
  </label>

  <input
    value={pet.petName}
    readOnly
    className="
      w-full
      bg-[#FFF8E6]
      border
      border-[#F9C62B]
      px-4
      py-3
      rounded-2xl
      text-sm
      text-gray-600
      cursor-not-allowed
    "
  />

</div>

<div>

  <label
    className="
      block
      text-[11px] sm:text-xs
      font-semibold
      text-gray-600
      mb-1
    "
  >
    Your Name
  </label>

  <input
    value={user?.displayName || ""}
    readOnly
    className="
      w-full
      bg-[#FFF8E6]
      border
      border-[#F9C62B]
      px-4
      py-3
      rounded-2xl
      text-sm
      text-gray-600
      cursor-not-allowed
    "
  />

</div>


<div>

  <label
    className="
      block
      text-[11px] sm:text-xs
      font-semibold
      text-gray-600
      mb-1
    "
  >
    Email Address
  </label>

  <input
    value={user?.email || ""}
    readOnly
    className="
      w-full
      bg-[#FFF8E6]
      border
      border-[#F9C62B]
      px-4
      py-3
      rounded-2xl
      text-sm
      text-gray-600
      cursor-not-allowed
    "
  />

</div>

<div>

  <label
    className="
      block
      text-[11px] sm:text-xs
      font-semibold
      text-gray-600
      mb-1
    "
  >
    Preferred Pickup Date
  </label>
            <input
              type="date"
              {...register("pickupDate")}
              className="
  w-full
  bg-[#FFF8E6]
  border
  border-[#F9C62B]
  px-4
  py-3
  rounded-2xl
  text-sm
  text-gray-600
  
"
              required
            />
            </div>



            <div>

  <label
    className="
      block
      text-xs
      font-semibold
      text-gray-600
      mb-2
    "
  >
    Why do you want to adopt?
  </label>

  <textarea
    {...register("message")}
    rows={4}
    placeholder="Tell the owner why you would be a good match..."
    className={inputStyle}
    required
  />

</div>



            <button className="
  w-full
  bg-[#F9C62B]
  hover:bg-[#eab308]
  text-[#0f172a]
  py-4
  rounded-2xl
  font-bold
  text-sm
  sm:text-base
  transition
  duration-300
  shadow-lg
  hover:scale-[1.01]
">

              Adopt Now

            </button>

          </form>

                </div>

            )}

    </div>

  </div>

</div>

  );
};

export default PetDetailsPage;