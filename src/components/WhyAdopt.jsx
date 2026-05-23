const WhyAdopt = () => {

  const items = [
    {
      title: "Save Lives",
      desc: "Give homeless pets a second chance and a loving forever home.",
      icon: "/images/savee.png",
    },

    {
      title: "Reduce Stress",
      desc: "Pets provide emotional support, comfort, and happiness every day.",
      icon: "/images/love.png",
    },

    {
      title: "Build Happiness",
      desc: "Create unforgettable memories with your perfect companion.",
      icon: "/images/happpy.png",
    },
  ];



  return (

    <section className="py-16 md:py-24 bg-[#16C6C0]">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">

          <p className="text-[#F9C62B] font-semibold tracking-widest uppercase">
            Why Choose Adoption
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              text-white
              mt-3
              md:mt-4
            "
          >

            Change A Life Today

          </h2>



          <p
            className="
              text-black/70
              mt-4
              md:mt-5
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
            "
          >

            Every adoption creates a new story filled with love,
            care, happiness, and companionship.

          </p>

        </div>



        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (

            <div
              key={index}
              className="
                group
                bg-white/10
                border
                border-1
                backdrop-blur-3xl
                shadow-2xl
                rounded-[30px]
                p-5
                md:p-8
                hover:-translate-y-2
                border-[#F9C62B]
                transition
                duration-500
              "
            >

              <div
                className="
                  w-12
                  h-12
                  md:w-16
                  md:h-16
                  rounded-2xl
                  bg-[#F9C62B]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  md:text-3xl
                  shadow-lg
                "
              >

                <img
  src={item.icon}
  alt={item.title}
  className="
    w-11
    h-11
    md:w-15
    md:h-15
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

                {item.title}

              </h3>



              <p
                className="
                  text-black/70
                  mt-2
                  md:mt-4
                  leading-relaxed
                "
              >

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyAdopt;