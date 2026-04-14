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
        <div className="hero-overlay"></div>
        <div className="relative text-center px-6">
          <p className="text-[#c9a962] text-sm tracking-[0.35em] uppercase mb-5 fade-in font-medium">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80 font-light">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
              <p className="text-[#c9a962] text-sm tracking-[0.35em] uppercase mb-5 font-medium">Send a Message</p>
              <h2 className="text-3xl font-display font-semibold text-[#0a0a0a] mb-10">
                We'd Love to <span className="text-gradient">Hear</span> From You
              </h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-field"
                  />
                </div>

                <div>
                  <select className="input-field text-[#6b6b6b]">
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
                    className="input-field resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a0a0a] text-white py-4 font-semibold tracking-[0.12em] uppercase text-xs hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Main Info Cards */}
              <div className="grid gap-5">
                <div className="bg-white p-8 shadow-sm flex items-start gap-6 hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#c9a962] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#0a0a0a] text-lg mb-2">Address</h4>
                    <p className="text-[#6b6b6b] font-light">
                      Al Riaz Hotel<br />
                      Main Market Road, Larkana<br />
                      Sindh, Pakistan
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-sm flex items-start gap-6 hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-[#c9a962] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#0a0a0a] text-lg mb-2">Phone</h4>
                    <p className="text-[#6b6b6b] font-light">+92 300 1234567</p>
                    <p className="text-[#6b6b6b] font-light">+92 74 1234567</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-sm flex items-start gap-6 hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#c9a962] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#0a0a0a] text-lg mb-2">Email</h4>
                    <p className="text-[#6b6b6b] font-light">info@alriazhotel.com</p>
                    <p className="text-[#6b6b6b] font-light">reservations@alriazhotel.com</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-sm flex items-start gap-6 hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-[#c9a962] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#0a0a0a] text-lg mb-2">Hours</h4>
                    <p className="text-[#6b6b6b] font-light">Front Desk: 24/7</p>
                    <p className="text-[#6b6b6b] font-light">Restaurant: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#0a0a0a] p-10">
                <h4 className="font-display font-semibold text-white text-lg mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-32 px-6">
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