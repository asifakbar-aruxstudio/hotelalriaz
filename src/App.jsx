import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";  
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Services from "./pages/Services.jsx";
import TermsConditions from "./pages/TermsCondations.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;