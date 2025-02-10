import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from "./pages/About/AboutIndex";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import CallToAction from "./components/Shared/CallToAction";
import ServicesIndex from "./pages/Services/ServicesIndex";
import SolarSubsidyIndex from "./pages/SolarSubsidy/SolarSubsidyIndex";

// const Home = () => <div className="text-center p-10">Welcome to the Landing Page</div>;
// const About = () => <div className="text-center p-10">About Us</div>;
// const Contact = () => <div className="text-center p-10">Contact Us</div>;

// const Navbar = () => (
//   <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-4">
//     <Link to="/" className="hover:text-gray-300">Home</Link>
//     <Link to="/about" className="hover:text-gray-300">About</Link>
//     <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//   </nav>
// );

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/solar-subsidy" element={<SolarSubsidyIndex />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <CallToAction /> */}
      <Footer />
    </Router>
  );
};

export default App;