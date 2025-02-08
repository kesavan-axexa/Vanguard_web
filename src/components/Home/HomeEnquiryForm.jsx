import React, { useState } from "react";
import { FaUser, FaPhone, FaCity, FaBolt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdSolarPower } from "react-icons/md";

const HomeEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billRange: "",
  });

  const [errors, setErrors] = useState({});

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-customGreen to-customGreen max-w-lg text-white md:p-10 p-5 rounded-lg shadow-2xl  text-left lg:text-left flex flex-col items-center lg:items-start overflow-hidden"
        >
          {/* Background Solar SVG */}
          <div className="absolute inset-0 flex justify-end top-10 left-60 items-center opacity-15">
            <svg
              width="80%"
              height="80%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="6"
                r="3"
                fill="#FFD700"
                stroke="#FFA500"
                strokeWidth="1.5"
              />
              <path
                d="M12 1v2M12 9v2M4.5 4.5l1.5 1.5M18 18l1.5 1.5M1 12h2M21 12h2M4.5 19.5l1.5-1.5M18 6l1.5-1.5"
                stroke="#FFA500"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="12"
                width="12"
                height="6"
                fill="#008000"
                stroke="#006400"
                strokeWidth="1.5"
              />
              <path
                d="M6 18h12l-1 3H7l-1-3z"
                fill="#2E8B57"
                stroke="#006400"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Foreground Content */}
          <div className="text-left">
            <MdSolarPower className="text-yellow-300 text-7xl animate-pulse z-10" />
          </div>
          <h1 className="text-4xl font-bold mt-4 z-10">
            Schedule Your <span className="text-green-900">FREE</span>{" "}
            <span className="text-customGrey2">Solar Consultation!</span>
          </h1>
          <p className="mt-3 text-base  font-semibold leading-relaxed z-10">
            Honest advice from our experts—no pressure, no hassle. Book only
            when you're ready to switch to solar! 🌞
          </p>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-lg border border-green-200"
          onSubmit={handleSubmit}
        >
          {["name", "phone", "city"].map((field, index) => (
            <div key={index} className="relative">
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
              >
                {field === "name"
                  ? "Full Name"
                  : field === "phone"
                  ? "Phone Number"
                  : "City"}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                {field === "name" && (
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                )}
                {field === "phone" && (
                  <FaPhone className="absolute left-3 top-4 text-gray-400" />
                )}
                {field === "city" && (
                  <FaCity className="absolute left-3 top-4 text-gray-400" />
                )}
                <input
                  type="text"
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder={`Enter your ${field}`}
                />
              </div>
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* Electricity Bill Dropdown */}
          <div>
            <label
              htmlFor="billRange"
              className="block text-sm font-medium text-gray-700"
            >
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
            {errors.billRange && (
              <p className="text-red-500 text-xs mt-1">{errors.billRange}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customGreen5 flex items-center text-sm justify-center text-white py-3 rounded-md hover:bg-customGreen transition-all shadow-md transform"
          >
            <FaCheckCircle className="mr-2" /> Yes! Reduce My{" "}
            <span className="hidden md:inline"> &nbsp;Electricity Bill</span>
            <span className="inline md:hidden"> &nbsp;EB</span>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default HomeEnquiryForm;
