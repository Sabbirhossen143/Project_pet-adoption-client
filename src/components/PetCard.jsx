import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";


const PetCard = ({ pet }) => {

  return (

    <div
      className="
        group
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-[30px]
        overflow-hidden
        shadow-xl
        hover:shadow-2xl
        hover:-translate-y-2
        transition
        duration-500
        relative
      "
    >

      {/* TOP IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={pet.image}
          alt={pet.petName}
          className="
            w-full
            h-64
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />



        {/* AVAILABLE BADGE */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-[#16C6C0]
            text-white
            text-xs
            sm:text-sm
            px-4
            py-1
            rounded-full
            shadow-lg
          "
        >

          Available

        </div>



        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />



        {/* PET NAME OVER IMAGE */}
        <div className="absolute bottom-5 left-5">

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-extrabold
              text-white
            "
          >

            {pet.petName}

          </h2>



          <p className="text-white/90 text-sm sm:text-base mt-1">

            {pet.species}

          </p>

        </div>

      </div>



      {/* CONTENT */}
      <div className="p-5 sm:p-6 bg-[#0f172a] text-white">

        {/* INFO */}
        <div className="space-y-5">

  {/* TOP BADGES */}
  <div className="flex items-center justify-between gap-3">

    {/* GENDER BADGE */}
    <div
      className="
        bg-[#16C6C0]/20
        border
        border-[#16C6C0]/30
        text-[#5eead4]
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
      "
    >

      {pet.gender || "Unknown"}

    </div>



    {/* LOCATION BADGE */}
    <div
      className="
        flex
        items-center
        gap-2
        bg-white/10
        border
        border-white/10
        px-4
        py-2
        rounded-full
        text-sm
      "
    >

      <FaLocationDot className="text-[#F9C62B]" />

      <span className="text-white/90">

        {pet.location}

      </span>

    </div>

  </div>



  {/* BREED */}
  <div>

    <p className="text-gray-400 text-sm">

      Breed

    </p>



    <h3
      className="
        text-lg
        font-bold
        text-white
        mt-1
      "
    >

      {pet.breed || "Unknown"}

    </h3>

  </div>



  {/* FEE */}
  <div className="flex items-center justify-between">

    <span className="text-gray-400">

      Adoption Fee

    </span>



    <span
      className="
        text-[#F9C62B]
        font-extrabold
        text-2xl
      "
    >

      ${pet.adoptionFee}

    </span>

  </div>

</div>



        {/* BUTTONS */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
          "
        >

          {/* VIEW DETAILS */}
          <Link href={`/pet/${pet._id}`}>

            <button
              className="
                w-full
                py-3
                rounded-2xl
                bg-white/10
                hover:bg-white/20
                border
                border-white/10
                text-white
                font-semibold
                transition
                duration-300
              "
            >

              View Details

            </button>

          </Link>



          {/* ADOPT NOW */}
          <Link href={`/pet/${pet._id}`}>

            <button
              className="
                w-full
                py-3
                rounded-2xl
                bg-[#F9C62B]
                hover:bg-[#eab308]
                text-black
                font-bold
                transition
                duration-300
                shadow-lg
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