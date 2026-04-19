import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryData = [
  { category: "Suites", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" },
  { category: "Suites", img: "https://images.unsplash.com/photo-1560448070-3e0b0ef9c9d1?auto=format&fit=crop&w=800&q=80" },
  { category: "Dining", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" },
  { category: "Lobby", img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=800&q=80" },
  { category: "Pool", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" },
  { category: "Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" },
  { category: "Dining", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80" },
  { category: "Lobby", img: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=800&q=80" },
  { category: "Suites", img: "https://images.unsplash.com/photo-1618221124724-6e12d16b927e?auto=format&fit=crop&w=800&q=80" }
];

const categories = ["All", "Suites", "Dining", "Lobby", "Pool", "Events"];

function HotelGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Hotel Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="relative text-center px-6">
          <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 fade-in font-medium">Discover</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80 font-light">
            Explore the elegance of Al Riaz Hotel
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#0d9488] text-[#0a0a0a]"
                    : "bg-[#f8f6f1] text-[#6b6b6b] hover:bg-[#0d9488] hover:text-[#0a0a0a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white px-6 py-2">
                    {item.category}
                  </span>
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
            Book Your <span className="text-gradient">Stay</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the luxury in person - reserve your room today
          </p>
          <Link
            to="/rooms"
            className="gold-btn inline-block"
          >
            <span>View Rooms</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HotelGallery;