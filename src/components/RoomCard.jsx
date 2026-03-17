import React from "react";
import { Link } from "react-router-dom";

// Example Rooms Data
const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 120,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    desc: "Spacious room with king-size bed, modern amenities, and city view."
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 250,
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    desc: "Luxurious suite with separate living area and premium facilities."
  },
  {
    id: 3,
    name: "Luxury Room",
    price: 200,
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
    desc: "Modern design, cozy atmosphere, and panoramic views."
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: 500,
    img: "https://images.unsplash.com/photo-1618221124724-6e12d16b927e?auto=format&fit=crop&w=600&q=80",
    desc: "Top-class luxury with private jacuzzi, living area, and premium services."
  }
];

function RoomCards() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-700">
        Our Rooms
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.desc}</p>
              <p className="font-bold mb-4 text-purple-700">${room.price}/night</p>
              <Link
                to="/booking"
                className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition w-full text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoomCards;