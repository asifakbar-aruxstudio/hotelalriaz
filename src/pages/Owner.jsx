import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mr. Ahmed Riaz",
    role: "Owner & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Visionary leader with 20+ years in hospitality, dedicated to excellence.",
    email: "ahmed.riaz@alriazhotel.com",
    phone: "+92 300 1234567"
  },
  {
    name: "Mrs. Fatima Ahmed",
    role: "Co-Owner & Administrator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Oversees hotel operations with meticulous attention to detail.",
    email: "fatima.ahmed@alriazhotel.com",
    phone: "+92 300 1234568"
  },
  {
    name: "Mr. Hassan Khan",
    role: "General Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "15 years of luxury hotel management experience.",
    email: "hassan.khan@alriazhotel.com",
    phone: "+92 300 1234569"
  },
  {
    name: "Mr. Mohammad Aslam",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=600&q=80",
    bio: "Master chef specializing in local and international cuisine.",
    email: "aslam.chef@alriazhotel.com",
    phone: "+92 300 1234570"
  },
  {
    name: "Ms. Sara Ahmed",
    role: "Front Office Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Ensures seamless check-in experience for all guests.",
    email: "sara.ahmed@alriazhotel.com",
    phone: "+92 300 1234571"
  },
  {
    name: "Mr. Imran Sheikh",
    role: "Restaurant Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    bio: "Curates dining experiences that delight our guests.",
    email: "imran.sheikh@alriazhotel.com",
    phone: "+92 300 1234572"
  },
  {
    name: "Mrs. Ayesha Riaz",
    role: "Housekeeping Supervisor",
    image: "https://images.unsplash.com/photo-1594744803299-400d6174e5e7?auto=format&fit=crop&w=600&q=80",
    bio: "Maintains pristine standards across all rooms.",
    email: "ayesha.riaz@alriazhotel.com",
    phone: "+92 300 1234573"
  },
  {
    name: "Mr. Rashid Mehta",
    role: "Head of Security",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc9945bb4?auto=format&fit=crop&w=600&q=80",
    bio: "Ensures safety and security for all guests and staff.",
    email: "rashid.mehta@alriazhotel.com",
    phone: "+92 300 1234574"
  }
];

function Owner() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="relative text-center px-4 sm:px-6">
          <p className="text-[#0d9488] text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 fade-in font-medium">Meet the Team</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold slide-up px-4">
            Our <span className="text-gradient">Leadership</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg max-w-xl mx-auto text-white/80 font-light px-4">
            The dedicated professionals behind Al Riaz Hotel's success
          </p>
        </div>
      </section>

      {/* Owner Message */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Mr. Ahmed Riaz - Owner"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 sm:-8 -right-6 sm:-right-8 bg-[#0d9488] p-6 sm:p-8 max-w-xs hidden lg:block">
                <p className="text-white font-display text-3xl sm:text-4xl font-semibold">20+</p>
                <p className="text-white/80 text-xs uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">From the Owner</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0f172a] mb-4 sm:mb-6">
                A Legacy of <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-lg">
                Welcome to Al Riaz Hotel. What started as a dream has become a reality through unwavering commitment to hospitality and guest satisfaction. Our family has dedicated over two decades to perfecting the art of making guests feel at home away from home.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-8 sm:mb-10 font-light text-sm sm:text-lg">
                Every member of our team shares this vision - to provide unparalleled service with warmth and authenticity. We invite you to experience the Al Riaz difference firsthand.
              </p>
              <div className="flex gap-6 sm:gap-10 mb-8 sm:mb-10">
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-[#0d9488]">8</p>
                  <p className="text-[#64748b] text-sm">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-[#0d9488]">24/7</p>
                  <p className="text-[#64748b] text-sm">Support</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-semibold text-[#0d9488]">15+</p>
                  <p className="text-[#64748b] text-sm">Years Service</p>
                </div>
              </div>
              <Link to="/contact" className="gold-btn inline-flex">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-4 sm:mb-5 font-medium">Our Team</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#0f172a]">
              Dedicated <span className="text-gradient">Professionals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="luxury-card group overflow-hidden"
              >
                <div className="relative overflow-hidden h-56 sm:h-64 lg:h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-6">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 bg-white/20 flex items-center justify-center text-white hover:bg-[#0d9488] transition-colors">
                        <FaFacebook className="w-3 h-3" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-white/20 flex items-center justify-center text-white hover:bg-[#0d9488] transition-colors">
                        <FaLinkedin className="w-3 h-3" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-white/20 flex items-center justify-center text-white hover:bg-[#0d9488] transition-colors">
                        <FaInstagram className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-display font-semibold text-[#0f172a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0d9488] text-xs tracking-[0.1em] uppercase mb-2 sm:mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-[#64748b] text-sm leading-relaxed font-light mb-3 sm:mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#64748b] pt-3 sm:pt-4 border-t border-gray-100">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 hover:text-[#0d9488] transition-colors">
                      <FaEnvelope className="w-3 h-3" /> <span className="hidden sm:inline">{member.email}</span>
                    </a>
                  </div>
                </div>
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
          <div className="absolute inset-0 bg-[#0f172a]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6 sm:mb-8">
            Experience True <span className="text-gradient">Hospitality</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Our dedicated team is ready to make your stay exceptional. Reach out to us directly for any inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
            <Link to="/contact" className="gold-btn inline-flex">
              <span>Contact Us</span>
            </Link>
            <Link to="/rooms" className="dark-btn inline-flex">
              Book a Room
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Owner;