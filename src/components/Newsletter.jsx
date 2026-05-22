const Newsletter = () => {

  return (

    <section className="py-16 md:py-24 bg-[#16C6C0]">

      <div className="max-w-5xl mx-auto px-4">

        <div
          className="
            bg-white/10
            backdrop-blur-3xl
            border
            border-white/20
            rounded-[40px]
            p-5
            md:p-8
            sm:p-12
            shadow-2xl
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[6px]
              text-[#F9C62B]
              font-semibold
              text-sm
              mt-4
            "
          >

            Stay Connected

          </p>



          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              text-white
              mt-4
              md:mt-5
            "
          >

            Subscribe Our Newsletter

          </h2>



          <p
            className="
              mt-4
              md:mt-6
              text-white/80
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
            "
          >

            Get pet adoption updates, rescue stories,
            and premium pet care tips directly in your inbox.

          </p>



          {/* INPUT AREA */}
          <div
            className="
              mt-10
              flex
              flex-col
              md:flex-row
              gap-4
              md:gap-6
              items-center
              justify-center
            "
          >

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                w-full
                md:w-[420px]
                bg-white/15
                border
                border-white/20
                backdrop-blur-xl
                px-6
                py-4
                rounded-full
                text-white
                placeholder:text-white
                outline-none
                focus:border-2
focus:border-[#0f172a]
transition
duration-300
              "
            />



            <button
              className="
                mt-2
                md:mt-0
                mb-3
                md:mb-4
                bg-[#F9C62B]
                hover:bg-[#eab308]
                text-black
                font-bold
                border-1
                border-[#0f172a]
                px-8
                py-4
                rounded-full
                transition
                duration-300
                shadow-[0_12px_35px_rgba(249,198,43,0.45)]
                hover:shadow-[0_16px_45px_rgba(249,198,43,0.65)]
              "
            >

              Subscribe Now

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;