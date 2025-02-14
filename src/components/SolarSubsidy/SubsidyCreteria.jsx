import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHandHoldingUsd,
  FaRegCalendarAlt,
  FaWrench,
  FaUsers,
  FaLightbulb,
  FaFileInvoice,
  FaUniversity,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const SubsidyCriteria = () => {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 md:px-16 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Subsidy & Financing Section */}
        <div
          className={`group relative border border-customGreen5 p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden 
            ${
              hovered === "left"
                ? "bg-cover bg-center bg-[url('/Subsidy_Img1.jpg')] text-white"
                : "bg-black bg-opacity-50"
            }`}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Image with Blur */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-[url('/Subsidy_Img1.jpg')] transition-all duration-700 ${
              hovered === "left" ? "blur-0 opacity-100" : "blur-xs opacity-30"
            }`}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-500"></div>

          {hovered === "left" && (
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/0 to-transparent opacity-100 transition-all duration-500"></div>
          )}

          <div className="relative z-10 hover:cursor-pointer">
            <h2
              className={`md:text-3xl text-2xl font-bold mb-6 ${
                hovered === "left" ? "text-white" : "text-customGreen"
              }`}
            >
              💸 Subsidy & Easy Financing
            </h2>
            <ul className="space-y-5 text-lg">
              {[
                {
                  text: "Zero-Collateral Loans – Secure 100% financing without any security deposit.",
                  icon: <FaHandHoldingUsd />,
                },
                {
                  text: "Flexible EMI Plans – Spread your investment into easy monthly payments.",
                  icon: <FaRegCalendarAlt />,
                },
                {
                  text: "5 Years Free Annual Maintenance – Complete system upkeep at no cost.",
                  icon: <FaWrench />,
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span
                    className={`text-3xl ${
                      hovered === "left" ? "text-white" : "text-customGreen"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      hovered === "left"
                        ? "text-neutral-100 font-semibold"
                        : "text-gray-100"
                    }`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eligibility Section */}
        <div
          className={`group relative border border-customGreen5 p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden 
            ${
              hovered === "right"
                ? "bg-cover bg-center bg-[url('/Subsidy_Img2.jpg')] text-white"
                : "bg-black bg-opacity-50"
            }`}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Image with Blur */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-[url('/Subsidy_Img2.jpg')] transition-all duration-700 ${
              hovered === "right" ? "blur-0 opacity-100" : "blur-xs opacity-30"
            }`}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-500"></div>

          {hovered === "right" && (
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/0 to-transparent opacity-100 transition-all duration-500"></div>
          )}

          <div className="relative z-10 hover:cursor-pointer">
            <h2
              className={`md:text-3xl text-2xl font-bold mb-6 ${
                hovered === "right" ? "text-white" : "text-customGreen"
              }`}
            >
              🎯 Who Can Apply?
            </h2>
            <ul className="space-y-5 text-lg">
              {[
                {
                  text: "Indian citizens with rooftop space receiving direct sunlight",
                  icon: <FaUsers />,
                },
                {
                  text: "Households with an active electricity connection",
                  icon: <FaLightbulb />,
                },
                {
                  text: "Applicants not enrolled in any other solar subsidy program",
                  icon: <FaFileInvoice />,
                },
                {
                  text: "Must provide ownership proof, electricity bill & bank details",
                  icon: <FaUniversity />,
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span
                    className={`text-3xl ${
                      hovered === "right" ? "text-white" : "text-customGreen"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      hovered === "right" ? "text-white" : "text-gray-100"
                    }`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidyCriteria;
