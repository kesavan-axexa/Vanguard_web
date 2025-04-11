import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaPhone, FaCity, FaBolt, FaCheckCircle } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { toast } from "react-toastify";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HomeEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billRange: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  console.log("BASE_URL",BASE_URL);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
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

      gsap.from(imageRef.current, {
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
    });

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.billRange)
      newErrors.billRange = "Select your electricity bill range";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Start loading
      try {
        const response = await fetch(`${BASE_URL}/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          toast.success("Form submitted successfully!");
          setFormData({ name: "", phone: "", city: "", billRange: "" }); // Reset form
        } else {
          toast.error("Failed to send email. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-[80vh] bg-green-50 px-4 py-8"
      ref={sectionRef}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10">
        {/* Left Content Section */}
        <div ref={textRef}>
          <h1 className="text-2xl text-customGreen5 py-3 font-bold">
            Want To Reduce Electricity Bill (EB)?
          </h1>
          <div className="relative bg-gradient-to-r from-customGreen to-customGreen max-w-lg text-white md:p-10 p-5 rounded-lg shadow-2xl text-left flex flex-col items-center lg:items-start overflow-hidden animate-left">
            <MdSolarPower className="text-yellow-300 text-7xl animate-pulse z-10" />
            <h1 className="text-4xl font-bold mt-4 z-10">
              Schedule Your <span className="text-green-900">FREE</span>{" "}
              <span className="text-customGrey2">Solar Consultation!</span>
            </h1>
            <p className="mt-3 text-base font-medium leading-relaxed z-10">
              Honest advice from our experts—no pressure, no hassle. Book only
              when you're ready to switch to solar! 🌞
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <form
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-lg border border-green-200 animate-right"
          onSubmit={handleSubmit}
          ref={imageRef}
        >
          {[
            { id: "name", icon: <FaUser />, placeholder: "Full Name", maxLength: 20 },
            { id: "phone", icon: <FaPhone />, placeholder: "Phone Number", maxLength: 10 },
            { id: "city", icon: <FaCity />, placeholder: "City", maxLength: 40 },
          ].map((field, index) => (
            <div key={index} className="relative">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.placeholder} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">
                  {field.icon}
                </div>
                <input
                  type="text"
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-customGreen focus:border-customGreen transition-all"
                  placeholder={`Enter your ${field.placeholder.toLowerCase()}`}
                  maxLength={field.maxLength} 
                />
              </div>
              {errors[field.id] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}
          {/* Electricity Bill Dropdown */}
          <div className="w-full max-w-md mx-auto">
            <label
              htmlFor="billRange"
              className="block text-sm font-medium text-gray-700"
            >
              Monthly Electricity Bill <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              {/* Fixed Icon */}
              <FaBolt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />

              {/* Select Dropdown */}
              <select
                id="billRange"
                value={formData.billRange}
                onChange={handleChange}
                className="mt-1 block w-full pl-10 pr-4 h-12 text-sm sm:text-base rounded-md border border-gray-300 shadow-sm bg-white 
                 appearance-none focus:ring-customGreen focus:border-customGreen transition-all"
              >
                <option value="">Select your bill range</option>
                <option value="less1500">Less than ₹1500</option>
                <option value="1500-2500">₹1500 - ₹2500</option>
                <option value="2500-4000">₹2500 - ₹4000</option>
                <option value="4000-8000">₹4000 - ₹8000</option>
                <option value="more8000">More than ₹8000</option>
              </select>
            </div>
            {errors.billRange && (
              <p className="text-red-500 text-xs mt-1">{errors.billRange}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customGreen5 flex items-center md:text-sm text-xs justify-center text-white py-3 rounded-md hover:bg-customGreen transition-all shadow-md transform"
            disabled={loading}
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                <FaCheckCircle className="mr-2" /> Yes! Reduce My Electricity
                Bill
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeEnquiryForm;
