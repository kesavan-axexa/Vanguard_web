import { useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "/Logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative  mx-auto text-sm md:px-10 px-5">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <img src={companyLogo} alt="" className="w-36 h-20" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 lg:flex">
          <Link to="/" className="hover:text-green-700 hover:font-semibold">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-700 hover:font-semibold">
            About Us
          </Link>
          <Link to="/" className="hover:text-green-700 hover:font-semibold">
            Our Services
          </Link>
          <Link to="/solar-subsidy" className="hover:text-green-700 hover:font-semibold">
            Solar Subsidy
          </Link>
          <Link to="#" className="hover:text-green-700 hover:font-semibold">
            Contact Us
          </Link>
        </div>
        {/* Button */}
        <Link
          to="#"
          className="hidden  px-4 py-2  text-white bg-customGreen rounded-full baseline hover:bg-customGreen1 lg:block"
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger lg:hidden focus:outline-none"
              : "block hamburger lg:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="/" className="hover:text-green-700 hover:font-semibold">Home</Link>
          <Link to="/about" className="hover:text-green-700 hover:font-semibold">About Us</Link>
          <Link to="#" className="hover:text-green-700 hover:font-semibold">Our Services</Link>
          <Link to="/solar-subsidy" className="hover:text-green-700 hover:font-semibold">Solar Subsidy</Link>
          <Link to="#" className="hover:text-green-700 hover:font-semibold">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
