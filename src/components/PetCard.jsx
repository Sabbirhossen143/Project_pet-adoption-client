import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";


const PetCard = ({ pet }) => {

  const { user } = useContext(AuthContext);

const router = useRouter();

const handlePetDetails = () => {

  if (!user) {

    toast("Please login first", {
  icon: "🔒",
});

    router.push("/login");

    return;
  }

  router.push(`/pet/${pet._id}`);
};

  return (

    <div
      className="
        group
        bg-white/10
        backdrop-blur-xl
        border-2
        border-[#F9C62B]
        
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
        {/* STATUS BADGE */}
<div
  className={`
    absolute
    top-4
    right-4
    text-white
    text-[11px]
    sm:text-[12px]
    md:text-[13px]
    px-4
    py-1
    rounded-full
    shadow-lg
    font-semibold

    ${
      pet.adopted
        ? "bg-red-500"
        : "bg-[#16C6C0]"
    }
  `}
>

  {
    pet.adopted
      ? "Adopted"
      : "Available"
  }

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
              text-[18px]
sm:text-xl
md:text-2xl
              font-extrabold
              text-white
            "
          >

            {pet.petName}

          </h2>



          <p className="text-white/90 text-[11px] sm:text-sm md:text-base mt-1">

            {pet.species}

          </p>

        </div>

      </div>



      {/* CONTENT */}
      <div className="p-5 sm:p-2 bg-[#16C6C0] text-white">

        {/* INFO */}
        <div className="space-y-2.5
sm:space-y-3 md:space-y-3">

  {/* FIRST ROW */}
  <div className="flex items-center justify-between">

    {/* GENDER */}
    <div
      className="
        flex
        items-center
        gap-1
        bg-white
border-white
text-black/90
        px-3
        py-1
        rounded-full
        text-[11px]
        sm:text-[12px]
        md:text-[13px]
        font-semibold
      "
    >

      {pet.gender === "Male" ? "♂️ Male" : "♀️ Female"}

    </div>



    {/* LOCATION */}
    <div
      className="
        flex
        items-center
        gap-1
        bg-[#0f172a]
        border-[#F9C62B]
        px-3
        py-1
        rounded-full
        text-[11px]
        sm:text-[12px]
        md:text-[13px]
      "
    >

      <FaLocationDot className="text-[#F9C62B]" />

      <span className="text-white font-medium">

        {pet.location}

      </span>

    </div>

  </div>



  {/* SECOND ROW */}
  <div className="flex items-center justify-between">

    {/* BREED */}
<div
  className="
    flex
    items-center
    gap-1
    text-[12px]
    sm:text-sm
    md:text-base
  "
>

  <span className="text-white font-medium">

    Breed:

  </span>



  <span className="font-bold text-white 
    text-[13px]
    sm:text-[14px]
    md:text-[15px] 
    
     max-w-none

    md:truncate
    md:max-w-[180px]
    lg:max-w-[220px]
    ">

    {pet.breed || "Unknown"}

  </span>

</div>


{/* AGE */}
<div
  className="
    flex
    items-center
    gap-2
    text-white
    text-[12px]
    sm:text-[13px]
    md:text-[13px]
    font-medium
  "
>

   Age :

  <span>

    {pet.age} Years Old

  </span>

</div>

  </div>



  {/* FEE */}
  <div className="flex items-center justify-between pt-0">

    <span className="text-white text-[13px] sm:text-[14px] md:text-[16px]">

      Adoption Fee

    </span>



    <span
      className="
        text-[#F9C62B]
        font-extrabold
        text-lg
        sm:text-xl
        md:text-2xl
      "
    >

      ${pet.adoptionFee}

    </span>

  </div>

</div>



        {/* BUTTONS */}
        <div
          className="
            mt-3
            md:mt-5
            mb-0
            md:mb-3 
            grid
            grid-cols-2
            gap-3
          "
        >

          {/* VIEW DETAILS */}
          <button
  onClick={handlePetDetails}
  className="
    w-full
    py-1.5
    sm:py-2.5
    md:py-3
    rounded-2xl
    bg-white/10
    hover:bg-white/20
    border-1
    border-[#F9C62B]
    text-white
    font-semibold
    transition
    duration-300
    text-[13px]
    sm:text-[13px]
    md:text-[14px]
  "
>
  View Details
</button>



          {/* ADOPT NOW */}
          <button
  onClick={handlePetDetails}
  className="
    w-full
    py-1.5
    sm:py-2.5
    md:py-3
    rounded-2xl
    bg-[#F9C62B]
    hover:bg-[#eab308]
    text-black
    font-bold
    transition
    duration-300
    shadow-lg
    text-[13px]
    sm:text-[13px]
    md:text-[14px]
  "
>
  Adopt Now
</button>



        </div>

      </div>

    </div>
  );
};

export default PetCard;