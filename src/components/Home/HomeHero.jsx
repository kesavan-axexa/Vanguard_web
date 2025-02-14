import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const titlePhrases = [
    "Sustainable Future",
    "Clean Energy Revolution",
    "Brighter Tomorrow",
  ];
  const transitionDelay = 3000; // 3 seconds per phrase

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out effect

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titlePhrases.length);
        setIsFading(false); // Start fade-in effect
      }, 500); // Change text after fade-out completes (0.5s)
    }, transitionDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[75vh] bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black-opacity-20 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative flex items-center h-full  px-6 md:px-12">
          {/* Left Content */}
          <div className="max-w-4xl space-y-6 md:space-y-8 text-white">
            <h1 className="text-4xl text-customGrey2 md:text-5xl font-bold tracking-tight uppercase">
              Vanguard Solar - <br /> <span className="pt-3">Powering a </span> <br />
              <span
                key={currentIndex} // Ensures animation restarts on change
                className={`bg-clip-text text-transparent text-4xl md:text-5xl bg-gradient-to-r from-customGreen1 via-customGreen2 to-customGreen2 transition-opacity transform ${
                  isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                } duration-500 ease-in-out`}
              >
                {titlePhrases[currentIndex]}
              </span>
            </h1>
            <p className="text-sm max-w-lg  font-medium text-neutral-200 leading-relaxed">
              At Vanguard Solar, we bring you cutting-edge solar solutions
              tailored for your home, business, and industrial needs. With a
              mission to revolutionize renewable energy adoption in India, we
              are committed to delivering high-quality, cost-effective, and
              sustainable solar installations. Join us in our journey to make
              India a leader in clean energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
