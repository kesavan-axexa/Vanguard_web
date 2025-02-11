import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHandshake,
  FaUserTie,
  FaSolarPanel,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row md:mx-32 md:py-20 py-10 gap-12 bg-gradient-to-r from-green-50/10 via-green-50/50 to-green-50/10 min-h-screen items-center justify-center">
      {/* Left Section */}
      <div ref={leftRef} className="flex-1 max-w-screen-md space-y-8">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight">
          Join Our <span className="text-customGreen5">Vanguard</span>{" "}
          Partnership Program
        </h2>
        <p className="text-lg">
          Whether you’re an
          independent service provider, a business owner, or a solar industry
          expert, there’s a place for you in our growing network.
        </p>
        <div className="grid md:grid-cols-1 gap-6">
          {[
            // {
            //   icon: FaHandshake,
            //   title: "Service Professionals",
            //   desc: "Interior designers, project managers, brokers, and others looking to expand their service reach.",
            // },
            {
              icon: FaUserTie,
              title: "Business Providers",
              desc: "Shop owners, business operators, and entrepreneurs looking for growth opportunities.",
            },
            {
              icon: FaSolarPanel,
              title: "Solar Industry Associates",
              desc: "Suppliers, dealers, and professionals in solar energy looking to partner with us.",
            },
            // {
            //   icon: FaTools,
            //   title: "Technical Experts",
            //   desc: "Engineers, electricians, and technicians with expertise in solar installation and maintenance.",
            // },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-5 rounded-xl shadow-md bg-white transition duration-300 hover:border hover:border-green-300 hover:bg-customGreen/10 hover:shadow-lg"
            >
              <item.icon className="text-customGreen5 text-3xl md:text-4xl mr-5 shrink-0" />
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div ref={rightRef} className="flex-1 max-w-screen-lg w-full bg-white lg:mx-20 mx-0 md:p-10 p-6 rounded-2xl shadow-lg transition transform duration-300 ">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Partner with Us
        </h3>
        <form className="space-y-6">
          {[
            {
              label: "Full Name *",
              type: "text",
              icon: FaUser,
              placeholder: "Enter your name",
            },
            {
              label: "Mobile *",
              type: "tel",
              icon: FaPhone,
              placeholder: "Enter mobile number",
            },
            {
              label: "District *",
              type: "text",
              icon: FaMapMarkerAlt,
              placeholder: "Enter District",
            },
            {
              label: "Email",
              type: "email",
              icon: FaEnvelope,
              placeholder: "Enter email",
            },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 font-medium text-base">
                {field.label}
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 focus-within:border-customGreen5 transition">
                <field.icon className="text-gray-500 mr-3 text-lg" />
                <input
                  type={field.type}
                  className="w-full focus:outline-none bg-transparent text-base"
                  placeholder={field.placeholder}
                  required
                />
              </div>
            </div>
          ))}

          <div>
            <label className="block text-gray-700 font-medium text-base">
              Profession *
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 focus-within:border-customGreen5 transition">
              <FaBriefcase className="text-gray-500 mr-3 text-lg" />
              <select
                className="w-full focus:outline-none bg-transparent text-base"
                required
              >
                <option>Select profession</option>
                <option>Architect</option>
                <option>Business Owner</option>
                <option>Chartered Accountant</option>
                <option>Loan/Insurance Agent</option>
                <option>Solar Professional</option>
                <option>Working Professional</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-customGreen5  text-white p-3 rounded-lg text-lg font-semibold flex items-center justify-center hover:bg-customGreen4 transform transition duration-300">
            Earn with Us <FaArrowRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
