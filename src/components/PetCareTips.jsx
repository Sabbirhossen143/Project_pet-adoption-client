const PetCareTips = () => {

  const tips = [
    {
      title: "Healthy Food",
      desc: "Provide nutritious meals and clean water daily.",
      icon: "🥗",
    },

    {
      title: "Exercise",
      desc: "Keep pets active with regular walks and playtime.",
      icon: "⚽",
    },

    {
      title: "Veterinary Care",
      desc: "Routine checkups ensure long-term pet health.",
      icon: "🩺",
    },
  ];



  return (

    <section className="py-24 bg-[#16C6C0]">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">

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
                bg-white/5
                border
                border-white/10
                rounded-[30px]
                p-8
                hover:border-2
                hover:border-[#F9C62B]
                hover:-translate-y-2
                transition
                duration-500
              "
            >

              <div className="text-5xl">

                {tip.icon}

              </div>



              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mt-6
                "
              >

                {tip.title}

              </h3>



              <p className="text-black/70 mt-4 leading-relaxed">

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