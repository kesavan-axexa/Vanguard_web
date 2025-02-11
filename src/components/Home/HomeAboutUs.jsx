import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaSolarPanel,
  FaCertificate,
  FaDollarSign,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAboutUs() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Content Animation (Left Side)
      gsap.from(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Image Animation (Right Side)
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-50"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Right Side - Text Content */}
        <div ref={textRef}>
          <h3 className="font-nunito text-3xl uppercase text-customGreen5 font-extrabold tracking-wide mb-4">
            About Vanguard Solar
          </h3>
          <p className="text-gray-600 text-sm font-semibold mb-6">
            Vanguard Solar is committed to providing cutting-edge, sustainable
            energy solutions. Our mission is to harness the power of the sun to
            create a cleaner and brighter future for everyone.
          </p>

          {/* Feature Grid - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: FaSolarPanel, title: "Expertise You Can Trust" },
              { icon: FaCertificate, title: "Certified & Reliable" },
              { icon: FaDollarSign, title: "Affordable & Efficient" },
              { icon: FaHandshake, title: "Customer-Centric" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-xl border border-gray-200 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center text-white text-2xl rounded-xl bg-customGreen shadow-md">
                  <item.icon />
                </div>
                <h4 className="font-quicksand text-sm font-medium text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Know More Button */}
          <Link
            to={"/about"}
            className="mt-4 px-5 py-2 text-sm bg-customGreen text-white rounded-lg shadow-md hover:bg-customGreen5 transition-all"
          >
            Know More
          </Link>
        </div>

        {/* Left Side - Image with Decorative SVG */}
        <div className="relative" ref={imageRef}>
          <img
            src="/About_Img.jpg"
            alt="Solar Power"
            className="w-full max-h-[400px] z-50 object-cover rounded-3xl shadow-xl"
          />
          {/* Decorative Dots SVG */}
          <div className="absolute top-[-20px] lg:-right-16 -right-12 transform -translate-x-1/2 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-green-300 rounded-full opacity-70"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
