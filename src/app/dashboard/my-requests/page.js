"use client";

import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

import toast from "react-hot-toast";

import Link from "next/link";

import axiosSecure from "@/hooks/useAxiosSecure";

import { AuthContext } from "@/providers/AuthProvider";

const MyRequestsPage = () => {

  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    if (user?.email) {

      fetchRequests();
    }

  }, [user]);



  const fetchRequests = async () => {

    try {

      const res = await axiosSecure.get(
        `/requests?email=${user?.email}`
      );

      setRequests(res.data);

    } catch (error) {

      console.log(error);
    }
  };



  const handleCancel = async (id) => {

  const result = await Swal.fire({

    title: "Cancel Request?",

    html: `
      <div style="text-align:center">

        <img
          src="/images/delete.png"
          alt="cancel"
          style="
            width:65px;
            height:65px;
            margin:0 auto 12px;
          "
        />

        <p
          style="
            color:#64748b;
            font-size:14px;
            margin-bottom:8px;
          "
        >
          Your adoption request will be removed permanently.
        </p>

        <p
          style="
            color:#ef4444;
            font-size:12px;
            font-weight:600;
          "
        >
          This action cannot be undone.
        </p>

      </div>
    `,

    showCancelButton: true,

    confirmButtonText: "Yes, Cancel",

    cancelButtonText: "Keep Request",

    reverseButtons: true,

    background: "#ffffff",

    color: "#0f172a",

    width: "22rem",

    padding: "1.25rem",

    confirmButtonColor: "#ef4444",

    cancelButtonColor: "#16C6C0",

    customClass: {
  popup: "swal-delete-popup",
  title: "font-extrabold",
},

     heightAuto: false,
  scrollbarPadding: false,

  });

  if (result.isConfirmed) {

    try {

      const res = await axiosSecure.delete(
        `/requests/${id}`
      );

      if (res.data.deletedCount > 0) {

        await Swal.fire({

          icon: "success",

          title: "Request Cancelled",

          text: "Your adoption request has been removed.",

          timer: 1800,

          showConfirmButton: false,

          background: "#fff",

          color: "#0f172a",

          heightAuto: false,
  scrollbarPadding: false,

        });

        fetchRequests();

      }

    } catch (error) {

      console.log(error);

      toast.error("Cancel Failed");

    }

  }

};




