const SuccessStories = () => {

  const stories = [
    {
      text: "Bella became the heart of our family. Every day feels happier with her around.",
      name: "Sarah Ahmed",
    },

    {
      text: "Adopting Max changed our lives completely. He’s playful, loving, and loyal.",
      name: "Tanvir Hasan",
    },
  ];



  return (

    <section className="py-24 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">

          <p className="text-[#F9C62B] uppercase tracking-widest font-semibold">
            Happy Families
          </p>



          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              text-white
              mt-4
            "
          >

            Success Stories

          </h2>

        </div>



        <div className="grid md:grid-cols-2 gap-8">

          {stories.map((story, index) => (

            <div
              key={index}
              className="
                bg-white/5
                border
                rounded-[30px]
                p-8
                backdrop-blur-xl
                border-2
                border-[#16C6C0]
                transition
                duration-500
                hover:translate-x-2
              "
            >

              <div className="text-5xl">

                ⭐

              </div>



              <p
                className="
                  text-gray-300
                  mt-6
                  leading-relaxed
                  text-lg
                "
              >

                “{story.text}”

              </p>



              <h4
                className="
                  mt-8
                  text-white
                  font-bold
                  text-xl
                "
              >

                — {story.name}

              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SuccessStories;