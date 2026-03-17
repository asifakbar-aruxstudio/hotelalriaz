import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryData = [

  {
    category: "Rooms",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "Rooms",
    img: "https://images.unsplash.com/photo-1560448070-3e0b0ef9c9d1?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Restaurant",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Lobby",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Swimming Pool",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Events",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Restaurant",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Lobby",
    img: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=600&q=80"
  },

  {
    category: "Rooms",
    img: "https://images.unsplash.com/photo-1618221124724-6e12d16b927e?auto=format&fit=crop&w=600&q=80"
  }

];

const categories = ["All", "Rooms", "Restaurant", "Lobby", "Swimming Pool", "Events"];

function HotelGallery() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="font-sans">

      {/* HERO */}

      <section className="relative h-[380px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <div className="relative text-center px-6">

          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Hotel Gallery
          </h1>

          <p className="mt-4 text-lg">
            Explore the beauty and luxury of our hotel
          </p>

        </div>

      </section>


      {/* CATEGORY FILTER */}

      <section className="max-w-6xl mx-auto py-10 px-6 text-center">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>

          ))}

        </div>

      </section>


      {/* GALLERY GRID */}

      <section className="max-w-7xl mx-auto pb-20 px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredImages.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.category}
                className="w-full h-60 object-cover"
              />

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Experience Luxury With Us
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

export default HotelGallery;