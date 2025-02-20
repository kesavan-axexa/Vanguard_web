import ContactPage from "@/components/ContactUs/ContactForm";
import ContactUsHero from "@/components/ContactUs/ContactHero";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsLocation from "@/components/ContactUs/ContactUsLocation";
import React from "react";

const ContactUsIndex = () => {
  return (
    <div>
      <ContactUsHero />
      <ContactPage />
      <ContactUsLocation />
      {/* <ContactUsForm /> */}
    </div>
  );
};

export default ContactUsIndex;
