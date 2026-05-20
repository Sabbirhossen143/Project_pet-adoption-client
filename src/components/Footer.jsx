const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Pet Adoption
          </h2>

          <p>
            Find your perfect furry friend and give them a loving home.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p>Email: support@petadoption.com</p>
          <p>Phone: +880123456789</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Social Links
          </h3>

          <div className="flex gap-4">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4">
        © 2026 Pet Adoption Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;