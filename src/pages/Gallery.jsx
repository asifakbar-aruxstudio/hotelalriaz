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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="relative text-center px-6">
          <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4 fade-in">Discover</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Our <span className="text-[#b8860b]">Gallery</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80">
            Explore the elegance of Al Riaz Hotel
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#b8860b] text-[#1a1a1a]"
                    : "bg-[#faf8f5] text-[#666] hover:bg-[#b8860b] hover:text-[#1a1a1a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 px-6 bg-[#faf8f5]">
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
                  <span className="text-white text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white px-6 py-2">
                    {item.category}
                  </span>
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
          <div className="absolute inset-0 bg-[#1a1a1a]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Book Your <span className="text-[#b8860b]">Stay</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the luxury in person - reserve your room today
          </p>
          <Link
            to="/rooms"
            className="inline-block px-10 py-4 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
          >
            View Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HotelGallery;