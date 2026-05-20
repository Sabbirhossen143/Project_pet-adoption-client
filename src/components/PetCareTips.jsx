const PetCareTips = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Pet Care Tips
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Healthy Food
            </h3>

            <p className="text-gray-600">
              Provide balanced nutrition and fresh water daily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Exercise
            </h3>

            <p className="text-gray-600">
              Regular exercise keeps pets physically fit and active.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Veterinary Care
            </h3>

            <p className="text-gray-600">
              Schedule regular checkups and vaccinations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PetCareTips;