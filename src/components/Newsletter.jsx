const Newsletter = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-3xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-4 text-gray-600">
          Get adoption updates and pet care tips directly to your inbox.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="border px-5 py-4 rounded-xl w-full"
          />

          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;
