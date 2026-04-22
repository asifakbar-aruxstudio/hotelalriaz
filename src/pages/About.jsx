import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaAward, FaClock, FaConciergeBell } from "react-icons/fa";

const aboutImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80";

const teamImages = [
  {
    name: "Ahmed Riaz",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sarah Ahmed",
    role: "General Manager",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chef Mohammad",
    role: "Executive Chef",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=400&q=80"
  }
];

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "150+", label: "Luxury Rooms" },
  { number: "50K+", label: "Happy Guests" },
  { number: "25+", label: "Award Wins" }
];

const facilities = [
  { icon: FaConciergeBell, name: "24/7 Concierge" },
  { icon: FaClock, name: "Room Service" },
  { icon: FaAward, name: "Fine Dining" },
  { icon: FaStar, name: "Luxury Spa" }
];

function About() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Al Riaz Hotel"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative text-center px-4 sm:px-6">
          <p className="text-[#0d9488] text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 fade-in font-medium">Our Story</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold slide-up px-4">
            About <span className="text-gradient">Al Riaz</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg max-w-xl mx-auto text-white/80 font-light px-4">
            A legacy of luxury hospitality in the heart of Larkana
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-full h-full border border-[#0d9488]/20"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Room"
                className="w-full h-[280px] sm:h-[350px] lg:h-[550px] object-cover shadow-2xl relative"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">Welcome to Al Riaz</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0a0a0a] mb-4 sm:mb-6">
                Where <span className="text-gradient">Luxury</span> Meets Legacy
              </h2>

              <p className="text-[#6b6b6b] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
                Al Riaz Hotel Larkana has been a beacon of refined hospitality since our inception. 
                We take pride in offering our guests an unparalleled experience that combines modern 
                luxury with traditional warmth.
              </p>

              <p className="text-[#6b6b6b] leading-relaxed mb-8 sm:mb-10 font-light text-sm sm:text-base">
                Our commitment to excellence is evident in every aspect of our hotel, from the 
                meticulously appointed rooms to our world-class amenities and exceptional service.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-8 sm:mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-white border border-[#0d9488]/10 shadow-sm">
                    <p className="text-3xl sm:text-4xl font-display font-semibold text-[#0d9488]">{stat.number}</p>
                    <p className="text-[#6b6b6b] text-xs sm:text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="gold-btn inline-block"
              >
                <span>Plan Your Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">Amenities</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0a0a0a]">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 lg:p-10 bg-[#f8f6f1] border border-transparent hover:border-[#0d9488]/30 transition-all duration-500 text-center"
              >
                <facility.icon className="w-7 sm:w-9 h-7 sm:h-9 mx-auto mb-4 sm:mb-5 text-[#0d9488] group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display font-semibold text-[#0a0a0a] text-sm sm:text-base mb-2">{facility.name}</h3>
                <p className="text-[#6b6b6b] text-xs sm:text-sm font-light">Experience premium service</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">Our Team</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0a0a0a]">
              Meet the <span className="text-gradient">People</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {teamImages.map((member, index) => (
              <div
                key={index}
                className="luxury-card p-6 sm:p-8 text-center group"
              >
                <div className="relative mb-6 sm:mb-8 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 sm:w-40 lg:w-44 h-32 sm:h-40 lg:h-44 mx-auto rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#0d9488]/0 group-hover:border-[#0d9488]/40 transition-all duration-500"></div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-semibold text-[#0a0a0a]">
                  {member.name}
                </h3>
                <p className="text-[#0d9488] text-xs tracking-[0.15em] uppercase mt-2 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">Location</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0a0a0a]">
              Find <span className="text-gradient">Us</span>
            </h2>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              title="Hotel Location"
              src="https://maps.google.com/maps?q=Larkana%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
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
            Experience <span className="text-gradient">Luxury</span> Today
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Book your stay with us and discover why Al Riaz Hotel is the preferred choice 
            for discerning travelers
          </p>
          <Link
            to="/rooms"
            className="gold-btn inline-block"
          >
            <span>Book Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;