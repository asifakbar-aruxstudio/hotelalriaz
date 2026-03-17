import React from "react";
import { Link } from "react-router-dom";

const aboutImage =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80";

const teamImages = [
  {
    name: "Hotel Owner",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Reception Manager",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Head Chef",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=400&q=80"
  }
];

function About() {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="relative h-[420px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>
        </div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            About Al Riaz Hotel
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Experience comfort, luxury and premium hospitality in the heart of Larkana.
          </p>
        </div>
      </section>

      {/* HOTEL INTRO */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
          alt="Hotel Room"
          className="rounded-xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Welcome to Al Riaz Hotel
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Al Riaz Hotel Larkana is known for providing premium hospitality,
            comfortable accommodation and modern facilities for guests traveling
            for both business and leisure.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our hotel offers luxurious rooms, professional staff, delicious
            dining and a peaceful environment where guests can relax and enjoy
            their stay with world-class service.
          </p>
        </div>

      </section>

      {/* HOTEL HISTORY */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Our History
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Al Riaz Hotel was established with the vision of providing
            high-quality hospitality services in Larkana. Over the years,
            the hotel has grown into one of the trusted destinations for
            travelers looking for comfort, safety and excellent service.
            Our commitment to quality and guest satisfaction has helped
            us build a strong reputation among local and international visitors.
          </p>

        </div>

      </section>

      {/* MISSION VISION */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow-xl p-8 rounded-xl hover:scale-105 transition">

          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-700">
            To provide exceptional hospitality services and comfortable
            accommodation that exceeds the expectations of every guest.
          </p>

        </div>

        <div className="bg-white shadow-xl p-8 rounded-xl hover:scale-105 transition">

          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            Our Vision
          </h3>

          <p className="text-gray-700">
            To become one of the leading hotels in the region known for
            luxury service, quality hospitality and memorable guest experiences.
          </p>

        </div>

      </section>

      {/* FACILITIES */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Hotel Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {[
              "Luxury Rooms",
              "Free WiFi",
              "Restaurant",
              "Parking",
              "24/7 Room Service",
              "Conference Hall"
            ].map((facility, index) => (

              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg text-purple-700">
                  {facility}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {teamImages.map((member, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition"
            >

              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-purple-700">
                {member.name}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* AWARDS */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Awards & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Best Hospitality Service 2023",
              "Top Rated Hotel in Larkana",
              "Guest Choice Award"
            ].map((award, i) => (

              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-purple-700 font-semibold">
                  {award}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* LOCATION */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Location
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="Hotel Location"
            src="https://maps.google.com/maps?q=Larkana%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Experience Luxury With Us
        </h2>

        <p className="mb-6">
          Book your stay today and enjoy premium hospitality
        </p>

        <Link
          to="/booking"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Book Now
        </Link>

      </section>

    </div>
  );
}

export default About;