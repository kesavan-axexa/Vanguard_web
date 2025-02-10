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
    <section id="our-services" className="pb-14 bg-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-x-12 text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center md:p-8 lg:p-14"
            >
              {/* Icon Wrapper */}
              <div className={`w-14 h-14 rounded-full ${service.bgColor} flex justify-center items-center`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-gray-900 ">{service.title}</h3>

              {/* Description */}
              <p className="mt-4 text-base text-gray-600  max-w-xs">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
