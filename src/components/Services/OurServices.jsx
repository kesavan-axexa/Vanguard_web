import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaTools, FaPlug, FaMoneyBillWave } from "react-icons/fa";

const services = [
  {
    title: "Residential Solar Solutions",
    description: "Power your home with clean energy and reduce electricity bills.",
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
    <section id="our-services" className="py-16 my-5 bg-gray-50">
    <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10 text-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-customGreen mb-2">
        What We Offer
        </h2>
        <p className="text-lg text-gray-600 ">
        We provide high-quality services tailored to your needs.
        </p>
      </div>
      {/* Service Grid with Asymmetric Layout */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.slice(0, 2).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center transition duration-500"
          >
            <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex justify-center items-center text-3xl`}>
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-4 text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}

        {services.slice(2, 4).map((service, index) => (
          <motion.div
            key={index + 2}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center transition duration-500"
          >
            <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex justify-center items-center text-3xl`}>
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-4 text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}

        {/* Full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center transition duration-500"
        >
          <div className={`w-20 h-20 rounded-xl ${services[4].bgColor} flex justify-center items-center text-4xl`}>
            {services[4].icon}
          </div>
          <h3 className="mt-6 text-3xl font-semibold text-gray-900">{services[4].title}</h3>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">{services[4].description}</p>
        </motion.div>
      </div>
    </div>
  </section>
  );
}
