import React from "react";

const Features = () => {
  return (
    <section id="features" className="px-5 md:px-10 pt-10 pb-20 mx-auto mt-10">
      {/* Grid Container */}
      <div className="grid gap-12 lg:grid-cols-2 grid-cols-1">
        {/* What's Different */}
        <div className="max-w-2xl flex flex-col justify-center text-left  space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-customGreen">
            Why Choose Vanguard Solar?
          </h2>
          <p className="text-sm text-neutral-600 max-w-lg font-semibold">
            Empowering Tamil Nadu with clean energy solutions since 2008.
            Vanguard Solar delivers top-tier solar installations, offering
            sustainable and cost-effective energy for homes and businesses.
          </p>
        </div>

        {/* Numbered Grid List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            "One of Tamil Nadu’s top solar installers, completing 50+ installations every month",
            "High-quality solar panels with guaranteed performance",
            "Affordable pricing and flexible financing options",
            "Expert consultation, installation, and after-sales service",
            "Sustainable energy solutions for homes, businesses, and industries",
            "Trusted and Certified MSME",
            "Affordable and Efficient Solar Solutions",
            "Serving Since 2008",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-customGreen5SupLight lg:p-4 rounded-lg"
            >
              <div className="md:px-4 px-2 md:py-2 py-1 text-white rounded-full bg-customGreen5 text-sm">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <h3 className="text-sm font-medium text-black">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
