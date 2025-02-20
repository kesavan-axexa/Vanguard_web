import React from "react";
import { Link } from "react-router-dom";

const SubsidyAction = () => {
  return (
    <div>
      <section id="cta" className="bg-customGreen md:m-20 m-5 rounded-xl">
        {/* Flex Container */}
        <div className="container flex flex-col items-center justify-between xl:px-40 px-6 py-24 mx-auto my-10 space-y-5 md:py-12 xl:flex-row xl:space-y-0">
          {/* Heading */}
          <h2 className="text-2xl font-bold leading-tight text-center text-white md:text-3xl md:max-w-xl md:text-left">
            Let us assist you in switching to solar and securing your government
            subsidy with ease!
          </h2>
          {/* Button */}
          <div className="flex justify-center text-center w-full xl:w-auto">
            <Link
              to="/contact-with-vanguard"
              className="px-6 py-3 md:text-sm text-customGreen1 text-xs font-semibold bg-white rounded-full shadow-2xl transition-all duration-300 hover:bg-customGreen5 hover:text-white"
            >
              Get a Free Consultation Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubsidyAction;
