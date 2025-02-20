import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "/Logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsSticky(window.scrollY < lastScrollY || window.scrollY === 0);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when navigating to a new page
    setIsSticky(true);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-white/90 shadow-md transition-transform duration-300 ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto text-sm md:px-10 px-5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={companyLogo} alt="Company Logo" className="w-36 h-20" />
        </div>

        {/* Menu Items */}
        <div className="hidden lg:space-x-6 space-x-2 lg:flex">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/services", label: "Our Services" },
            { path: "/solar-subsidy", label: "Solar Subsidy" },
            { path: "/contact", label: "Vanguard Pro" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-green-700 hover:font-semibold ${
                location.pathname === item.path ? "text-customGreen5 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/contact-with-vanguard"
          className=" px-4 py-2 text-white md:text-base text-xs bg-customGreen rounded-full hover:bg-customGreen1 block"
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className="flex flex-col space-y-1">
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                toggleMenu ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                toggleMenu ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                toggleMenu ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full left-0 mt-5 rounded-lg top-full bg-white shadow-md py-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 origin-top ${
          toggleMenu ? "scale-y-100" : "scale-y-0 hidden"
        }`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About Us" },
          { path: "/services", label: "Our Services" },
          { path: "/solar-subsidy", label: "Solar Subsidy" },
          { path: "/contact", label: "Vanguard Pro" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-green-700 hover:font-semibold ${
              location.pathname === item.path ? "text-customGreen5 font-semibold" : ""
            }`}
            onClick={() => setToggleMenu(false)} // Close menu on click
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
