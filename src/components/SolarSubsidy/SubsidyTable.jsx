import { motion } from "framer-motion";

export default function SubsidyTable() {
  return (
    <div className="relative flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-12 md:mt-20 mt-10 text-center bg-green-50 ">
      {/* Glowing Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-transparent blur-3xl" /> */}

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-customGreen5 mb-2">
          What’s the Benefit?
        </h2>
        <p className="text-base sm:text-lg  text-gray-600">
          With this scheme, eligible households can receive up to ₹78,000 subsidy on
          solar panel installations, making clean energy more affordable.
        </p>
      </motion.div>

      {/* Tables Grid Layout */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {/* Government Subsidy Breakdown Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="rounded-lg shadow-lg bg-white p-4 overflow-x-auto"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-customGreen mb-4">
            Government Subsidy Breakdown
          </h3>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
            <table className="w-full min-w-[600px] border border-gray-300">
              <thead className="bg-customGreen text-white">
                <tr>
                  <th className="px-4 py-3 border">Segment</th>
                  <th className="px-4 py-3 border">Solar Project Size</th>
                  <th className="px-4 py-3 border">Government Subsidy (₹)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[   
                  { segment: "Individual House", size: "1-2 kW", subsidy: "₹30,000 - ₹60,000" },
                  { segment: "Individual House", size: "2-3 kW", subsidy: "₹60,000 - ₹78,000" },
                  { segment: "Individual House", size: "3 kW and above", subsidy: "₹78,000" },
                  { segment: "Group Housing Societies", size: "1-500 kW", subsidy: "₹18,000/kW" },
                ].map((row, index) => (
                  <tr key={index} className="border">
                    <td className="px-4 py-3 text-center border">{row.segment}</td>
                    <td className="px-4 py-3 text-center border">{row.size}</td>
                    <td className="px-4 py-3 text-center border">{row.subsidy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Estimated Installation Costs Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="rounded-lg shadow-lg bg-white p-4 overflow-x-auto"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-customGreen mb-4">
            Estimated Installation Costs
          </h3>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
            <table className="w-full min-w-[350px] border border-gray-300">
              <thead className="bg-customGreen text-white">
                <tr>
                  <th className="px-4 py-3 border">System Size</th>
                  <th className="px-4 py-3 border">Estimated Cost (₹)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[   
                  { size: "1 kW", cost: "₹90,000 - ₹1 lakh" },
                  { size: "2 kW", cost: "₹1.3 lakh - ₹1.5 lakh" },
                  { size: "3 kW", cost: "₹1.85 lakh - ₹2.10 lakh" },
                ].map((row, index) => (
                  <tr key={index} className="border">
                    <td className="px-4 py-3 text-center border">{row.size}</td>
                    <td className="px-4 py-3 text-center border">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
