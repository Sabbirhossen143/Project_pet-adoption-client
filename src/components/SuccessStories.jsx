const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Success Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-blue-50 p-8 rounded-2xl">
            <p className="text-gray-700">
              “Bella became a wonderful part of our family.
              She brings joy every single day.”
            </p>

            <h4 className="mt-5 font-bold">
              — Sarah Ahmed
            </h4>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <p className="text-gray-700">
              “Adopting Max was the best decision ever.
              He is energetic and loving.”
            </p>

            <h4 className="mt-5 font-bold">
              — Tanvir Hasan
            </h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;