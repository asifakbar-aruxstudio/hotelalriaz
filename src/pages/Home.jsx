import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { FaSwimmer, FaWifi, FaUtensils, FaDumbbell, FaSpa, FaParking, FaStar, FaQuoteLeft } from "react-icons/fa";

const heroImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80";

const featuredRooms = [
  {
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    title: "Deluxe Suite",
    desc: "Elegant suite featuring premium amenities, king-size bed, and stunning city views.",
    price: "$150"
  },
  {
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    title: "Executive Suite",
    desc: "Spacious living area, luxurious furnishings, and personalized concierge service.",
    price: "$220"
  },
  {
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    title: "Presidential Suite",
    desc: "The ultimate in luxury with private terrace, butler service, and panoramic views.",
    price: "$350"
  }
];

const facilities = [
  { icon: FaSwimmer, name: "Infinity Pool" },
  { icon: FaWifi, name: "High-Speed WiFi" },
  { icon: FaUtensils, name: "Fine Dining" },
  { icon: FaDumbbell, name: "Fitness Center" },
  { icon: FaSpa, name: "Luxury Spa" },
  { icon: FaParking, name: "Valet Parking" }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=800&q=80"
];

const testimonials = [
  {
    name: "James Morrison",
    location: "London, UK",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review: "An exceptional experience from check-in to departure. The attention to detail and luxury amenities exceeded all expectations.",
    rating: 5
  },
  {
    name: "Fatima Al-Rashid",
    location: "Dubai, UAE",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review: "The most luxurious hotel experience I've ever had. The staff's hospitality is truly world-class.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    review: "Perfect blend of modern luxury and traditional elegance. The rooms are breathtaking and service impeccable.",
    rating: 5
  }
];

function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImage} alt="Luxury Hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 fade-in">
              Welcome to Al Riaz Hotel
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 slide-up" style={{textShadow: '0 4px 30px rgba(0,0,0,0.3)'}}>
              Experience <span className="text-[#b8860b]">Elegance</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 mb-10 max-w-2xl mx-auto leading-relaxed">
              Where timeless luxury meets warm hospitality in the heart of Larkana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in" style={{animationDelay: '0.3s'}}>
              <Link 
                to="/rooms" 
                className="px-8 py-3 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
              >
                View Rooms
              </Link>
              <button 
                onClick={() => setOpenModal(true)}
                className="px-8 py-3 border border-white text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                Book Your Stay
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-[#1a1a1a] mb-2">Reserve Your Experience</h2>
              <p className="text-[#666] mb-6">Book your stay at the best rates guaranteed</p>
              <form className="grid md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#b8860b] transition-colors" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#b8860b] transition-colors" 
                />
                <input 
                  type="date" 
                  className="border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#b8860b] transition-colors" 
                />
              </form>
            </div>
            <div className="md:col-span-2 bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-center items-center">
              <p className="text-white/60 text-sm tracking-wider uppercase mb-2">Starting from</p>
              <p className="text-4xl font-display font-bold text-[#b8860b] mb-4">$120</p>
              <button 
                onClick={() => setOpenModal(true)}
                className="px-8 py-3 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300 w-full"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#b8860b]/30"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel Room"
                className="w-full h-[500px] object-cover shadow-2xl relative"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#b8860b] p-8 max-w-xs hidden lg:block">
                <p className="text-[#1a1a1a] font-display text-4xl font-bold mb-2">15+</p>
                <p className="text-[#1a1a1a]/70 text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <div>
              <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">About Our Hotel</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a] mb-6">
                A Legacy of <span className="text-[#b8860b]">Luxury</span>
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Al Riaz Hotel Larkana stands as a beacon of refined hospitality, offering discerning guests an unparalleled blend of modern luxury and traditional warmth. Our commitment to excellence is reflected in every detail, from meticulously appointed rooms to world-class amenities.
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                Whether you're traveling for business or leisure, our dedicated team ensures your stay exceeds expectations, creating memories that last a lifetime.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-display font-bold text-[#b8860b]">150+</p>
                  <p className="text-[#666] text-sm">Luxury Rooms</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-[#b8860b]">98%</p>
                  <p className="text-[#666] text-sm">Guest Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-[#b8860b]">24/7</p>
                  <p className="text-[#666] text-sm">Concierge</p>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center text-[#b8860b] font-medium tracking-wider uppercase text-sm hover:text-[#9a7b3f] transition-colors"
              >
                Discover More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              Refined <span className="text-[#b8860b]">Rooms</span> & Suites
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <div key={index} className="luxury-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.img} 
                    alt={room.title} 
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-semibold text-[#1a1a1a] mb-3">{room.title}</h3>
                  <p className="text-[#666] text-sm mb-4 leading-relaxed">{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#b8860b] font-display font-bold text-xl">
                      {room.price}<span className="text-[#666] text-sm font-normal"> / night</span>
                    </p>
                    <button 
                      onClick={() => setOpenModal(true)}
                      className="text-[#b8860b] text-sm font-medium tracking-wider uppercase hover:text-[#9a7b3f] transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/rooms"
              className="inline-block px-10 py-4 border-2 border-[#b8860b] text-[#b8860b] font-medium tracking-wider uppercase text-sm hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-all duration-300"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Amenities</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              World-Class <span className="text-[#b8860b]">Facilities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="group p-8 border border-white/10 hover:border-[#b8860b] transition-all duration-500 text-center"
              >
                <facility.icon className="w-8 h-8 mx-auto mb-4 text-[#b8860b] group-hover:scale-110 transition-transform" />
                <p className="text-sm tracking-wider uppercase">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              Our <span className="text-[#b8860b]">Spaces</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden group ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt="Hotel Gallery" 
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'md:h-full' : 'h-64 md:h-80'
                  }`} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              What Our <span className="text-[#b8860b]">Guests</span> Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-[#faf8f5] p-10 relative"
              >
                <FaQuoteLeft className="text-[#b8860b]/20 text-4xl absolute top-6 left-6" />
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-4 h-4 ${i < t.rating ? 'text-[#b8860b]' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-[#666] leading-relaxed mb-6 italic">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.photo} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-display font-semibold text-[#1a1a1a]">{t.name}</p>
                    <p className="text-[#666] text-sm">{t.location}</p>
                  </div>
                </div>
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
          <div className="absolute inset-0 bg-[#1a1a1a]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Begin Your <span className="text-[#b8860b]">Extraordinary</span> Journey
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Reserve your stay at Al Riaz Hotel and discover the pinnacle of luxury hospitality in Larkana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/rooms" 
              className="px-10 py-4 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
            >
              Book Your Stay
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border border-white text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Home;