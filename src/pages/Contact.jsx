import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="font-sans">

      {/* Hero Section */}

      <section className="relative h-[350px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <h1 className="relative text-5xl font-extrabold">
          Contact Us
        </h1>

      </section>


      {/* CONTACT SECTION */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}

          <div className="bg-white shadow-xl rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>


          {/* CONTACT INFO */}

          <div className="space-y-6">

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaPhoneAlt className="text-blue-700 text-xl" />

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>

            </div>


            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaEnvelope className="text-blue-700 text-xl" />

              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">info@alriazhotel.com</p>
              </div>

            </div>


            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaMapMarkerAlt className="text-blue-700 text-xl" />

              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  Al Riaz Hotel, Larkana, Sindh, Pakistan
                </p>
              </div>

            </div>


            {/* SOCIAL MEDIA */}

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h4 className="font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-4 text-2xl text-blue-700">

                <FaFacebook className="cursor-pointer hover:text-purple-700 transition" />
                <FaInstagram className="cursor-pointer hover:text-purple-700 transition" />
                <FaTwitter className="cursor-pointer hover:text-purple-700 transition" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* GOOGLE MAP */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="Hotel Location"
            src="https://maps.google.com/maps?q=Larkana%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;