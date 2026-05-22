"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

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

    {
      text: "Charlie brought endless joy into our lives. We can’t imagine life without him.",
      name: "Nusrat Jahan",
    },

    {
      text: "Lucy transformed our home with happiness and unconditional love.",
      name: "Rakib Hasan",
    },
  ];



  return (

    <section className="py-16 md:py-24 bg-[#111827] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">

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



        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {stories.map((story, index) => (

            <SwiperSlide key={index} className="flex h-auto">

              <div
                className="
                  bg-white/5
                  border-2
                  border-[#16C6C0]
                  rounded-[30px]
                  p-5
                  md:p-8
                  backdrop-blur-xl
                  transition
                  duration-500
                  w-full
min-h-[200px]
sm:min-h-[260px]
md:min-h-[300px]
flex
flex-col
justify-between
                "
              >

                <div className="text-4xl md:text-5xl">

                  ⭐

                </div>



                <p
                  className="
                    text-gray-300
                    mt-2
                    md:mt-6
                    leading-relaxed
                    text-sm
                    sm:text-base
                    md:text-lg
                  "
                >

                  “{story.text}”

                </p>



                <h4
                  className="
                    mt-2
                    md:mt-8
                    text-white
                    font-bold
                    text-lg
                    sm:text-xl
                  "
                >

                  — {story.name}

                </h4>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default SuccessStories;