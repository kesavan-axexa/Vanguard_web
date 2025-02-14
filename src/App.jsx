import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from "./pages/About/AboutIndex";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import CallToAction from "./components/Shared/CallToAction";
import ServicesIndex from "./pages/Services/ServicesIndex";
import SolarSubsidyIndex from "./pages/SolarSubsidy/SolarSubsidyIndex";
import ContactUsIndex from "./pages/ContactUs/ContactUsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/GetStarted/Form";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/solar-subsidy" element={<SolarSubsidyIndex />} />
        <Route path="/contact" element={<ContactUsIndex />} />
        <Route path="/contact-with-vanguard" element={<Form />} />
      </Routes>
      {location.pathname !== "/contact" && (
        <CallToAction whatsapp="9994796006" />
      )}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
