import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaPhone, FaCity, FaBolt, FaCheckCircle } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billRange: "",
  });

  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   gsap.from(".animate-left", {
  //     opacity: 0,
  //     x: -50,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".animate-left",
  //       start: "top 80%",
  //       toggleActions: "play none none reset",
  //     },
  //   });

  //   gsap.from(".animate-right", {
  //     opacity: 0,
  //     y: 20,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".animate-right",
  //       start: "top 80%",
  //       toggleActions: "play none none reset",
  //     },
  //   });
  // }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4 py-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10">
        {/* Left Content Section */}
        <div className="relative bg-gradient-to-r from-customGreen to-customGreen max-w-lg text-white md:p-10 p-5 rounded-lg shadow-2xl text-left flex flex-col items-center lg:items-start overflow-hidden animate-left">
          <div className="text-left">
            <MdSolarPower className="text-yellow-300 text-7xl animate-pulse z-10" />
          </div>
          <h1 className="text-4xl font-bold mt-4 z-10">
            Schedule Your <span className="text-green-900">FREE</span>{" "}
            <span className="text-customGrey2">Solar Consultation!</span>
          </h1>
          <p className="mt-3 text-base font-medium leading-relaxed z-10">
            Honest advice from our experts—no pressure, no hassle. Book only
            when you're ready to switch to solar! 🌞
          </p>
        </div>

        {/* Right Form Section */}
        <form
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-lg border border-green-200 animate-right"
          onSubmit={handleSubmit}
        >
          {[
            { id: "name", icon: <FaUser />, placeholder: "Full Name" },
            { id: "phone", icon: <FaPhone />, placeholder: "Phone Number" },
            { id: "city", icon: <FaCity />, placeholder: "City" },
          ].map((field, index) => (
            <div key={index} className="relative">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.placeholder} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">{field.icon}</div>
                <input
                  type="text"
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder={`Enter your ${field.placeholder.toLowerCase()}`}
                />
              </div>
              {errors[field.id] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

          {/* Electricity Bill Dropdown */}
          <div>
            <label htmlFor="billRange" className="block text-sm font-medium text-gray-700">
              Monthly Electricity Bill <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaBolt className="absolute left-3 top-4 text-gray-400" />
              <select
                id="billRange"
                value={formData.billRange}
                onChange={handleChange}
                className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 transition-all"
              >
                <option value="">Select your bill range</option>
                <option value="less1500">Less than ₹1500</option>
                <option value="1500-2500">₹1500 - ₹2500</option>
                <option value="2500-4000">₹2500 - ₹4000</option>
                <option value="4000-8000">₹4000 - ₹8000</option>
                <option value="more8000">More than ₹8000</option>
              </select>
            </div>
            {errors.billRange && <p className="text-red-500 text-xs mt-1">{errors.billRange}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customGreen5 flex items-center text-sm justify-center text-white py-3 rounded-md hover:bg-customGreen transition-all shadow-md transform"
          >
            <FaCheckCircle className="mr-2" /> Yes! Reduce My Electricity Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeEnquiryForm;
