import React from "react";
import { Link } from "react-router-dom";
import { FaSwimmer, FaWifi, FaUtensils, FaDumbbell, FaSpa, FaParking, FaStar, FaQuoteLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+923153933660";

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
  const handleWhatsAppBook = (roomTitle = null) => {
    const message = roomTitle 
      ? `Hello Al Riaz Hotel, I would like to book the ${roomTitle} for my stay. Please confirm availability.`
      : `Hello Al Riaz Hotel, I would like to book a room at your hotel. Please share available options and rates.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImage} alt="Luxury Hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-5xl">
            <p className="text-white/70 text-sm tracking-[0.35em] uppercase mb-6 fade-in font-medium">
              Welcome to Al Riaz Hotel
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-white mb-8 slide-up" style={{textShadow: '0 4px 40px rgba(0,0,0,0.4)'}}>
              Experience <span className="text-gradient">Elegance</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-4 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Where timeless luxury meets warm hospitality in the heart of Larkana
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center fade-in-up" style={{animationDelay: '0.2s'}}>
              <Link 
                to="/rooms" 
                className="gold-btn"
              >
                <span>View Rooms</span>
              </Link>
              <button 
                onClick={() => handleWhatsAppBook()}
                className="dark-btn flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> Book Your Stay
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3">Scroll</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="relative -mt-24 z-20 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-2xl font-display font-semibold text-[#0a0a0a] mb-2">Reserve Your Experience</h2>
              <p className="text-[#6b6b6b] mb-6 font-light">Book your stay at the best rates guaranteed</p>
              <form className="grid md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="input-field" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="input-field" 
                />
                <input 
                  type="date" 
                  className="input-field" 
                />
              </form>
            </div>
            <div className="md:col-span-2 bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center items-center">
              <p className="text-white/50 text-sm tracking-wider uppercase mb-2 font-medium">Starting from</p>
              <p className="text-5xl font-display font-semibold text-[#0d9488] mb-5">$120</p>
              <button 
                onClick={() => handleWhatsAppBook()}
                className="gold-btn w-full flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> <span>Check Availability</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border border-[#0d9488]/20"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel Room"
                className="w-full h-[550px] object-cover shadow-2xl relative"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#0d9488] p-10 max-w-xs hidden lg:block">
                <p className="text-[#0a0a0a] font-display text-5xl font-semibold mb-2">15+</p>
                <p className="text-[#0a0a0a]/70 text-xs uppercase tracking-wider font-medium">Years of Excellence</p>
              </div>
            </div>
            <div>
              <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 font-medium">About Our Hotel</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0a0a0a] mb-6">
                A Legacy of <span className="text-gradient">Luxury</span>
              </h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-6 font-light text-base">
                Al Riaz Hotel Larkana stands as a beacon of refined hospitality, offering discerning guests an unparalleled blend of modern luxury and traditional warmth. Our commitment to excellence is reflected in every detail, from meticulously appointed rooms to world-class amenities.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-10 font-light text-base">
                Whether you're traveling for business or leisure, our dedicated team ensures your stay exceeds expectations, creating memories that last a lifetime.
              </p>
              <div className="flex gap-12 mb-10">
                <div>
                  <p className="text-4xl font-display font-semibold text-[#0d9488]">150+</p>
                  <p className="text-[#6b6b6b] text-sm mt-1">Luxury Rooms</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-semibold text-[#0d9488]">98%</p>
                  <p className="text-[#6b6b6b] text-sm mt-1">Guest Satisfaction</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-semibold text-[#0d9488]">24/7</p>
                  <p className="text-[#6b6b6b] text-sm mt-1">Concierge</p>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center text-[#0a0a0a] font-semibold tracking-[0.08em] uppercase text-sm hover:text-[#0d9488] transition-colors group"
              >
                Discover More
                <FaArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 font-medium">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0a0a0a]">
              Refined <span className="text-gradient">Rooms</span> & Suites
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <div key={index} className="luxury-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.img} 
                    alt={room.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-display font-semibold text-[#0a0a0a] mb-3">{room.title}</h3>
                  <p className="text-[#6b6b6b] text-sm mb-6 leading-relaxed font-light">{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#0d9488] font-display font-semibold text-2xl">
                      {room.price}<span className="text-[#6b6b6b] text-sm font-normal ml-1">/ night</span>
                    </p>
                    <button 
                      onClick={() => handleWhatsAppBook(room.title)}
                      className="text-[#25D366] text-xs font-semibold tracking-[0.08em] uppercase hover:text-[#1da851] transition-colors flex items-center gap-1"
                    >
                      <FaWhatsapp className="w-3 h-3" /> Book via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link 
              to="/rooms"
              className="inline-flex items-center px-10 py-4 border-2 border-[#0d9488] text-[#0d9488] font-semibold tracking-[0.08em] uppercase text-sm hover:bg-[#0d9488] hover:text-[#0a0a0a] transition-all duration-300 group"
            >
              View All Rooms
              <FaArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 font-medium">Amenities</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="group p-10 border border-white/5 hover:border-[#0d9488]/50 bg-[#0a0a0a]/80 hover:bg-[#0f0f0f] transition-all duration-500 text-center"
              >
                <facility.icon className="w-7 h-7 mx-auto mb-5 text-[#0d9488] transform group-hover:scale-110 transition-transform duration-500" />
                <p className="text-xs tracking-[0.1em] uppercase font-medium text-white/70 group-hover:text-white transition-colors">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 font-medium">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0a0a0a]">
              Our <span className="text-gradient">Spaces</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden group ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt="Hotel Gallery" 
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'md:h-full' : 'h-72 md:h-64'
                  }`} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-xs tracking-[0.2em] uppercase transition-opacity duration-500">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 font-medium">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0a0a0a]">
              What Our <span className="text-gradient">Guests</span> Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-[#f8f6f1] p-10 relative"
              >
                <FaQuoteLeft className="text-[#0d9488]/15 text-5xl absolute top-8 left-8" />
                <div className="flex gap-1 mb-6 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < t.rating ? 'text-[#0d9488]' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p className="text-[#6b6b6b] leading-relaxed mb-8 italic font-light">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.photo} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-display font-semibold text-[#0a0a0a]">{t.name}</p>
                    <p className="text-[#6b6b6b] text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8">
            Begin Your <span className="text-gradient">Extraordinary</span> Journey
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Reserve your stay at Al Riaz Hotel and discover the pinnacle of luxury hospitality in Larkana
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/rooms" 
              className="gold-btn"
            >
              <span>Book Your Stay</span>
            </Link>
            <Link 
              to="/contact"
              className="dark-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;