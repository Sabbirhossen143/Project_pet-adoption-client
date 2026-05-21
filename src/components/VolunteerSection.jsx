const VolunteerSection = () => {

  return (

    <section className="py-24 bg-[#F9C62B]">

      <div className="max-w-5xl mx-auto px-4 text-center">

        <p className="uppercase tracking-widest font-bold text-black/70">
          Join Our Mission
        </p>



        <h2
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            text-black
            mt-5
          "
        >

          Become A Volunteer

        </h2>



        <p
          className="
            mt-6
            text-black/80
            text-lg
            max-w-2xl
            mx-auto
          "
        >

          Help rescue, care, and support pets waiting for
          their forever homes.

        </p>



        <button
          className="
            mt-10
            bg-black
            hover:bg-[#0f172a]
            text-white
            px-10
            py-4
            rounded-full
            font-bold
            transition
            duration-300
            shadow-xl
          "
        >

          Join Now

        </button>

      </div>

    </section>
  );
};

export default VolunteerSection;