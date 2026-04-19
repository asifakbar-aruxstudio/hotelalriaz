import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaWifi, FaSnowflake, FaCoffee, FaTv, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+923001234567";

const rooms = [
  {
    _id: "1",
    title: "Deluxe Room",
    description: "Elegantly designed deluxe room featuring a king-size bed, premium amenities, and stunning city views. Perfect for business travelers and couples seeking a romantic getaway.",
    price: 5000,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    features: ["King Bed", "City View", "Work Desk"]
  },
  {
    _id: "2",
    title: "Executive Suite",
    description: "Spacious suite with separate living area, luxurious furnishings, and personalized concierge service. Ideal for extended stays and business executives.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    features: ["Living Room", "Mini Bar", "Business Center"]
  },
  {
    _id: "3",
    title: "Presidential Suite",
    description: "The ultimate in luxury with private terrace, dedicated butler service, and panoramic views. An unparalleled experience for VIP guests.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    features: ["Private Terrace", "Butler Service", "Panoramic View"]
  },
  {
    _id: "4",
    title: "Family Suite",
    description: "Spacious family-friendly suite with two bedrooms, living area, and child-friendly amenities. Perfect for family vacations.",
    price: 10000,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    features: ["2 Bedrooms", "Family Area", "Kids Corner"]
  },
  {
    _id: "5",
    title: "Honeymoon Suite",
    description: "Romantic suite designed for newlyweds with special decorations, private balcony, and champagne service.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=800&q=80",
    features: ["Romantic Setup", "Private Balcony", "Champagne"]
  },
  {
    _id: "6",
    title: "Standard Room",
    description: "Comfortable and affordable room with all essential amenities for a pleasant stay.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=800&q=80",
    features: ["Queen Bed", "Basic Amenities", "City View"]
  }
];

const roomFeatures = {
  "King Bed": <FaWifi />,
  "City View": <FaTv />,
  "Work Desk": <FaCoffee />,
  "Living Room": <FaTv />,
  "Mini Bar": <FaCoffee />,
  "Business Center": <FaCoffee />,
  "Private Terrace": <FaSnowflake />,
  "Butler Service": <FaCoffee />,
  "Panoramic View": <FaTv />,
  "2 Bedrooms": <FaTv />,
  "Family Area": <FaTv />,
  "Kids Corner": <FaCoffee />,
  "Romantic Setup": <FaCoffee />,
  "Private Balcony": <FaSnowflake />,
  "Champagne": <FaCoffee />,
  "Queen Bed": <FaWifi />,
  "Basic Amenities": <FaCoffee />
};

function Rooms() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRooms = selectedCategory === "all" 
    ? rooms 
    : rooms.filter(room => room.title.toLowerCase().includes(selectedCategory));

  const handleWhatsAppBook = (room) => {
    const message = `Hello Al Riaz Hotel, I would like to book the ${room.title} for my stay. Please confirm availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, '_blank');
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
          <p className="text-[#0d9488] text-sm tracking-[0.35em] uppercase mb-5 fade-in font-medium">Accommodations</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold slide-up">
            Luxury <span className="text-gradient">Rooms</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white/80 font-light">
            Discover comfort and elegance in our meticulously designed rooms
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="luxury-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 right-5 bg-[#0d9488] text-[#0a0a0a] px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase">
                  Available
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-display font-semibold text-[#0a0a0a] mb-3">
                  {room.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm mb-4 leading-relaxed font-light">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {room.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-xs text-[#6b6b6b] bg-[#f8f6f1] px-3 py-1.5">
                      <FaWifi className="w-3 h-3" /> {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <p className="text-[#0d9488] font-display font-semibold text-2xl">
                    PKR {room.price.toLocaleString()}<span className="text-[#6b6b6b] text-sm font-normal ml-1">/ night</span>
                  </p>
                  <button
                    onClick={() => handleWhatsAppBook(room)}
                    className="px-5 py-2.5 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#1da851] transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp /> Book via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Rooms;