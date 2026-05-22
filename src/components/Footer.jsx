import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="bg-[#0f172a] text-white">

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-16
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >

        {/* BRAND */}
        <div>

          <h2
            className="
              text-3xl
              font-extrabold
            "
          >

            <span className="text-white">

              Paw

            </span>

            <span className="text-[#F9C62B]">

              Connect

            </span>

          </h2>



          <p className="mt-5 text-white/70 leading-relaxed">

            Helping pets find loving homes and creating
            happier families every single day.

          </p>

        </div>



        {/* QUICK LINKS */}
        
<div>

  <h3
    className="
      text-xl
      font-bold
      mb-6
      text-[#F9C62B]
    "
  >

    Explore

  </h3>

<div className="grid grid-cols-2 gap-y-4 gap-x-6">

  {/* HOME */}
  <Link
    href="/"
    className="
      text-white/70
      hover:text-[#F9C62B]
      transition
      duration-300
      flex
      items-center
      gap-2
      mb-2
    "
  >

    <Image
      src="/images/home.png"
      alt="Home"
      width={18}
      height={18}
      className="object-contain"
    />

    <span>

      Home

    </span>

  </Link>
</div>


  {/* ALL PETS */}
  <Link
    href="/all-pets"
    className="
      text-white/70
      hover:text-[#F9C62B]
      transition
      duration-300
      flex
      items-center
      gap-2
      mb-2
    "
  >

    <Image
      src="/images/pets.png"
      alt="Pets"
      width={18}
      height={18}
      className="object-contain"
    />

    <span>

      All Pets

    </span>

  </Link>



  {/* LOGIN */}
  <Link
    href="/login"
    className="
      text-white/70
      hover:text-[#F9C62B]
      transition
      duration-300
      flex
      items-center
      gap-2
      mb-2
    "
  >

    <Image
      src="/images/login1.png"
      alt="Login"
      width={18}
      height={18}
      className="object-contain"
    />

    <span>

      Login

    </span>

  </Link>



  {/* REGISTER */}
  <Link
    href="/register"
    className="
      text-white/70
      hover:text-[#F9C62B]
      transition
      duration-300
      flex
      items-center
      gap-2
    "
  >

    <Image
      src="/images/register.png"
      alt="Register"
      width={18}
      height={18}
      className="object-contain"
    />

    <span>

      Register

    </span>

  </Link>

</div>


        {/* CONTACT */}
        <div>

          <h3
            className="
              text-xl
              font-bold
              mb-5
              text-[#F9C62B]
            "
          >

            Contact

          </h3>


<div className="space-y-4 text-white/70">

  {/* EMAIL */}
  <a
    href="mailto:pawconnect@gmail.com"
    className="
      flex
      items-center
      gap-3
      hover:text-[#F9C62B]
      transition
      duration-300
    "
  >

    <Image
      src="/images/mail.png"
      alt="Mail"
      width={22}
      height={22}
      className="object-contain"
    />



    <span>

      pawconnect@gmail.com

    </span>

  </a>



  {/* WHATSAPP */}
  <a
    href="https://wa.me/8801308772842"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-3
      hover:text-[#25D366]
      transition
      duration-300
    "
  >

    <Image
      src="/images/whatsapp.png"
      alt="WhatsApp"
      width={22}
      height={22}
      className="object-contain"
    />



    <span>

      +880 1308772842

    </span>

  </a>



  {/* LOCATION */}
  <a
    href="https://maps.google.com/?q=Chattogram,Bangladesh"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-3
      hover:text-[#F9C62B]
      transition
      duration-300
    "
  >

    <Image
      src="/images/location.png"
      alt="Location"
      width={22}
      height={22}
      className="object-contain"
    />



    <span>

      Chattogram, Bangladesh

    </span>

  </a>

</div>

</div>




        {/* SOCIAL */}
        <div>

          <h3
            className="
              text-xl
              font-bold
              mb-5
              text-[#F9C62B]
            "
          >

            Follow Us

          </h3>



          <div className="flex gap-4">

            <a
              href="#"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                text-[#F9C62B]
                flex
                items-center
                justify-center
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
              "
            >

              <FaFacebookF />

            </a>



            <a
              href="#"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                text-[#F9C62B]
                flex
                items-center
                justify-center
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
              "
            >

              <FaInstagram />

            </a>



            <a
              href="#"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                text-[#F9C62B]
                flex
                items-center
                justify-center
                hover:bg-[#F9C62B]
                hover:text-black
                transition
                duration-300
              "
            >

              <FaTwitter />

            </a>

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div
        className="
          border-t
          border-white/10
          py-5
          text-center
          text-white/60
          text-sm
        "
      >

        <p className="flex items-center justify-center gap-2">

          © 2026 PawConnect. Made with

          <FaHeart className="text-[#F9C62B]" />

          for pets.

        </p>

      </div>

    </footer>
  );
};

export default Footer;