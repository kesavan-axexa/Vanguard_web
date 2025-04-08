import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "/logo.jpg"; // Replace with your Vanguard Solar logo path

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white font-medium py-10 md:px-20 rounded-t-3xl px-5 relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 right-0 top-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,122.7C672,149,768,235,864,240C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 relative z-10">
        {/* Left Section */}
        <div>
          <img
            src={Logo}
            alt="Vanguard Solar Logo"
            className="w-40 h-auto mb-4 rounded-lg"
          />
          <p className="mb-4 text-sm leading-relaxed md:w-96">
            We don't just install panels.
            We power the <span className="font-bold">FUTURE!</span> <br />
            Bringing sustainable energy solutions to light, one panel at a time.
          </p>

          <div className="flex md:flex-row flex-col md:items-center md:space-x-6 text-sm">
            {/* Phone */}
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2 text-base" />
              <a
                href="tel:9830003000"
                className="hover:bg-white hover:text-customGreen px-2 py-1 rounded transition duration-300"
              >
                9443331502
              </a>
            </p>
            {/* Email */}
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-base" />
              <a
                href="mailto:info@vanguardsolar.in"
                className="hover:bg-white hover:text-customGreen px-2 py-1 rounded transition duration-300"
              >
                info@vanguardsolar.in
              </a>
            </p>
          </div>

          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="group hover:bg-white hover:text-customGreen p-2 rounded-full transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="group hover:bg-white hover:text-customGreen p-2 rounded-full transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/vanguard.solar?igsh=ZHJ3dHhwMTBucDh5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-white hover:text-customGreen p-2 rounded-full transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="group hover:bg-white hover:text-customGreen p-2 rounded-full transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Links */}
          <div>
            <h3 className="md:text-xl text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                >
                  Residential Solar Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                >
                  Commercial & Industrial Solar
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                >
                  Solar Panel Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                >
                  On-Grid & Off-Grid Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                >
                  Solar Financing & Subsidies Assistance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 text-sm">
              {/* First Column */}
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                  >
                    Our Services
                  </Link>
                </li>
              </ul>

              {/* Second Column */}
              <ul className="space-y-2 md:mt-0 mt-2">
                <li>
                  <Link
                    to="/solar-subsidy"
                    className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                  >
                    Solar Subsidy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:bg-white hover:text-customGreen py-1 rounded transition duration-300"
                  >
                    Vanguard Pro
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Address */}
          <div className="col-span-2">
            <h3 className="md:text-xl text-lg font-semibold mb-4">Address</h3>
            <p className="text-sm leading-relaxed">
              75-7 Kattu Salai, Chinnu Nagar, Paramathi Velur, Namakkal Dt Tamil Nadu, India - 638182.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
