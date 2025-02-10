import { motion } from "framer-motion";
import { FaSun, FaRocket, FaHandsHelping, FaLeaf } from "react-icons/fa";

const visionMissionData = [
  {
    title: "Our Vision",
    description:
      "To become the #1 solar energy provider in Tamil Nadu by 2030, empowering individuals and businesses with sustainable, efficient, and affordable solar solutions.",
    icon: <FaSun className="text-white w-10 h-10" />,
  },
  {
    title: "Accelerating Renewable Energy",
    description:
      "We are dedicated to speeding up India's transition to renewable energy through high-quality and cost-effective solar installations.",
    icon: <FaRocket className="text-white w-10 h-10" />,
  },
  {
    title: "Customer Satisfaction First",
    description:
      "We ensure 100% customer satisfaction by leveraging cutting-edge solar technology and expert services.",
    icon: <FaHandsHelping className="text-white w-10 h-10" />,
  },
  {
    title: "Commitment to Sustainability",
    description:
      "We actively support India's clean energy goals through government solar subsidy programs like PM Surya Ghar Muft Bijli Yojana.",
    icon: <FaLeaf className="text-white w-10 h-10" />,
  },
];

export default function VisionMission() {
  return (
    <div className="relative py-16 px-6 lg:px-12  ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-customGreen  mb-2">
          Our Vision & Mission
        </h2>
        <p className="text-lg text-gray-600 ">
          Driving the future of sustainable energy with innovation and
          commitment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {visionMissionData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center bg-customGreen transition-all duration-500  group border-2 border-transparent "
          >
            <div className="absolute inset-0 bg-green-700 transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>

            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-4 relative z-10 text-white"
            >
              {item.icon}
            </motion.div>
            {/* Title Animation */}
            <motion.h3
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-white mb-2 relative z-10"
            >
              {item.title}
            </motion.h3>
            {/* Title Animation */}
            <motion.p
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-white text-sm max-w-sm relative z-10 "
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
