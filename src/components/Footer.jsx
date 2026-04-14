import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-3xl font-display font-semibold tracking-[0.08em]">
                AL<span className="text-[#c9a962]">RIAZ</span>
              </h2>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
              Experience the pinnacle of luxury hospitality at Al Riaz Hotel Larkana. 
              Where every moment is crafted with elegance and every stay becomes a cherished memory.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300 text-white/60">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300 text-white/60">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300 text-white/60">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase mb-8 text-[#c9a962]">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">Home</Link></li>
              <li><Link to="/rooms" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">Rooms & Suites</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">About Us</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">Services</Link></li>
              <li><Link to="/gallery" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">Gallery</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-[#c9a962] transition-colors text-sm font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase mb-8 text-[#c9a962]">Services</h3>
            <ul className="space-y-4">
              <li><span className="text-white/50 text-sm font-light">24/7 Room Service</span></li>
              <li><span className="text-white/50 text-sm font-light">Fine Dining Restaurant</span></li>
              <li><span className="text-white/50 text-sm font-light">Luxury Spa & Wellness</span></li>
              <li><span className="text-white/50 text-sm font-light">Conference Facilities</span></li>
              <li><span className="text-white/50 text-sm font-light">Airport Transfer</span></li>
              <li><span className="text-white/50 text-sm font-light">Concierge Desk</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase mb-8 text-[#c9a962]">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#c9a962] mt-0.5" size={14} />
                <span className="text-white/50 text-sm font-light leading-relaxed">
                  Al Riaz Hotel<br />
                  Larkana, Sindh<br />
                  Pakistan
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhone className="text-[#c9a962]" size={14} />
                <span className="text-white/50 text-sm font-light">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#c9a962]" size={14} />
                <span className="text-white/50 text-sm font-light">info@alriazhotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="max-w-xl">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-[#c9a962]">Newsletter</h3>
            <p className="text-white/50 text-sm mb-6 font-light">Subscribe to receive exclusive offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors font-light"
              />
              <button className="px-8 py-4 bg-[#c9a962] text-[#0a0a0a] font-semibold tracking-[0.12em] uppercase text-xs hover:bg-[#b89b54] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-light">
            &copy; {new Date().getFullYear()} Al Riaz Hotel. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/TermsConditions" className="text-white/30 text-sm hover:text-[#c9a962] transition-colors font-light">
              Terms & Conditions
            </Link>
            <span className="text-white/30 text-sm font-light cursor-pointer hover:text-[#c9a962] transition-colors">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;