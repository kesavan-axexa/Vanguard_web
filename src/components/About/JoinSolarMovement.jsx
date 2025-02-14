import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

export default function JoinSolarMovement() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6 }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative py-16 px-6 lg:px-12 text-center">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-transparent blur-3xl" />

      {/* Section Title */}
      <h2 ref={titleRef} className="text-4xl font-bold text-customGreen">
        Join the Solar Movement!
      </h2>

      {/* Description */}
      <p
        ref={textRef}
        className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
      >
        Whether you are a homeowner, business owner, or entrepreneur, Vanguard
        Solar offers customized solar solutions tailored to your needs. Be a
        part of India’s solar revolution and enjoy free electricity, reduced
        power bills, and a sustainable future.
      </p>

      {/* Call to Action Buttons */}
      <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Contact Button */}
        <div
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-700 flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <FaPhoneAlt className="w-5 h-5" /> Contact Us
        </div>

        {/* Learn More Button */}
        <a
          href="/services"
          className="px-6 py-3 text-lg font-semibold text-green-600 border-2 border-green-600 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-700 hover:text-white"
        >
          Learn More
        </a>
      </div>

      {/* Subtle Bottom Glow */}
      {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-700/20 to-transparent blur-3xl" /> */}
    </div>
  );
}
