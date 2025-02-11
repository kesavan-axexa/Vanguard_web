import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const CallToAction = ({ whatsapp }) => {
  const [rippleClass, setRippleClass] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleRippleEffect = (e) => {
    setRippleClass("ripple");
    setTimeout(() => setRippleClass(""), 600);
  };

  const handleWhatsAppClick = () => {
    if (whatsapp) {
      const message = encodeURIComponent(
        "Hello, I’m interested in exploring Vanguard Solar's solar energy solutions. Could you please provide more information about your services and help me schedule a consultation?"
      );
      window.open(
        `https://api.whatsapp.com/send/?phone=%2B91${whatsapp}&text=${message}&type=phone_number&app_absent=0`,
        "_blank"
      );
    } else {
      alert("WhatsApp number is not available.");
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[1000]">
      {/* Tooltip */}
      {/* {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 bg-black text-white text-sm px-3 py-1 rounded-md shadow-lg"
        >
          Contact Us
        </motion.div>
      )} */}

      {/* WhatsApp Button */}
      <motion.button
        className={`relative bg-customGreen5 text-white p-4 rounded-full shadow-lg ${rippleClass}`}
        onClick={handleWhatsAppClick}
        onMouseDown={handleRippleEffect}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <FaWhatsapp className="h-6 w-6 " />
      </motion.button>

      {/* Ripple Effect */}
      <style>
        {`
          .ripple::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleEffect 0.6s linear;
          }

          @keyframes rippleEffect {
            to {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CallToAction;
