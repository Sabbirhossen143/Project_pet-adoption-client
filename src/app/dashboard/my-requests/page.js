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
      title: "Are you sure?",
      text: "Request will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
    });



    if (result.isConfirmed) {

      try {

        const res = await axiosSecure.delete(
          `/requests/${id}`
        );



        if (res.data.deletedCount > 0) {

          toast.success("Request Cancelled");

          fetchRequests();
        }

      } catch (error) {

        console.log(error);

        toast.error("Cancel Failed");
      }
    }
  };



  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-5xl font-bold mb-10">

        My Requests

      </h1>



      <div className="overflow-x-auto">

        <table className="table">

          <thead>

            <tr>

              <th>Pet</th>

              <th>Pickup Date</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>



          <tbody>

            {
              requests.map((request) => (

                <tr key={request._id}>

                  <td>

                    {request.petName}

                  </td>



                  <td>

                    {request.pickupDate}

                  </td>



                  <td>

                    <span
                      className={`
                        badge
                        ${
                          request.status === "approved"
                            ? "badge-success"
                            : request.status === "rejected"
                            ? "badge-error"
                            : "badge-warning"
                        }
                      `}
                    >

                      {request.status}

                    </span>

                  </td>



                  <td>

                    <div className="flex gap-3">

                      <Link
                        href={`/pet/${request.petId}`}
                      >

                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">

                          View

                        </button>

                      </Link>



                      <button
                        onClick={() => handleCancel(request._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      >

                        Cancel

                      </button>

                    </div>

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MyRequestsPage;