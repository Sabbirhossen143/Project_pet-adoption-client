import Link from "next/link";

const PetCard = ({ pet }) => {

  return (

    <div
      className="
        bg-[#16C6C0]
        rounded-3xl
        shadow-lg
        overflow-hidden
        hover:shadow-2xl
        hover:-translate-y-2
        transition
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="overflow-hidden">

        <img
          src={pet.image}
          alt={pet.petName}
          className="
            w-full
            h-64
            object-cover
            hover:scale-110
            transition
            duration-500
          "
        />

      </div>



      {/* CONTENT */}
      <div className="p-5">

        <h2
          className="
            text-2xl
            font-extrabold
            text-white
          "
        >

          {pet.petName}

        </h2>



        <p className="text-white/90 mt-3">

          <span className="font-bold">
            Species:
          </span>{" "}

          {pet.species}

        </p>



        <p className="text-white/90 mt-1">

          <span className="font-bold">
            Location:
          </span>{" "}

          {pet.location}

        </p>



        <p
          className="
            text-[#F9B000]
            font-extrabold
            text-xl
            mt-3
          "
        >

          ${pet.adoptionFee}

        </p>



        {/* BUTTONS */}
        <div
          className="
            mt-6
            flex
            flex-col
            sm:flex-row
            gap-3
          "
        >

          {/* VIEW DETAILS */}
          <Link
            href={`/pet/${pet._id}`}
            className="flex-1"
          >

            <button
              className="
                w-full
                bg-white
                hover:bg-gray-100
                text-[#16C6C0]
                py-3
                rounded-full
                font-bold
                transition
                duration-300
              "
            >

              View Details

            </button>

          </Link>



          {/* ADOPT NOW */}
          <Link
            href={`/pet/${pet._id}`}
            className="flex-1"
          >

            <button
              className="
                w-full
                bg-[#F9B000]
                hover:bg-[#e0a700]
                text-black
                py-3
                rounded-full
                font-bold
                transition
                duration-300
              "
            >

              Adopt Now

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
};

export default PetCard;