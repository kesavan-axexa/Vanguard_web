import React from "react";

const ContactUsLocation = () => {
  return (
    <div className="w-full py-20">
      {/* Container for the map and optional text */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Map Section */}
        <div className="border rounded-lg shadow-md overflow-hidden w-full md:max-w-7xl lg:max-w-7xl">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.965253346328!2d78.01370327509355!3d11.11596578905415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd500188cc2d1%3A0x2b4d5982c4da6bd0!2sVanguard%20solar!5e0!3m2!1sen!2sus!4v1739876277717!5m2!1sen!2sus"
            className="w-full h-96"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLocation;
