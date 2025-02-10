import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
export default function JoinSolarMovement() {
  return (
    <div className="relative py-16 px-6 lg:px-12  text-center">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-transparent blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-customGreen "
      >
        Join the Solar Movement!
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
      >
        Whether you are a homeowner, business owner, or entrepreneur, Vanguard
        Solar offers customized solar solutions tailored to your needs. Be a
        part of India’s solar revolution and enjoy free electricity, reduced
        power bills, and a sustainable future.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        {/* Contact Button */}
        <motion.a
  href="tel:+91XXXXXXXXXX"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 text-lg font-semibold text-white bg-customGreen rounded-lg shadow-lg transition-all duration-300 hover:bg-green-700 flex items-center gap-2"
>
  <FaPhoneAlt className="w-5 h-5" /> Contact Us
</motion.a>

        {/* Learn More Button */}
        <motion.a
          href="/solar-solutions"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 text-lg font-semibold text-customGreen border-2 border-customGreen rounded-lg shadow-lg transition-all duration-300 hover:bg-green-700 hover:text-white"
        >
          Learn More
        </motion.a>
      </motion.div>

      {/* Subtle Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-700/20 to-transparent blur-3xl" />
    </div>
  );
}
