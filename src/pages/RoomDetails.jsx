import React, { useState } from "react";
import { useParams } from "react-router-dom";

const rooms = [
  {
    id: "1",
    name: "Deluxe Room",
    price: 120,
    bed: "King Size Bed",
    capacity: "2 Guests",
    desc: "Spacious deluxe room with modern interior, city view and luxury comfort.",
    amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar", "Room Service"],
    mainImg:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560448070-3e0b0ef9c9d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618221124724-6e12d16b927e?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "2",
    name: "Suite Room",
    price: 250,
    bed: "King Bed + Sofa",
    capacity: "4 Guests",
    desc: "Luxury suite room with living area, balcony and premium facilities.",
    amenities: ["WiFi", "Jacuzzi", "Mini Kitchen", "Balcony", "TV"],
    mainImg:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

function RoomDetail() {

  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  const [mainImage, setMainImage] = useState(room?.mainImg);

  if (!room) return <p className="text-center py-20">Room not found</p>;

  return (
    <div className="font-sans">

      {/* HERO */}

      <section className="relative h-[400px] flex items-center justify-center text-white">

        <img
          src={room.mainImg}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <h1 className="relative text-5xl font-extrabold drop-shadow-lg">
          {room.name}
        </h1>

      </section>


      {/* ROOM CONTENT */}

      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">


        {/* ROOM GALLERY */}

        <div>

          <img
            src={mainImage}
            alt="Room"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-4"
          />

          <div className="grid grid-cols-3 gap-3">

            {room.gallery.map((img, i) => (

              <img
                key={i}
                src={img}
                alt="Gallery"
                onClick={() => setMainImage(img)}
                className="h-24 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
              />

            ))}

          </div>

        </div>


        {/* ROOM DETAILS */}

        <div>

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            {room.name}
          </h2>

          <p className="text-gray-600 mb-4">
            {room.desc}
          </p>

          <p className="text-2xl font-bold text-purple-700 mb-6">
            ${room.price} / Night
          </p>


          {/* ROOM FEATURES */}

          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700">Bed Type</h4>
              <p>{room.bed}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700">Capacity</h4>
              <p>{room.capacity}</p>
            </div>

          </div>


          {/* AMENITIES */}

          <h3 className="font-bold text-lg mb-3 text-blue-700">
            Room Facilities
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">

            {room.amenities.map((item, index) => (

              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
              >
                {item}
              </span>

            ))}

          </div>


          {/* AVAILABILITY FORM */}

          <div className="bg-gray-100 p-6 rounded-xl shadow mb-6">

            <h3 className="font-bold text-lg mb-4 text-purple-700">
              Check Availability
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                className="border p-3 rounded-lg"
              />

              <input
                type="date"
                className="border p-3 rounded-lg"
              />

            </div>

          </div>


          {/* BOOK BUTTON */}

          <button className="w-full bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">

            Book This Room

          </button>

        </div>

      </section>


      {/* REVIEWS */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Guest Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((review) => (

            <div
              key={review}
              className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
            >

              <p className="text-gray-700 mb-4">
                Amazing room with excellent service. Highly recommended!
              </p>

              <h4 className="font-semibold text-purple-700">
                Guest {review}
              </h4>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default RoomDetail;