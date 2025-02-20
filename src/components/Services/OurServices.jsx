import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaTools,
  FaPlug,
  FaMoneyBillWave,
} from "react-icons/fa";

const services = [
  {
    title: "Residential Solar Solutions",
    description:
      "Power your home with clean energy and reduce electricity bills.",
    icon: <FaHome className="text-white w-6 h-6" />,
    bgColor: "bg-customGreen",
  },
  {
    title: "Commercial & Industrial Solar",
    description: "Optimize your business with cost-saving solar solutions.",
    icon: <FaBuilding className="text-white w-6 h-6" />,
    bgColor: "bg-customGreen",
  },
  {
    title: "Solar Panel Installation & Maintenance",
    description: "End-to-end services from installation to upkeep.",
    icon: <FaTools className="text-white w-6 h-6" />,
    bgColor: "bg-customGreen",
  },
  {
    title: "On-Grid & Off-Grid Solutions",
    description: "Customized solar systems to match your energy needs.",
    icon: <FaPlug className="text-white w-6 h-6" />,
    bgColor: "bg-customGreen",
  },
  {
    title: "Solar Financing & Subsidies Assistance",
    description: "Helping you access government benefits and incentives.",
    icon: <FaMoneyBillWave className="text-white w-6 h-6" />,
    bgColor: "bg-customGreen",
  },
];

export default function OurServices() {
  return (
    <section
      id="our-services"
      className="py-16 my-5 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="relative px-6 mx-auto max-w-7xl sm:px-8 lg:px-10 text-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-customGreen mb-2 tracking-wide uppercase">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide high-quality services tailored to your needs.
          </p>
        </div>

        {/* Service Grid with Modern Asymmetric Layout */}
        {/* Service Grid with Modern Asymmetric Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative bg-white hover:bg-gradient-to-br hover:from-customGreen/10 hover:to-transparent rounded-3xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center transition-all duration-500 group border border-gray-200 hover:border-customGreen"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" /> */}
              <div
                className={`w-20 h-20 rounded-full ${service.bgColor} flex justify-center items-center text-4xl shadow-md group-hover:scale-110 transition-all duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 group-hover:text-customGreen transition-all duration-300">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="px-5 py-2 bg-customGreen text-white rounded-full shadow-md hover:bg-green-700 transition-all duration-300">
                  <a href="/contact-with-vanguard">Get Quote</a>
                </button>
              </div>
            </motion.div>
          ))}
          {services.length === 5 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center transition-all duration-500 group border border-gray-200 hover:border-customGreen md:col-span-2 w-full max-w-[50%] mx-auto"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" /> */}
              <div
                className={`w-20 h-20 rounded-full ${services[4].bgColor} flex justify-center items-center text-4xl shadow-md group-hover:scale-110 transition-all duration-300`}
              >
                {services[4].icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 group-hover:text-customGreen transition-all duration-300">
                {services[4].title}
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                {services[4].description}
              </p>
              <div className="mt-6">
                <button className="px-5 py-2 bg-customGreen text-white rounded-full shadow-md hover:bg-green-700 transition-all duration-300">
                  <a href="/contact-with-vanguard">Get Quote</a>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white mt-10"
      >
        <table className="w-full border-collapse">
          <thead className="bg-customGreen text-white">
            <tr>
              <th className="px-4 py-3">Solar Capacity</th>
              <th className="px-4 py-3">Govt. Subsidy (₹)</th>
              <th className="px-4 py-3">Your EB Bill (60 days)</th>
              <th className="px-4 py-3">After Solar Bill</th>
              <th className="px-4 py-3">Avg. Bi-Monthly Units</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 ">
            {[
              {
                capacity: "1 KW",
                subsidy: "30,000",
                ebBill: "600-1000",
                afterSolar: "90",
                units: "270-320",
              },
              {
                capacity: "2 KW",
                subsidy: "60,000",
                ebBill: "2000-2800",
                afterSolar: "180",
                units: "550-650",
              },
              {
                capacity: "3 KW",
                subsidy: "78,000",
                ebBill: "4000-5000",
                afterSolar: "270",
                units: "800-950",
              },
              {
                capacity: "5 KW",
                subsidy: "78,000",
                ebBill: "10000-12600",
                afterSolar: "450",
                units: "1300-1600",
              },
              {
                capacity: "10 KW",
                subsidy: "78,000",
                ebBill: "280000-30000",
                afterSolar: "900",
                units: "2800-3200",
              },
            ].map((row, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="transition-all duration-300 hover:bg-green-100 "
              >
                <td className="px-4 py-3 text-center border">{row.capacity}</td>
                <td className="px-4 py-3 text-center border">{row.subsidy}</td>
                <td className="px-4 py-3 text-center border">{row.ebBill}</td>
                <td className="px-4 py-3 text-center border">
                  {row.afterSolar}
                </td>
                <td className="px-4 py-3 text-center border">{row.units}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
