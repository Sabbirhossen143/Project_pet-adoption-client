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
  const [selectedPet, setSelectedPet] = useState(null);

const [requests, setRequests] = useState([]);

  useEffect(() => {

    if (user?.email) {

      fetchPets();
    }

  }, [user]);



  const fetchPets = async () => {

    try {

      const res = await axiosSecure.get(
        `/my-pets?email=${user?.email}`
      );

      setPets(res.data);

    } catch (error) {

      console.log(error);
    }
  };


  const openRequestsModal = async (pet) => {

  setSelectedPet(pet);

  try {

    const res = await axiosSecure.get(
      `/pet-requests/${pet._id}`
    );

    setRequests(res.data);

    document.getElementById("requests_modal").showModal();

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

    document.getElementById("requests_modal").close();

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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">
          My Listings
        </h1>



        <div className="flex gap-4">

          <div className="bg-blue-100 px-6 py-3 rounded-xl">

            <p className="font-bold">
              Total Listings
            </p>

            <p className="text-2xl">
              {pets.length}
            </p>

          </div>

        </div>

      </div>



      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          pets.map((pet) => (

            <div
              key={pet._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={pet.image}
                alt={pet.petName}
                className="w-full h-64 object-cover"
              />



              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {pet.petName}
                  
                  {
  pet.adopted && (
    <span className="badge badge-success mt-3">
      Adopted
    </span>
  )
}

                </h2>

                <p className="mt-2">
                  Species: {pet.species}
                </p>

                <p className="mt-2">
                  Fee: ${pet.adoptionFee}
                </p>



                <div className="grid grid-cols-4 gap-3 mt-6">

                  <Link
                    href={`/pet/${pet._id}`}
                    className="flex-1"
                  >
                    

                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">

                      View

                    </button>

                  </Link>

<button
  onClick={() => openRequestsModal(pet)}
  className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
>

  Requests

</button>

<Link
  href={`/dashboard/update-pet/${pet._id}`}
>

  <button className="w-full bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600">

    Edit

  </button>

</Link>

                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
                  >

                    Delete

                  </button>

                </div>

              </div>

            </div>
          ))
        }

      </div>

<dialog id="requests_modal" className="modal">

  <div className="modal-box max-w-3xl">

    <h3 className="font-bold text-3xl mb-6">

      Adoption Requests

    </h3>



    <div className="space-y-5">

      {
        requests.map((request) => (

          <div
            key={request._id}
            className="border p-5 rounded-xl"
          >

            <h2 className="text-xl font-bold">
              {request.userName}
            </h2>

            <p className="mt-2">
              {request.userEmail}
            </p>

            <p className="mt-2">
              Pickup: {request.pickupDate}
            </p>

            <p className="mt-2">
              Status: {request.status}
            </p>



            {
              request.status === "pending" &&
!selectedPet?.adopted && (

                <div className="flex gap-4 mt-5">

                  <button
                    onClick={() => handleApprove(request._id)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg"
                  >

                    Approve

                  </button>



                  <button
                    onClick={() => handleReject(request._id)}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg"
                  >

                    Reject

                  </button>

                </div>
              )
            }

          </div>
        ))
      }

    </div>



    <div className="modal-action">

      <form method="dialog">

        <button className="btn">
          Close
        </button>

      </form>

    </div>

  </div>

</dialog>

    </div>
  );
};

export default MyListingsPage;