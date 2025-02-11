import React, { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaPhone,
  FaCity,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billRange: "",
  });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
    <div>
      {/* Floating Button with Tooltip */}
      <div className="fixed bottom-5 right-5 z-50 group flex items-center">
        <div className="absolute right-14 bg-black text-white text-xs px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity max-w-xs whitespace-nowrap shadow-md">
          Interested in partnering with us?
          <div className="w-2 h-2 bg-black rotate-45 absolute top-4 right-[-4px]"></div>
        </div>
        <button
          className="bg-customGreen5 p-4 rounded-full shadow-lg text-white hover:bg-green-700 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiMessageDetail className="text-xl" />
        </button>
      </div>

      {/* Contact Form Modal */}
      {isOpen && (
        <motion.div
          ref={popupRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-5 z-50 bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-80"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              { id: "name", icon: <FaUser />, placeholder: "Full Name" },
              { id: "phone", icon: <FaPhone />, placeholder: "Phone Number" },
              { id: "city", icon: <FaCity />, placeholder: "City" },
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
                    className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
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
                  className="mt-1 block w-full pl-10 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
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
              className="w-full bg-customGreen5 text-sm flex items-center justify-center text-white py-2 rounded-md hover:bg-customGreen4 transition-all shadow-md"
            >
              <FaCheckCircle className="mr-2" /> Submit
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default ContactUsForm;
