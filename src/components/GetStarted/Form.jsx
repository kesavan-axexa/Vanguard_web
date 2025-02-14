import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [selectedType, setSelectedType] = useState("Residential");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    pinCode: "",
    averageBill: "",
    housingSocietyName: "",
    designation: "",
    approvalStatus: "",
    companyName: "",
    city: "",
  });

  const handleTypeSelection = (value) => {
    setSelectedType(value);
    // Reset form data when switching types
    setFormData({
      fullName: "",
      whatsappNumber: "",
      pinCode: "",
      averageBill: "",
      housingSocietyName: "",
      designation: "",
      approvalStatus: "",
      companyName: "",
      city: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedType) {
      toast.error("Please select a type before submitting!");
      return;
    }

    let formPayload;
    let apiUrl;

    switch (selectedType) {
      case "Commercial":
        formPayload = {
          name: formData.fullName,
          companyName: formData.companyName,
          city: formData.city,
          pincode: formData.pinCode,
          number: formData.whatsappNumber,
          billRange: formData.averageBill,
        };
        apiUrl = "/send-commercial-form";
        break;

      case "Residential":
        formPayload = {
          name: formData.fullName,
          phone: formData.whatsappNumber,
          pincode: formData.pinCode,
          billRange: formData.averageBill,
        };
        apiUrl = "/send-residential-form";
        break;

      case "Housing Society":
        formPayload = {
          name: formData.fullName,
          housingName: formData.housingSocietyName,
          pincode: formData.pinCode,
          number: formData.whatsappNumber,
          billRange: formData.averageBill,
          housingDesignation: formData.designation,
          agmStatus: formData.approvalStatus,
        };
        apiUrl = "/send-housing-form";
        break;

      default:
        toast.error("Invalid form type selected!");
        return;
    }

    try {
      const response = await fetch(`${BASE_URL}${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        // ✅ Reset form data after successful submission
        setFormData({
          fullName: "",
          companyName: "",
          city: "",
          pinCode: "",
          whatsappNumber: "",
          averageBill: "",
          housingSocietyName: "",
          designation: "",
          approvalStatus: "",
        });
      } else {
        toast.error(
          data.message || "Failed to submit the form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center my-[10vh] px-5">
      {/* Left Side */}
      <motion.div
        className="xl:w-1/2  p-5"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Schedule a <span className="text-customGreen">FREE consultation</span>{" "}
          with us today!
        </h2>
        <p className="text-gray-600 mt-2">
          Please fill the form and we will get in touch with you for the
          consultation
        </p>
        <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/contactus.jpg"
            alt="Consultation"
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Right Side Form */}
      <motion.div
        className="w-full xl:w-1/2 xl:p-8 p-4 bg-white shadow-lg rounded-xl "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full overflow-x-auto ">
          <div className="flex gap-x-4 bg-gray-100 p-2 rounded-lg  justify-between items-center mb-5 min-w-max whitespace-nowrap">
            {["Residential", "Housing Society", "Commercial"].map((type) => (
              <motion.button
                key={type}
                className="relative px-4 py-2 rounded-lg text-sm font-medium shrink-0 overflow-hidden transition-all"
                onClick={() => handleTypeSelection(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <AnimatePresence>
                  {selectedType === type && (
                    <motion.div
                      className="absolute inset-0 bg-customGreen rounded-lg"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>

                <span
                  className={`relative z-10 transition-all ${
                    selectedType === type ? "text-white" : "text-gray-600"
                  }`}
                >
                  {type}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Common Form Fields */}
          <motion.div
            key="commonFields"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-gray-700 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
              placeholder="Enter your name"
              required
            />

            <label className="block text-gray-700 font-medium mt-4">
              Number *
            </label>
            <input
              type="number"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  handleInputChange(e);
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
              placeholder="Enter valid 10 digit mobile number"
              required
            />

            <label className="block text-gray-700 font-medium mt-4">
              Pin Code *
            </label>
            <input
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={(e) => {
                if (e.target.value.length <= 6) {
                  handleInputChange(e);
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
              placeholder="Enter valid 6 digit Pin Code"
              required
            />
          </motion.div>

          {selectedType === "Residential" && (
            <motion.div>
              <label className="block text-gray-700 font-medium">
                What is your average monthly bill? *
              </label>
              <select
                name="averageBill"
                value={formData.averageBill}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                required
              >
                <option value="">Select an option</option>
                {[
                  "Less than ₹1500",
                  "₹1500 - ₹2500",
                  "₹2500 - ₹4000",
                  "₹4000 - ₹8000",
                  "More than ₹8000",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {selectedType === "Housing Society" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div>
                <label className="block text-gray-700 font-medium">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  name="housingSocietyName"
                  value={formData.housingSocietyName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                  placeholder="Enter Housing Society name"
                  required
                />
              </motion.div>

              <motion.div>
                <label className="block text-gray-700 font-medium">
                  Monthly Electricity Bill *
                </label>
                <input
                  type="number"
                  name="averageBill"
                  value={formData.averageBill}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                  placeholder="Enter Monthly Electricity Bill"
                  required
                />
              </motion.div>

              <motion.div>
                <label className="block text-gray-700 font-medium">
                  Designation in Housing Society? *
                </label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                  required
                >
                  <option value="">Select Designation</option>
                  <option value="Management committee member">
                    Management committee member
                  </option>
                  <option value="Resident">Resident</option>
                  <option value="Builder">Builder</option>
                  <option value="Facility Manager">Facility Manager</option>
                </select>
              </motion.div>

              <motion.div>
                <label className="block text-gray-700 font-medium">
                  AGM approval status *
                </label>
                <select
                  name="approvalStatus"
                  value={formData.approvalStatus}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                  required
                >
                  <option value="">Select Approval Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </motion.div>
            </div>
          )}

          {selectedType === "Commercial" && (
            <>
              <motion.div>
                <label className="block text-gray-700 font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                  placeholder="Enter Company Name"
                  required
                />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div>
                  <label className="block text-gray-700 font-medium">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                    placeholder="Enter your city"
                    required
                  />
                </motion.div>
                <motion.div>
                  <label className="block text-gray-700 font-medium">
                    Average Monthly Bill *
                  </label>
                  <input
                    type="text"
                    name="averageBill"
                    value={formData.averageBill}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen outline-none"
                    placeholder="Enter Average Monthly Bill"
                    required
                  />
                </motion.div>
              </div>
            </>
          )}

          <div className="flex items-center gap-2">
            <input type="checkbox" id="agree" className="h-4 w-4" required />
            <label htmlFor="agree" className="text-gray-600 text-sm">
              I agree to Vanguard Solar's{" "}
              <a href="#" className="text-customGreen">
                terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="text-customGreen">
                privacy policy
              </a>
            </label>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-customGreen text-white p-3 rounded-lg text-lg font-semibold flex justify-center items-center gap-2 hover:bg-green-700 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Submit Details <FaArrowRight />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
