import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="relative text-center px-6">
          <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4 fade-in">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Contact <span className="text-[#b8860b]">Us</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 shadow-2xl">
              <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Send a Message</p>
              <h2 className="text-3xl font-display font-semibold text-[#1a1a1a] mb-8">
                We'd Love to <span className="text-[#b8860b]">Hear</span> From You
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#b8860b] transition-colors bg-[#faf8f5]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#b8860b] transition-colors bg-[#faf8f5]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#b8860b] transition-colors bg-[#faf8f5]"
                  />
                </div>

                <div>
                  <select className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#b8860b] transition-colors bg-[#faf8f5] text-[#666]">
                    <option value="">Select Subject</option>
                    <option value="booking">Room Booking Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#b8860b] transition-colors bg-[#faf8f5] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-4 font-medium tracking-wider uppercase text-sm hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Main Info Cards */}
              <div className="grid gap-6">
                <div className="bg-white p-8 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#b8860b]/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#b8860b] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a1a] text-lg mb-2">Address</h4>
                    <p className="text-[#666]">
                      Al Riaz Hotel<br />
                      Main Market Road, Larkana<br />
                      Sindh, Pakistan
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#b8860b]/10 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-[#b8860b] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a1a] text-lg mb-2">Phone</h4>
                    <p className="text-[#666]">+92 300 1234567</p>
                    <p className="text-[#666]">+92 74 1234567</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#b8860b]/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#b8860b] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a1a] text-lg mb-2">Email</h4>
                    <p className="text-[#666]">info@alriazhotel.com</p>
                    <p className="text-[#666]">reservations@alriazhotel.com</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#b8860b]/10 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-[#b8860b] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a1a] text-lg mb-2">Hours</h4>
                    <p className="text-[#666]">Front Desk: 24/7</p>
                    <p className="text-[#666]">Restaurant: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#1a1a1a] p-8">
                <h4 className="font-display font-semibold text-white text-lg mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              title="Hotel Location"
              src="https://maps.google.com/maps?q=Larkana%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;