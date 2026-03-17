import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import HotelGallery from "./Gallery";
import Testimonials from "../components/Testimonials";

// Images
const heroImage = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80";

const featuredRooms = [
  {
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    title: "Deluxe Room",
    desc: "Spacious room with king-size bed, modern amenities, and city view."
  },
  {
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    title: "Executive Suite",
    desc: "Luxurious suite with separate living area and premium facilities."
  },
  {
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
    title: "Luxury Room",
    desc: "Modern design, cozy atmosphere, and panoramic views."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=600&q=80"
];

function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <img src={heroImage} alt="Luxury Hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 via-purple-700/80 to-blue-700/70"></div>
        <div className="relative z-10 px-4">
          <p className="text-white text-xl md:text-2xl mb-2 font-light drop-shadow-md">Welcome to</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white/90 drop-shadow-lg">
            <span className="text-blue-400 text-shadow-xl">Al Riaz</span> Hotel
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-4 mb-8 max-w-2xl mx-auto drop-shadow-xl">
            Experience luxury, comfort, and elegance in the heart of Larkana.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-600 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Quick Room Booking</h2>
        <form className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg" />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg" />
          <input type="date" className="border p-3 rounded-lg" />
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-600 transition"
          >
            Book Now
          </button>
        </form>
      </section>

      {/* About Hotel */}
      <section className="max-w-5xl mx-auto my-16 px-4 md:grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
          alt="Hotel Room"
          className="rounded-xl shadow-lg w-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">About Al Riaz Hotel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Riaz Hotel Larkana offers world-class hospitality with modern amenities, luxurious rooms, and exceptional customer service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Experience the perfect blend of comfort, style, and convenience during your stay.
          </p>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Featured Rooms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={room.img} alt={room.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{room.title}</h3>
                <p className="text-gray-600">{room.desc}</p>
                <button
                  onClick={() => setOpenModal(true)}
                  className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition mt-4 w-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotel Facilities */}
      <section className="max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Our Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {["Swimming Pool","Free WiFi","Restaurant","Gym","Spa","Parking"].map((facility,i)=>(
            <div key={i} className="p-8 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-lg text-purple-700">{facility}</h3>
            </div>
          ))}
        </div>
     
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Hotel Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img,index)=>(
            <img key={index} src={img} alt="Hotel Gallery" 
            className="rounded-lg object-cover w-full h-56 hover:scale-105 transition"/>
      
          ))}
          
        </div>
      </section>

      <Testimonials/>      

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <p className="mb-6">Experience luxury and comfort at Al Riaz Hotel Larkana</p>
        <button
          onClick={()=>setOpenModal(true)}
          className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-600 transition"
        >
          Book Now
        </button>
      </section>

     
      {/* Booking Modal */}
      
      <BookingModal
        isOpen={openModal}
        onClose={()=>setOpenModal(false)}
      />
    </div>
  );
}

export default Home;