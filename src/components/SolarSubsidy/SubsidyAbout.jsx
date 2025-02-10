import { FaSolarPanel, FaRupeeSign } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { motion } from "framer-motion";

const SubsidyAbout = () => {
  return (
    <section className="relative py-16 px-5 bg-customGreen1 rounded-full">
      {/* Wavy Background */}
      <div className="absolute inset-0 w-full h-full bg-opacity-10 rounded-lg bg-gradient-to-b from-white via-green-200 to-white z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold text-customGreen5">
          Government Solar Subsidy
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          PM Surya Ghar Muft Bijli Yojana
        </p>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card List */}
        {[
          {
            icon: <FaSolarPanel className="text-3xl" />,
            title: "Solar Panel Installation",
            desc: "Get financial support for installing solar panels at home.",
          },
          {
            icon: <FaRupeeSign className="text-3xl" />,
            title: "Subsidy Benefits",
            desc: "Significant reductions in solar installation costs.",
          },
          {
            icon: <MdOutlineElectricBolt className="text-3xl" />,
            title: "Free Electricity",
            desc: "Generate your own electricity and reduce energy bills.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white z-50 p-8 rounded-2xl shadow-lg border group border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-customGreen5"
          >
            <div className="absolute inset-0 bg-customGreen1 transform scale-0 rounded-2xl transition-transform -z-10 duration-500 ease-in-out group-hover:scale-100"></div>

            {/* Icon */}
            <div className="absolute top-4 left-4 bg-customGreen text-white p-3 rounded-full shadow-md">
              {item.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-customGreen5 group-hover:text-white mt-12 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-white transition-colors duration-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SubsidyAbout;
