import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Rooms", to: "/rooms" },
    { name: "Gallery", to: "/gallery" },
    { name: "Services", to: "/services" },
    { name: "Terms & Conditions", to: "/TermsConditions" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-white shadow-lg text-blue-700"
          : "bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className={`text-2xl font-bold ${scrolled ? "text-blue-700" : "text-white"}`}>
          Al Riaz Hotel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-0 font-semibold">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`px-3 py-2 rounded-lg transition-colors duration-300 ${
                  scrolled
                    ? "hover:bg-blue-600 hover:text-white"
                    : "hover:bg-white hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button Desktop */}
        <Link
          to="/booking"
          className={`hidden md:inline-block ml-4 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            scrolled
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-white text-blue-700 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white transition-all duration-300`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/booking"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2 rounded-lg font-semibold bg-white text-blue-700 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;