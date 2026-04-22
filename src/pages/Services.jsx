import React from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaParking, FaSwimmingPool, FaDumbbell, FaSpa, FaConciergeBell } from "react-icons/fa";
import { MdRoomService, MdRestaurant } from "react-icons/md";

const services = [
  {
    title: "High-Speed WiFi",
    icon: <FaWifi size={32} />,
    desc: "Complimentary high-speed internet available throughout the hotel."
  },
  {
    title: "24/7 Room Service",
    icon: <MdRoomService size={32} />,
    desc: "Round-the-clock dining and personalized service in your room."
  },
  {
    title: "Valet Parking",
    icon: <FaParking size={32} />,
    desc: "Secure parking with professional valet service for guests."
  },
  {
    title: "Fine Dining",
    icon: <MdRestaurant size={32} />,
    desc: "Exquisite culinary experiences prepared by master chefs."
  },
  {
    title: "Infinity Pool",
    icon: <FaSwimmingPool size={32} />,
    desc: "Temperature-controlled pool with panoramic city views."
  },
  {
    title: "Fitness Center",
    icon: <FaDumbbell size={32} />,
    desc: "State-of-the-art gym with personalized training sessions."
  },
  {
    title: "Luxury Spa",
    icon: <FaSpa size={32} />,
    desc: "Rejuvenating treatments and therapies for complete wellness."
  },
  {
    title: "Concierge",
    icon: <FaConciergeBell size={32} />,
    desc: "Dedicated assistance for all your travel needs."
  }
];

function Services() {
  return (
    <div className="font-body">
      {/* HERO SECTION */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Hotel Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="relative text-center px-4 sm:px-6">
          <p className="text-[#0d9488] text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 fade-in font-medium">Experience</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold slide-up px-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg max-w-xl mx-auto text-white/80 font-light px-4">
            World-class amenities for an unforgettable stay
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0a0a0a]">
              Exceptional <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="luxury-card p-6 sm:p-8 lg:p-10 text-center group hover:bg-[#0a0a0a] hover:text-white transition-all duration-500"
              >
                <div className="text-[#0d9488] flex justify-center mb-4 sm:mb-6 group-hover:text-[#0d9488] transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-semibold text-[#0a0a0a] group-hover:text-white mb-3 sm:mb-4 transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#6b6b6b] text-sm group-hover:text-white/60 transition-colors font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6 sm:mb-8">
            Experience <span className="text-gradient">True</span> Luxury
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let us pamper you with our world-class services during your stay at Al Riaz Hotel
          </p>
          <Link
            to="/rooms"
            className="gold-btn inline-block"
          >
            <span>Book Your Stay</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;