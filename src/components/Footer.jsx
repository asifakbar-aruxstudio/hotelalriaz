import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Al Riaz Hotel</h2>
          <p className="text-gray-200 text-sm md:text-base">
            Experience luxury, comfort, and elegance in the heart of Larkana.
            Book your stay with us and enjoy world-class amenities.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-gray-200 transition">Rooms</Link></li>
            <li><Link to="/booking" className="hover:text-gray-200 transition">Booking</Link></li>
            <li><Link to="/about" className="hover:text-gray-200 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-200">
            <li>📍 Larkana, Sindh, Pakistan</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ info@alriazhotel.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-sm md:text-base">
            <a href="#" className="hover:text-gray-200 transition">Facebook</a>
            <a href="#" className="hover:text-gray-200 transition">Instagram</a>
            <a href="#" className="hover:text-gray-200 transition">Twitter</a>
            <a href="#" className="hover:text-gray-200 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-300 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Al Riaz Hotel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;