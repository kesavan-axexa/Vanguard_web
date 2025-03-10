import { motion } from "framer-motion";

export default function WhyGoSolar() {
  return (
    <div className="relative py-16 px-6 lg:px-12  text-center">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-transparent blur-3xl" />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-customGreen  mb-2">
          Why Go Solar?
        </h2>
        <p className="text-lg text-gray-600 ">
          Harness the power of the sun for savings.
        </p>
      </div>

      {/* Benefits List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-8"
      >
        {[
          {
            icon: "🌞",
            title: "Save on Electricity Bills",
            desc: "Reduce your power costs significantly.",
          },
          {
            icon: "🌍",
            title: "Eco-Friendly & Sustainable",
            desc: "Lower carbon footprint & contribute to a cleaner planet.",
          },
          {
            icon: "⚡",
            title: "Reliable & Efficient",
            desc: "Enjoy uninterrupted power supply with advanced technology.",
          },
          {
            icon: "🏡",
            title: "Increase Property Value",
            desc: "Solar installations boost real estate worth.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="relative flex items-center p-6 rounded-xl shadow-xl bg-white/30 d backdrop-blur-lg border border-gray-200/40  transition-all duration-300 hover:shadow-2xl hover:border-green-500/50 cursor-pointer mb-5"
          >
            {/* Elegant Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-100 blur-lg"></div>

            {/* Icon */}
            <div className="text-4xl p-3 bg-white/50 rounded-lg shadow-md">
              {item.icon}
            </div>

            {/* Text Content */}
            <div className="ml-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-700/20 to-transparent blur-3xl" />
    </div>
  );
}
