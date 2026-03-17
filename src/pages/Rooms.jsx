import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { useParams } from "react-router-dom";
import RoomDetail from "./RoomDetails";
const rooms = [
  {
    id: 1,
    type: "Standard Room",
    price: 80,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    desc: "Comfortable room perfect for short stays with modern amenities.",
    amenities: ["Wi-Fi", "TV", "Air Conditioning", "Room Service"]
  },
  {
    id: 2,
    type: "Deluxe Room",
    price: 120,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    desc: "Spacious deluxe room with king-size bed and city view.",
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Air Conditioning"]
  },
  {
    id: 3,
    type: "Family Room",
    price: 180,
    img: "https://images.unsplash.com/photo-1560448070-3e0b0ef9c9d1?auto=format&fit=crop&w=800&q=80",
    desc: "Large family room ideal for families with multiple beds.",
    amenities: ["Wi-Fi", "TV", "Breakfast", "Air Conditioning"]
  },
  {
    id: 4,
    type: "Suite Room",
    price: 300,
    img: "https://images.unsplash.com/photo-1618221124724-6e12d16b927e?auto=format&fit=crop&w=800&q=80",
    desc: "Luxury suite with living area, premium facilities and beautiful view.",
    amenities: ["Wi-Fi", "Jacuzzi", "Mini Kitchen", "Balcony"]
  }
];

function Rooms() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBook = (room) => {
    setSelectedRoom(room);
    setOpenModal(true);
  };

  return (
    <div className="font-sans">

      {/* HERO SECTION */}

      <section className="relative h-[420px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <div className="relative text-center px-6">

          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Luxury Rooms
          </h1>

          <p className="mt-4 text-lg max-w-xl mx-auto">
            Discover comfort and luxury in every room designed for your perfect stay.
          </p>

        </div>

      </section>


      {/* ROOMS GRID */}

      <section className="max-w-7xl mx-auto py-20 px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {rooms.map((room) => (

          <div
            key={room.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
          >

            {/* ROOM IMAGE */}

            <img
              src={room.img}
              alt={room.type}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              {/* ROOM TYPE */}

              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {room.type}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-600 text-sm mb-3">
                {room.desc}
              </p>

              {/* PRICE */}

              <p className="text-purple-700 font-bold mb-4">
                ${room.price} / night
              </p>

              {/* FACILITIES */}

              <div className="flex flex-wrap gap-2 mb-5">

                {room.amenities.map((item, index) => (

                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}

              <div className="flex gap-3">

                <Link
                  to={`/room/${room.id}`}
                  className="flex-1 text-center border border-purple-600 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  View
                </Link>

                <button
                  onClick={() => handleBook(room)}
                  className="flex-1 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Book
                </button>

              </div>

            </div>

          </div>

        ))}
   
        <RoomDetail />
      </section>
     

      {/* BOOKING MODAL */}

      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        room={selectedRoom}
      />

    </div>
  );
}

export default Rooms;