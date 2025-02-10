import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is MNRE?",
    answer:
      "The Ministry of New and Renewable Energy (MNRE), Government of India, is the central authority responsible for promoting and developing clean energy solutions, including solar, wind, and hydropower.",
  },
  {
    question: "How is the subsidy credited?",
    answer: "The subsidy amount is typically transferred directly to the beneficiary’s bank account.",
  },
  {
    question: "How much space is required for a 1 kW system?",
    answer: "Approximately 80 to 100 sq. ft. of shadow-free rooftop space is needed.",
  },
  {
    question: "What is a Grid-Connected Solar Rooftop System?",
    answer:
      "A Grid-Connected Solar System allows your solar panels to feed electricity directly into the power grid. This system lowers electricity costs and allows homeowners to earn credits through net metering tariffs.",
  },
  {
    question: "How much electricity can a rooftop solar system generate?",
    answer: "A 1 kW system typically produces 4–5 units of electricity per day, depending on sunlight conditions.",
  },
//   {
//     question: "Why Choose Vanguard Solar?",
//     answer:
//       "At Vanguard Solar, we help you maximize your benefits under government schemes like PM Surya Ghar Muft Bijli Yojana. With 50+ installations every month, we provide trusted, certified, and affordable solar solutions tailored to your needs.",
//   },
  {
    question: "What type of solar panels do you use?",
    answer:
      "At Vanguard Solar, we currently use N-Type TOPCon panels for their higher efficiency and durability. We continuously upgrade to the latest technology to ensure maximum performance.",
  },
];

const SubsidyFAQ = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="px-4 md:px-10 md:my-32 my-12 bg-white text-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-customGreen5 max-w-2xl">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full mt-2.5   cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <h3 className="md:text-xl text-base font-semibold text-neutral-700">{faq.question}</h3>
                <div
                  className={`transition-transform duration-300 ${expanded[index] ? "rotate-180" : ""}`}
                >
                  {expanded[index] ? (
                    <FaChevronUp className="text-customGreen5" />
                  ) : (
                    <FaChevronDown className="text-customGreen5" />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded[index] ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600  text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubsidyFAQ;
