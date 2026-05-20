"use client";

import FeaturedPets from "@/components/FeaturedPets";
import Newsletter from "@/components/Newsletter";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import VolunteerSection from "@/components/VolunteerSection";
import WhyAdopt from "@/components/WhyAdopt";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>

      {/* Hero */}
<section className="bg-blue-50 py-24">

  <div className="max-w-7xl mx-auto px-4 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl font-bold text-gray-800 leading-tight"
    >

      Find Your Perfect

      <span className="text-blue-600">
        {" "}Pet Companion
      </span>

    </motion.h1>



    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">

      Browse adorable pets waiting for a loving home.
      Adopt today and make a lifelong friend.

    </p>



    <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition">

      Adopt Now

    </button>

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