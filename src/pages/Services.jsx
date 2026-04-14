import React from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaParking, FaSwimmingPool, FaDumbbell, FaSpa, FaConciergeBell } from "react-icons/fa";
import { MdRoomService, MdLocalLaundryService, MdRestaurant, MdEventAvailable } from "react-icons/md";

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
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Hotel Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="relative text-center px-6">
          <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4 fade-in">Experience</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Our <span className="text-[#b8860b]">Services</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80">
            World-class amenities for an unforgettable stay
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              Exceptional <span className="text-[#b8860b]">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="luxury-card p-8 text-center group hover:bg-[#1a1a1a] hover:text-white transition-all duration-500"
              >
                <div className="text-[#b8860b] flex justify-center mb-6 group-hover:text-[#b8860b] transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-xl font-display font-semibold text-[#1a1a1a] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#666] text-sm group-hover:text-white/70 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Experience <span className="text-[#b8860b]">True</span> Luxury
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let us pamper you with our world-class services during your stay at Al Riaz Hotel
          </p>
          <Link
            to="/rooms"
            className="inline-block px-10 py-4 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;