"use client";

import FeaturedPets from "@/components/FeaturedPets";
import Newsletter from "@/components/Newsletter";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import VolunteerSection from "@/components/VolunteerSection";
import WhyAdopt from "@/components/WhyAdopt";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {
  return (
    <div>

      {/* Hero */}

<section className="bg-[#16C6C0] overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-20">

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="text-[#F9B000] font-semibold tracking-widest uppercase text-sm sm:text-base">

          Find Your Best Friend

        </p>



        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            leading-tight
            mt-4
          "
        >

          LOVE

          <br />

          <span className="text-[#111827]">

            is four legged

          </span>

          <br />

          WORD

        </h1>



        <div className="mt-8 border-l-4 border-[#F9B000] pl-4">

          <p
            className="
              text-gray-600
              text-sm
              sm:text-base
              md:text-lg
              leading-8
            "
          >

            Adopting a pet is a good deed.
            Give homeless pets a loving family
            and create unforgettable memories.

          </p>

        </div>



        <button
          className="
            mt-8
            bg-[#F9B000]
            hover:bg-[#e5a400]
            text-black
            px-6
            sm:px-8
            py-3
            rounded-full
            font-bold
            transition
            duration-300
            shadow-lg
          "
        >

          Adopt Now

        </button>

      </motion.div>



      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center"
      >

        {/* YELLOW SHAPE */}
        <div
          className="
            absolute
            w-[260px]
            h-[260px]
            sm:w-[320px]
            sm:h-[320px]
            md:w-[420px]
            md:h-[420px]
            bg-[#F9B000]
            rounded-[40%]
            rotate-12
            z-0
          "
        />



        {/* PET IMAGE */}
        <Image
          src="/images/banner-dog.png"
          alt="Dog"
          width={0}
          height={0}
          sizes="100vw"
          className="
            relative
            z-10
            w-[250px]
            sm:w-[320px]
            md:w-[430px]
            object-contain
            drop-shadow-2xl
          "
        />

      </motion.div>

    </div>

  </div>

</section>

      <FeaturedPets />

      <WhyAdopt />

      <SuccessStories />

      <PetCareTips />

      <VolunteerSection />

      <Newsletter />

    </div>
  );
}