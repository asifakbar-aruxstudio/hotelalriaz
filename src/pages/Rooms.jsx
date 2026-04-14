import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { AuthContext } from "../context/AuthContext";
import { FaChevronRight } from "react-icons/fa";

const API_URL = 'http://localhost:5000/api';

function Rooms() {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch(`${API_URL}/rooms`);
      const data = await res.json();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = (room) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    setSelectedRoom(room);
    setOpenModal(true);
  };

  return (
    <div className="font-body">
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="relative text-center px-6">
          <p className="text-[#c9a962] text-sm tracking-[0.35em] uppercase mb-5 fade-in font-medium">Accommodations</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Luxury <span className="text-gradient">Rooms</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80 font-light">
            Discover comfort and elegance in our meticulously designed rooms
          </p>
        </div>
      </section>

      {loading ? (
        <div className="text-center py-32">
          <div className="w-12 h-12 border-2 border-[#c9a962] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6b6b6b]">Loading accommodations...</p>
        </div>
      ) : rooms.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-[#6b6b6b] text-xl">No rooms available at the moment.</p>
        </div>
      ) : (
        <section className="max-w-7xl mx-auto py-32 px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="luxury-card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.images?.[0] || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"}
                    alt={room.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 bg-[#c9a962] text-[#0a0a0a] px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase">
                    Available
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-display font-semibold text-[#0a0a0a] mb-3">
                    {room.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm mb-6 leading-relaxed font-light">
                    {room.description?.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <p className="text-[#c9a962] font-display font-semibold text-2xl">
                      ${room.price}<span className="text-[#6b6b6b] text-sm font-normal ml-1">/ night</span>
                    </p>
                    <div className="flex gap-3">
                      <Link
                        to={`/room/${room._id}`}
                        className="px-5 py-2.5 border border-[#c9a962]/30 text-[#0a0a0a] text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handleBook(room)}
                        className="px-5 py-2.5 bg-[#0a0a0a] text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        room={selectedRoom}
      />
    </div>
  );
}

export default Rooms;