import Link from "next/link";

const PetCard = ({ pet }) => {

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={pet.image}
        alt={pet.petName}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {pet.petName}
        </h2>

        <p className="text-gray-600 mt-2">
          Species: {pet.species}
        </p>

        <p className="text-gray-600">
          Location: {pet.location}
        </p>

        <p className="text-blue-600 font-bold mt-2">
          ${pet.adoptionFee}
        </p>

        <Link href={`/pet/${pet._id}`}>

          <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

            View Details

          </button>

        </Link>

      </div>
    </div>
  );
};

export default PetCard;