return (

  <div className="max-w-6xl mx-auto px-0 md:px-4 py-6 md:py-8">

    {/* HEADER */}
    <div
      className="
         flex
    items-center
    justify-between
    gap-2
    sm:gap-5
    mb-3
    sm:mb-5
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-1 md:gap-4">

        <img
          src="/images/request1.png"
          alt="Requests"
          className="
            w-13
            h-13
            md:w-14
            md:h-14
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
            "
          >

            My Adoption Requests

          </h1>



          <p
            className="
              text-gray-500
              text-[12px]
              md:text-sm
              mt-1
            "
          >

            Track all your adoption requests

          </p>

        </div>

      </div>

    </div>



    {/* STATS */}
    <div
      className="
        grid
        grid-cols-4
        gap-2
        md:gap-4
        mb-4
        md:mb-6
      "
    >

      {/* TOTAL */}
      <div
        className="
          bg-white
          border
          border-[#F9C62B]/20
          rounded-2xl
          md:rounded-3xl
          p-2
          md:p-5
          shadow-md
          text-center
        "
      >

        <h2
          className="
            text-xl
            sm:text-3xl
            font-extrabold
            text-[#F9B000]
          "
        >

          {requests.length}

        </h2>

        <p
          className="
            text-gray-500
            text-[12px]
            md:text-sm
            mt-1
          "
        >

          Total

        </p>

      </div>



      {/* PENDING */}
      <div
        className="
          bg-white
          border
          border-[#F9C62B]/20
          rounded-2xl
          md:rounded-3xl
          p-2
          md:p-5
          shadow-md
          text-center
        "
      >

        <h2
          className="
            text-xl
            md:text-3xl
            font-extrabold
            text-[#F9B000]
          "
        >

          {
            requests.filter(
              (req) =>
                req.status === "pending"
            ).length
          }

        </h2>

        <p
          className="
            text-gray-500
            text-[12px]
            md:text-sm
            mt-1
          "
        >

          Pending

        </p>

      </div>



      {/* APPROVED */}
      <div
        className="
          bg-white
          border
          border-[#16C6C0]/20
          rounded-2xl
          sm:rounded-3xl
          p-2
          md:p-5
          shadow-md
          text-center
        "
      >

        <h2
          className="
            text-xl
            md:text-3xl
            font-extrabold
            text-[#16C6C0]
          "
        >

          {
            requests.filter(
              (req) =>
                req.status === "approved"
            ).length
          }

        </h2>

        <p
          className="
            text-gray-500
            text-[12px]
            md:text-sm
            mt-1
          "
        >

          Approved

        </p>

      </div>



      {/* REJECTED */}
      <div
        className="
          bg-white
          border
          border-red-200
          rounded-2xl
          sm:rounded-3xl
          p-2
          md:p-5
          shadow-md
          text-center
        "
      >

        <h2
          className="
            text-xl
            md:text-3xl
            font-extrabold
            text-red-500
          "
        >

          {
            requests.filter(
              (req) =>
                req.status === "rejected"
            ).length
          }

        </h2>

        <p
          className="
            text-gray-500
            text-[12px]
            md:text-sm
            mt-1
          "
        >

          Rejected

        </p>

      </div>

    </div>



    {/* TABLE */}
    <div
      className="
        overflow-x-auto
        bg-white
        rounded-[30px]
        border
        border-[#F9C62B]/20
        shadow-xl
      "
    >

      <table className="table">

        <thead>

          <tr
            className="
              bg-[#FFF8E6]
              text-[#0f172a]
              text-sm
            "
          >

            <th>Pet</th>

            <th>Request Date</th>

            <th>Pickup Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>



        <tbody>

          {requests.map((request) => (

            <tr
              key={request._id}
              className="
                hover:bg-[#FFFDF7]
                transition
              "
            >

              {/* PET */}
              <td>

                <div className="flex
    flex-col
    items-center
    gap-1

    sm:flex-row
    sm:items-center
    sm:gap-3">

                  <img
                    src={request.petImage}
                    alt={request.petName}
                    className="
                      w-8
                      h-8
                      md:w-14
                      md:h-14
                      rounded-xl
                      sm:rounded-2xl
                      object-cover
                    "
                  />



                  <div>

                    <h2
                      className="
                        font-bold
                        text-[#0f172a]
                        text-[12px]
                        sm:text-sm
                      "
                    >

                      {request.petName}

                    </h2>

                  </div>

                </div>

              </td>



              {/* REQUEST DATE */}
              <td
                className="
                  text-[12px]
                  sm:text-sm
                  text-gray-500
                "
              >

                {request.createdAt
                  ? new Date(
                      request.createdAt
                    ).toLocaleDateString()
                  : "Today"}

              </td>



              {/* PICKUP */}
              <td
                className="
                  text-[12px]
                  sm:text-sm
                  font-semibold
                  text-[#F9B000]
                "
              >

                {request.pickupDate}

              </td>



              {/* STATUS */}
              <td>

                <span
                  className={`
                    px-2
                    sm:px-4
                    py-1.5
                    sm:py-2
                    rounded-full
                    text-[11px]
                    md:text-xs
                    font-bold

                    ${
                      request.status === "approved"
                        ? "bg-[#16C6C0]/10 text-[#16C6C0]"
                        : request.status ===
                          "rejected"
                        ? "bg-red-100 text-red-500"
                        : "bg-[#F9C62B]/15 text-[#F9B000]"
                    }
                  `}
                >

                  {request.status}

                </span>

              </td>



              {/* ACTIONS */}
              <td>

                <div className="flex gap-1 md:gap-3">

                  {/* VIEW */}
                  <Link
                    href={`/pet/${request.petId}`}
                  >

                    <button
                      className="
                        border
                        border-[#16C6C0]/30
                        hover:bg-[#16C6C0]
                        hover:text-white
                        text-[#16C6C0]
                        py-1.5
sm:py-2

px-3
sm:px-4

rounded-xl

text-[10px]
sm:text-xs

font-semibold

transition-all
duration-300

flex
items-center
justify-center

gap-1
md:gap-2
                      "
                    >

                      <img
                        src="/images/view.png"
                        alt="view"
                        className="
                          w-3
h-3
sm:w-4
sm:h-4
                          object-contain
                        "
                      />

                      View

                    </button>

                  </Link>



                  {/* CANCEL */}
                  {request.status ===
                    "pending" && (

                    <button
                      onClick={() =>
                        handleCancel(
                          request._id
                        )
                      }
                      className="
                        border
                        border-red-300
                        hover:bg-red-500
                        hover:text-white
                        text-red-500
                        py-1.5
sm:py-2

px-3
sm:px-4

rounded-xl

text-[10px]
sm:text-xs

font-semibold

transition-all
duration-300

flex
items-center
justify-center

gap-1
md:gap-2
                      "
                    >

                      <img
                        src="/images/delete.png"
                        alt="cancel"
                        className="
                          w-3
h-3
sm:w-4
sm:h-4
                          object-contain
                        "
                      />

                      Cancel

                    </button>

                  )}

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
    

  </div>

);
  
};

export default MyRequestsPage;