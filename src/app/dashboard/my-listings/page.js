"use client";

import { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

import Swal from "sweetalert2";

import axiosSecure from "@/hooks/useAxiosSecure";

import { AuthContext } from "@/providers/AuthProvider";

import Link from "next/link";

const MyListingsPage = () => {

  const { user } = useContext(AuthContext);

  const [pets, setPets] = useState([]);

  const [selectedPet, setSelectedPet] =
    useState(null);

  const [requests, setRequests] =
    useState([]);

    const [loading, setLoading] =
  useState(true);

  useEffect(() => {

    if (user?.email) {

      fetchPets();

    }

  }, [user]);


const fetchPets = async () => {

  setLoading(true);

  try {


    const res = await axiosSecure.get(
      `/my-pets?email=${user?.email}`
    );

    const petsWithRequestCount =
      await Promise.all(
        res.data.map(async (pet) => {

          try {

            const requestRes =
              await axiosSecure.get(
                `/pet-requests/${pet._id}`
              );

            return {

  ...pet,

  requestCount:
    requestRes.data.filter(
      (req) =>
        req.status === "pending"
    ).length,

};

          } catch {

            return {
              ...pet,
              requestCount: 0,
            };

          }

        })
      );

    setPets(petsWithRequestCount);

    setLoading(false);

  } catch (error) {

    console.log(error);

    setLoading(false);

  }

};

  const openRequestsModal = async (pet) => {

    setSelectedPet(pet);

    try {

      const res = await axiosSecure.get(
        `/pet-requests/${pet._id}`
      );

      setRequests(res.data);

      document
        .getElementById("requests_modal")
        .showModal();

    } catch (error) {

      console.log(error);

    }

  };



  const handleApprove = async (id) => {

    try {

      await axiosSecure.patch(
        `/approve-request/${id}`
      );

      toast.success("Request Approved");

      fetchPets();

      document
        .getElementById("requests_modal")
        .close();

    } catch (error) {

      console.log(error);

    }

  };



  const handleReject = async (id) => {

    try {

      await axiosSecure.patch(
        `/reject-request/${id}`
      );

      toast.success("Request Rejected");

      openRequestsModal(selectedPet);

    } catch (error) {

      console.log(error);

    }

  };



  const handleDelete = async (id) => {

  const result = await Swal.fire({

  title: "Delete this Pet?",

  html: `
    <div class="flex flex-col items-center">

      <img
        src="/images/delete.png"
        style="
          width:min(70px,15vw);
height:min(70px,15vw);
          margin-bottom:8px;
          
        "
      />

      <p
        style="
          color:#64748b;
          font-size:12px;
          line-height:1.2;
          margin-top:4px;
        "
      >
        This pet listing will be permanently removed.
        This action cannot be undone.
      </p>

    </div>
  `,

  showCancelButton: true,

  confirmButtonText: "Delete Pet",

  cancelButtonText: "Keep Pet",

  buttonsStyling: false,

  showCloseButton: true,

  scrollbarPadding: false,

  heightAuto: false,

  customClass: {

    popup: "swal-delete-popup",

    title:
      "text-[#0f172a] font-extrabold text-lg mid:text-xl",

    confirmButton:
      "bg-red-500 hover:bg-red-600 text-white rounded-2xl px-6 py-3 font-bold mr-4 transition-all",

    cancelButton:
      "bg-[#16C6C0] hover:bg-[#11b3ad] text-white rounded-2xl px-6 py-3 font-bold transition-all",

  },

});



    if (result.isConfirmed) {

      try {

        const res = await axiosSecure.delete(
          `/pets/${id}`
        );



        if (res.data.deletedCount > 0) {

          toast.success("Pet Deleted");

          fetchPets();

        }

      } catch (error) {

        console.log(error);

        toast.error("Delete Failed");

      }

    }

  };



  return (

    <div className="max-w-6xl mx-auto px-0 md:px-4 py-5 md:py-6">

      {loading ? (

  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      min-h-[70vh]
    "
  >

    {/* SPINNER */}
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
      Loading your pets...
    </p>

  </div>

) : (
  <>

      {/* HEADER */}
<div
  className="
    flex
items-center
justify-between
    gap-2
sm:gap-5
    mb-4
    md:mb-6
  "
>

  {/* LEFT */}
  <div className="flex items-center gap-2 sm:gap-4">

    <img
      src="/images/my.png"
      alt="Listings"
      className="
        w-10
        h-10
        sm:w-16
        sm:h-16
        object-contain
      "
    />

    <div>

      <h1
        className="
          text-2xl
          sm:text-4xl
          font-extrabold
          text-[#0f172a]
          leading-none
        "
      >
        My Listings
      </h1>

      <p
        className="
          text-gray-500
          text-[12px]
sm:text-sm
          mt-1
        "
      >
        Manage all your pet listings
      </p>

    </div>

  </div>

  {/* ADD BUTTON */}
  <Link href="/dashboard/add-pet">
  <button
    className="
      bg-[#F9B000]
hover:bg-[#e0a100]
      hover:scale-105
      text-white
      px-3
sm:px-6
py-2
sm:py-3
      rounded-2xl
      font-semibold
      shadow-lg
      transition-all
      duration-300
      flex
      items-center
      gap-2
      text-sm
    "
  >

    <img
      src="/images/add.png"
      alt="add"
      className="
        w-4
        h-4
        object-contain
      "
    />

    Add New Pet

  </button>
  </Link>

</div>


{/* TOP ACTION + STATS */}
<div className="mb-0 md:mb-6">

    

  </div>

  {/* 3 STATS CARD */}
<div
  className="
    grid
    grid-cols-3
    gap-2
    md:gap-4
    mb-5
    md:mb-6
  "
>

  {/* TOTAL */}
  <div
    className="
      bg-white
      border-1
      border-[#F9C62B]/80
      rounded-2xl
      shadow-md
      p-4
      text-center
    "
  >

    <h2
      className="
        text-xl
sm:text-2xl
        font-extrabold
        text-[#F9B000]
      "
    >
      {pets.length}
    </h2>

    <p
      className="
        text-gray-500
        mt-1
        text-[10px]
sm:text-xs
        font-medium
      "
    >
      Total Listings
    </p>

  </div>

  {/* AVAILABLE */}
  <div
    className="
      bg-white
      border-1
      border-[#16C6C0]/50
      rounded-2xl
      shadow-md
      p-4
      text-center
    "
  >

    <h2
      className="
        text-xl
        sm:text-2xl
        font-extrabold
        text-[#16C6C0]
      "
    >
      {
        pets.filter(
          (pet) => !pet.adopted
        ).length
      }
    </h2>

    <p
      className="
        text-gray-500
        mt-1
        text-[10px]
sm:text-xs
        font-medium
      "
    >
      Available
    </p>

  </div>

  {/* ADOPTED */}
  <div
    className="
      bg-white
      border-1
      border-red-300
      rounded-2xl
      shadow-md
      p-4
      text-center
    "
  >

    <h2
      className="
        text-xl
sm:text-2xl
        font-extrabold
        text-red-500
      "
    >
      {
        pets.filter(
          (pet) => pet.adopted
        ).length
      }
    </h2>

    <p
      className="
        text-gray-500
        mt-1
        text-[10px]
sm:text-xs
        font-medium
      "
    >
      Adopted
    </p>

  </div>

</div>


      {/* PETS */}
      <div
        className="
          grid
          md:grid-cols-3
          lg:grid-cols-4
          gap-2
        "
      >

        {pets.map((pet) => (

  <div
    key={pet._id}
    className="
      bg-white
      rounded-[28px]
      overflow-hidden
      border
      border-[#F9C62B]
      border-2
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-500
      group
    "
  >

    {/* IMAGE */}
    <div className="relative overflow-hidden">

      <img
        src={pet.image}
        alt={pet.petName}
        className="
          w-full
          h-56
          object-cover
          group-hover:scale-110
          transition
          duration-700
        "
      />



      {/* STATUS */}
      <div
        className={`
          absolute
          top-2
          right-2
          px-3
          py-1
          rounded-full
          text-[12px]
          font-bold
          shadow-lg

          ${
            pet.adopted
              ? "bg-red-500 text-white"
              : "bg-[#16C6C0] text-white"
          }
        `}
      >

        {pet.adopted
          ? "Adopted"
          : "Available"}

      </div>



      {/* LOCATION OVER IMAGE */}
      <div
        className="
          absolute
          bottom-1
          left-2
          bg-white/90
          backdrop-blur-md
          text-[#16C6C0]
          px-3
          py-1
          rounded-2xl
          text-[8px]
          sm:text-[12px]
          font-semibold
          shadow-lg
          flex
          items-center
          gap-1
        "
      >

        <img
          src="/images/location.png"
          alt="location"
          className="
            w-3
            h-3
            object-contain
          "
        />

        {pet.location}

      </div>

    </div>



    {/* CONTENT */}
    <div className="p-3">

      {/* TOP */}
      <div
        className="
          flex
          justify-between
          items-start
          gap-2
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-extrabold
              text-[#0f172a]
            "
          >

            {pet.petName}

          </h2>



          <p
            className="
              text-gray-500
              text-[12px]
              mt-1
            "
          >

            {pet.species}
            {" • "}
            {pet.breed}

          </p>

        </div>



        <div
          className="
            text-[#F9B000]
            font-extrabold
            text-base
            whitespace-nowrap
          "
        >

          Fee : {
            pet.adoptionFee === 0
              ? "Free"
              : `$${pet.adoptionFee}`
          }

        </div>

      </div>



      {/* AGE + REQUEST */}
<div
  className="
    mt-2
    flex
    items-center
    justify-between
    gap-3
  "
>

  {/* AGE */}
  <div
    className="
      inline-flex
      items-center
      gap-1
      bg-[#16C6C0]/10
      text-[#16C6C0]
      px-3
      py-1
      rounded-2xl
      text-[11px]
      font-bold
    "
  >

    <img
      src="/images/age.png"
      alt="age"
      className="
        w-3
        h-3
        object-contain
      "
    />

    {pet.age} years

  </div>



  {/* REQUEST BADGE */}
  <div
    className="
      inline-flex
      items-center
      gap-1
      bg-[#F9C62B]/15
      text-[#F9B000]
      px-3
      py-1
      rounded-2xl
      text-[11px]
      font-bold
    "
  >

    <img
      src="/images/req.png"
      alt="requests"
      className="
        w-4
        h-4
        object-contain
      "
    />

    {pet.requestCount || 0}
    {" "}Requests

  </div>

</div>



      {/* BUTTONS */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
          mt-3
        "
      >

        {/* VIEW */}
        <Link
  href={`/pet/${pet._id}`}
  className="w-full"
>
  <div
          className="
  border
  border-[#16C6C0]/30
  hover:bg-[#16C6C0]
  hover:text-white
  text-[#16C6C0]
  py-2
  rounded-xl
  text-xs
  font-semibold
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-1.5
"
        >

          <img
            src="/images/view.png"
            alt="view"
            className="
              w-4
              h-4
              object-contain
            "
          />

          View

        </div>
        </Link>



        {/* EDIT */}
        <Link href={`/dashboard/update-pet/${pet._id}`}
        className="w-full"
        >
        <div
          className="
  border
  border-[#F9C62B]/40
  hover:bg-[#F9C62B]
  hover:text-black
  text-[#F9B000]
  py-2
  rounded-xl
  text-xs
  font-semibold
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-1.5
"
        >

          <img
            src="/images/edit.png"
            alt="edit"
            className="
              w-4
              h-4
              object-contain
            "
          />

          Edit

        </div>
        </Link>



        {/* REQUESTS */}
        <button
          onClick={() =>
            openRequestsModal(pet)
          }
          className="
  border
  border-[#16C6C0]
  hover:bg-[#16C6C0]
  hover:text-white
  text-[#16C6C0]
  py-2
  rounded-xl
  text-xs
  font-semibold
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-1.5
"
        >

          <img
            src="/images/request1.png"
            alt="request"
            className="
              w-4
              h-4
              object-contain
            "
          />

          Requests

        </button>



        {/* DELETE */}
        <button
          onClick={() =>
            handleDelete(pet._id)
          }
          className="
  border
  border-red-300
  hover:bg-red-500
  hover:text-white
  text-red-500
  py-2
  rounded-xl
  text-xs
  font-semibold
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-1.5
"
        >

          <img
            src="/images/delete.png"
            alt="delete"
            className="
              w-4
              h-4
              object-contain
            "
          />

          Delete

        </button>

      </div>

    </div>

  </div>

))}

      </div>



      {/* MODAL */}
      <dialog
  id="requests_modal"
  className="modal"
>

  <div
    className="
      modal-box
      max-w-xl
      p-0
      rounded-[28px]
      bg-white
      overflow-hidden
      shadow-2xl
      border
      border-[#F9C62B]/20
    "
  >

    {/* HEADER */}
    <div
      className="
        flex
        items-center
        justify-between
        px-6
        py-4
        border-b
        border-gray-100
        bg-[#FFF9E8]
      "
    >

      <div>

        <h3
  className="
    text-lg
    md:text-2xl
    font-extrabold
    text-[#0f172a]
  "
>
  Adoption Requests for
  <span className="text-[#F9B000]">
    {" "}
    {selectedPet?.petName}
  </span>
</h3>

<p
  className="
    text-xs
    text-gray-500
    mt-1
  "
>
  Manage all incoming requests
</p>

      </div>

      {/* CLOSE BUTTON */}
      <form method="dialog">

        <button
          className="
            w-9
            h-9
            rounded-full
            bg-red-50
            hover:bg-red-100
            text-red-500
            text-xl
            font-bold
            transition
          "
        >
          ×
        </button>

      </form>

    </div>

    {/* BODY */}
    <div
      className="
        p-5
        max-h-[65vh]
        overflow-y-auto
        space-y-4
      "
    >

      {requests.length === 0 ? (

        <div
          className="
            text-center
            py-10
          "
        >

          <img
            src="/images/request1.png"
            alt="empty"
            className="
              w-14
              h-14
              mx-auto
              opacity-40
            "
          />

          <p
            className="
              mt-4
              text-gray-500
              text-sm
            "
          >
            No requests found
          </p>

        </div>

      ) : (

        requests.map((request) => (

          <div
            key={request._id}
            className="
              border
              border-[#F9C62B]/10
              rounded-2xl
              p-4
              bg-[#FFFEFB]
              hover:shadow-md
              transition-all
            "
          >

            {/* USER */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-3
              "
            >

 <div className="flex-1">

  {/* TOP ROW */}
  <div
    className="
      flex
      items-center
      justify-between
      gap-3
    "
  >

    {/* USER NAME */}
    <h2
      className="
        text-base
        font-bold
        text-[#0f172a]
      "
    >
      {request.userName || "Unknown User"}
    </h2>

    {/* STATUS */}
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-[10px]
        font-bold

        ${
          request.status === "pending"
            ? "bg-yellow-100 text-yellow-700"
            : request.status === "approved"
            ? "bg-[#16C6C0]/10 text-[#16C6C0]"
            : "bg-red-100 text-red-500"
        }
      `}
    >
      {request.status}
    </span>

  </div>

  {/* EMAIL */}
  <p
    className="
      text-xs
      text-gray-500
      mt-1
    "
  >
    {request.userEmail}
  </p>

  {/* BOTTOM ROW */}
  <div
    className="
      flex
      items-center
      justify-between
      mt-3
      gap-3
    "
  >

    {/* REQUEST DATE */}
    <p
      className="
        text-[11px]
        md:text-xs
        text-gray-500
      "
    >
      Requested Date:
      <span
        className="
          font-semibold
          text-[#0f172a]
          ml-1
        "
      >
        {request.createdAt
          ? new Date(
              request.createdAt
            ).toLocaleDateString()
          : "Today"}
      </span>
    </p>

    {/* PICKUP DATE */}
    <p
      className="
        text-[11px]
        md:text-xs
        font-semibold
        text-[#F9B000]
        whitespace-nowrap
      "
    >
      Pickup:
      <span className="ml-1">
        {request.pickupDate || "N/A"}
      </span>
    </p>

  </div>

</div>

</div>

            {/* ACTIONS */}
            {request.status === "pending" &&
              !selectedPet?.adopted && (

                <div
                  className="
                    flex
                    gap-3
                    mt-4
                  "
                >

                  <button
                    onClick={() =>
                      handleApprove(
                        request._id
                      )
                    }
                    className="
                      flex-1
                      bg-[#16C6C0]
                      hover:bg-[#11b3ad]
                      text-white
                      py-2.5
                      rounded-xl
                      text-xs
                      md:text-sm
                      font-semibold
                      transition
                    "
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      handleReject(
                        request._id
                      )
                    }
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      py-2.5
                      rounded-xl
                      text-xs
                      md:text-sm
                      font-semibold
                      transition
                    "
                  >
                    Reject
                  </button>

                </div>

              )}

          </div>

        ))

      )}

    </div>

  </div>

</dialog>

</>

)}

    </div>

  );

};

export default MyListingsPage;