import React from "react";

const AboutGrid = () => {
  return (
    <div className="bg-green-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-6 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-customGreen5 sm:text-3xl md:text-4xl">
            Our Sample Installations
          </h2>
          <p className="mt-2 text-neutral-800 md:text-lg">
            A Preview of Your Future System
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Image 1 */}
          <a
            href="#"
            className="group relative flex h-48 sm:h-64 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="/About_1.jpg"
              loading="lazy"
              decoding="async"
              alt="Sample installation - VR setup"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50"></div>
          </a>

          {/* Image 2 */}
          <a
            href="#"
            className="group relative flex h-48 sm:h-64 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
          >
            <img
              src="/About_2.jpg"
              loading="lazy"
              decoding="async"
              alt="Sample installation - Modern tech setup"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50"></div>
          </a>

          {/* Image 3 */}
          <a
            href="#"
            className="group relative flex h-48 sm:h-64 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
          >
            <img
              src="/About_3.jpg"
              loading="lazy"
              decoding="async"
              alt="Sample installation - Developer workspace"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50"></div>
          </a>

          {/* Image 4 */}
          <a
            href="#"
            className="group relative flex h-48 sm:h-64 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="/About_4.jpg"
              loading="lazy"
              decoding="async"
              alt="Sample installation - Retro design"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
