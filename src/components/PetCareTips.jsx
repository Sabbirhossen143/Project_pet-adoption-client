
const PetCareTips = () => {

  const tips = [
    {
      title: "Healthy Food",
      desc: "Provide nutritious meals and clean water daily.",
      icon: "/images/food.png",
    },

    {
      title: "Exercise",
      desc: "Keep pets active with regular walks and playtime.",
      icon: "/images/excercise.png",
    },

    {
      title: "Veterinary Care",
      desc: "Routine checkups ensure long-term pet health.",
      icon: "/images/vacine.png",
    },
  ];



  return (

    <section className="py-16 md:py-24 bg-[#16C6C0]">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10 md:mb-16">

          <p className="text-[#F9C62B] font-semibold uppercase tracking-widest">
            Care Guide
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

            Pet Care Tips

          </h2>

        </div>



        <div className="grid md:grid-cols-3 gap-8">

          {tips.map((tip, index) => (

            <div
              key={index}
              className="
                bg-white/10
                rounded-[30px]
                p-5
                md:p-8
                border-1
                border-[#F9C62B]
                hover:-translate-y-2
                transition
                duration-500
                shadow-2xl
                backdrop-blur-3xl
              "
            >

              <div className="text-4xl md:text-5xl">

                <img
  src={tip.icon}
  alt={tip.title}
  className="
    w-14
    md:w-18
    h-14
    md:h-18
    object-contain
  "
/>

              </div>



              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mt-3
                  md:mt-6
                "
              >

                {tip.title}

              </h3>



              <p className="text-black/70 mt-3 md:mt-4 leading-relaxed">

                {tip.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PetCareTips;