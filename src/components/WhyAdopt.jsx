const WhyAdopt = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Adopt Pets?
          </h2>

          <p className="text-gray-600 mt-4">
            Adopting a pet changes both your life and theirs forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Save Lives
            </h3>

            <p className="text-gray-600">
              Give homeless animals a loving and caring home.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Reduce Stress
            </h3>

            <p className="text-gray-600">
              Pets provide emotional support and companionship.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Build Happiness
            </h3>

            <p className="text-gray-600">
              Having pets improves mental and physical well-being.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;