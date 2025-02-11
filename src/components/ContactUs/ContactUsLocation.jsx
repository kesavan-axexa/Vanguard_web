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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5866724403856!2d78.0660949740455!3d11.107873889080514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc6e84f148ef7%3A0xf1c0b6fbd6a91a4e!2sParamathi%20Velur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695285412334"
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
