import React from "react";
import { FaWifi, FaParking, FaSwimmingPool, FaDumbbell } from "react-icons/fa";
import { MdRoomService, MdLocalLaundryService } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Free WiFi",
    icon: <FaWifi size={40} />,
    desc: "High-speed internet available in all rooms and public areas."
  },
  {
    title: "Room Service",
    icon: <MdRoomService size={40} />,
    desc: "24/7 room service for food, drinks, and special requests."
  },
  {
    title: "Parking",
    icon: <FaParking size={40} />,
    desc: "Secure parking space available for all hotel guests."
  },
  {
    title: "Restaurant",
    icon: <IoRestaurant size={40} />,
    desc: "Enjoy delicious meals prepared by our professional chefs."
  },
  {
    title: "Swimming Pool",
    icon: <FaSwimmingPool size={40} />,
    desc: "Relax and enjoy our clean and luxurious swimming pool."
  },
  {
    title: "Gym",
    icon: <FaDumbbell size={40} />,
    desc: "Fully equipped gym for your daily fitness routine."
  },
  {
    title: "Laundry",
    icon: <MdLocalLaundryService size={40} />,
    desc: "Fast and professional laundry service for guests."
  }
];

function Services() {
  return (
    <div className="font-sans">

      {/* HERO SECTION */}

      <section className="relative h-[380px] flex items-center justify-center text-white">

        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <div className="relative text-center px-6">

          <h1 className="text-5xl font-extrabold">
            Our Services
          </h1>

          <p className="mt-4 text-lg">
            Enjoy luxury services during your stay
          </p>

        </div>

      </section>


      {/* SERVICES GRID */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300"
            >

              <div className="text-blue-700 flex justify-center mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Luxury?
        </h2>

        <p className="mb-6">
          Book your stay at Al Riaz Hotel today
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

export default Services;