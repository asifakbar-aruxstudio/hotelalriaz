import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-3xl font-display font-bold tracking-wider">
                AL<span className="text-[#b8860b]">RIAZ</span>
              </h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience the pinnacle of luxury hospitality at Al Riaz Hotel Larkana. 
              Where every moment is crafted with elegance and every stay becomes a cherished memory.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-[#b8860b]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">Home</Link></li>
              <li><Link to="/rooms" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">Services</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-[#b8860b] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-[#b8860b]">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-white/60 text-sm">24/7 Room Service</span></li>
              <li><span className="text-white/60 text-sm">Fine Dining Restaurant</span></li>
              <li><span className="text-white/60 text-sm">Luxury Spa & Wellness</span></li>
              <li><span className="text-white/60 text-sm">Conference Facilities</span></li>
              <li><span className="text-white/60 text-sm">Airport Transfer</span></li>
              <li><span className="text-white/60 text-sm">Concierge Desk</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-[#b8860b]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#b8860b] mt-1" />
                <span className="text-white/60 text-sm">
                  Al Riaz Hotel<br />
                  Larkana, Sindh<br />
                  Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#b8860b]" />
                <span className="text-white/60 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#b8860b]" />
                <span className="text-white/60 text-sm">info@alriazhotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-xl">
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-4 text-[#b8860b]">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe to receive exclusive offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors"
              />
              <button className="px-8 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Al Riaz Hotel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/TermsConditions" className="text-white/40 text-sm hover:text-[#b8860b] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/40 text-sm">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;