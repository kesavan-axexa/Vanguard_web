import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaLeaf, FaPiggyBank, FaTools, FaLightbulb } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Save the Environment",
    icon: <FaLeaf className="text-green-400 text-4xl" />,
    description: "Switching to solar energy reduces carbon footprints.",
    bgSVG: (
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="green"
      >
        <circle cx="100" cy="100" r="80" />
      </svg>
    ),
  },
  {
    title: "Affordable Solar Loans",
    icon: <FaPiggyBank className="text-indigo-500 text-4xl" />,
    description: "Get low-interest solar financing with easy approval.",
    bgSVG: (
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="yellow"
      >
        <ellipse cx="100" cy="100" rx="80" ry="50" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    icon: <FaTools className="text-red-500 text-4xl" />,
    description: "Benefit from 24/7 customer support and quick installations.",
    bgSVG: (
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="green"
      >
        <circle cx="100" cy="100" r="80" />
      </svg>
    ),
  },
  {
    title: "Energy Independence",
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    description: "Reduce reliance on traditional power sources and save costs.",
    bgSVG: (
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="yellow"
      >
        <ellipse cx="100" cy="100" rx="80" ry="50" />
      </svg>
    ),
  },
];

const Card = ({ title, icon, description, bgSVG, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation only happens once
    threshold: 0.2, // Triggers when 20% of the card is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`relative p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center space-y-4 border w-64 h-72 overflow-hidden
        ${index % 2 !== 0 ? "bg-yellow-50/50 border-yellow-200" : "bg-green-50 border-green-300"}`}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, y: index % 2 === 0 ? 50 : 0, x: index % 2 !== 0 ? -50 : 0 },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 } },
      }}
    >
      {bgSVG} {/* Background SVG */}
      {icon}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default function SolarSubsidyCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100">
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
}
