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
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Al Riaz Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative text-center px-6">
          <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4 fade-in">Our Story</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            About <span className="text-[#b8860b]">Al Riaz</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80">
            A legacy of luxury hospitality in the heart of Larkana
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#b8860b]/30"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Room"
                className="w-full h-[500px] object-cover shadow-2xl relative"
              />
            </div>

            <div>
              <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Welcome to Al Riaz</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a] mb-6">
                Where <span className="text-[#b8860b]">Luxury</span> Meets Legacy
              </h2>

              <p className="text-[#666] leading-relaxed mb-6">
                Al Riaz Hotel Larkana has been a beacon of refined hospitality since our inception. 
                We take pride in offering our guests an unparalleled experience that combines modern 
                luxury with traditional warmth.
              </p>

              <p className="text-[#666] leading-relaxed mb-8">
                Our commitment to excellence is evident in every aspect of our hotel, from the 
                meticulously appointed rooms to our world-class amenities and exceptional service.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white shadow-md">
                    <p className="text-3xl font-display font-bold text-[#b8860b]">{stat.number}</p>
                    <p className="text-[#666] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="inline-block px-8 py-3 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Amenities</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              World-Class <span className="text-[#b8860b]">Facilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="group p-8 bg-[#faf8f5] border border-transparent hover:border-[#b8860b] transition-all duration-500 text-center"
              >
                <facility.icon className="w-10 h-10 mx-auto mb-4 text-[#b8860b] group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-[#1a1a1a] mb-2">{facility.name}</h3>
                <p className="text-[#666] text-sm">Experience premium service</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              Meet the <span className="text-[#b8860b]">People</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamImages.map((member, index) => (
              <div
                key={index}
                className="luxury-card p-6 text-center group"
              >
                <div className="relative mb-6 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#b8860b]/0 group-hover:border-[#b8860b]/50 transition-all duration-500"></div>
                </div>

                <h3 className="text-xl font-display font-semibold text-[#1a1a1a]">
                  {member.name}
                </h3>
                <p className="text-[#b8860b] text-sm tracking-wider uppercase mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Location</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
              Find <span className="text-[#b8860b]">Us</span>
            </h2>
          </div>

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
            Experience <span className="text-[#b8860b]">Luxury</span> Today
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your stay with us and discover why Al Riaz Hotel is the preferred choice 
            for discerning travelers
          </p>
          <Link
            to="/rooms"
            className="inline-block px-10 py-4 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;