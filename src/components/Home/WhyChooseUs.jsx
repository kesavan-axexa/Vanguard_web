import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Features = () => {
  const cardsRef = useRef(null);

  const featuresData = [
    "One of Tamil Nadu’s top solar installers, completing 50+ installations every month",
    "High-quality solar panels with guaranteed performance",
    "Affordable pricing and flexible financing options",
    "Expert consultation, installation, and after-sales service",
    "Sustainable energy solutions for homes, businesses, and industries",
    "Trusted and Certified MSME. Serving Since 2008",
    "Affordable and Efficient Solar Solutions",
  ];

  const duplicatedFeatures = [...featuresData, ...featuresData]; // Duplicate for seamless looping

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardsRef.current, {
        x: `-${cardsRef.current.scrollWidth / 2}px`, // Move by half the width for seamless looping
        ease: "linear",
        duration: 25, // Adjust speed (lower = faster)
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative md:mt-20 mt-10 bg-white overflow-hidden">
      <div className="text-center text-customGreen text-3xl font-bold my-5">
        <h2 className="text-3xl px-5 font-bold uppercase text-customGreen5">
          Why Choose Vanguard Solar?
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex space-x-6 py-10 px-5 w-max hover:text-customGrey2" ref={cardsRef}>
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-green-50 hover:text-customGrey2 hover:bg-gradient-to-br hover:translate-y-1 from-customGreen via-customGreen3 to-customGreen3 hover:bg-opacity-90 duration-300 rounded-xl px-6 py-10 w-60 flex flex-col items-center cursor-pointer transition-all "
              style={{ position: "relative" }}
            >
              <div className="text-customGrey2 rounded-full bg-customGreen5 px-2 py-1.5 font-bold text-2xl mb-2">
                {(index % featuresData.length) + 1 < 10
                  ? `0${(index % featuresData.length) + 1}`
                  : (index % featuresData.length) + 1}
              </div>
              <h3 className="text-gray-800  text-center font-medium text-sm">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
