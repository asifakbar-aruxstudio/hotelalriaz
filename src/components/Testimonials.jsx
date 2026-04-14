import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "James Morrison",
    location: "London, UK",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review: "An exceptional experience from check-in to departure. The attention to detail and luxury amenities exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Al-Rashid",
    location: "Dubai, UAE",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review: "The most luxurious hotel experience I've ever had. The staff's hospitality is truly world-class.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    review: "Perfect blend of modern luxury and traditional elegance. The rooms are breathtaking and service impeccable.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1a1a1a]">
            What Our <span className="text-[#b8860b]">Guests</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-[#faf8f5] p-10 relative hover:shadow-lg transition-shadow duration-500"
            >
              <FaQuoteLeft className="text-[#b8860b]/20 text-4xl absolute top-6 left-6" />
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'text-[#b8860b]' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-[#666] leading-relaxed mb-6 italic">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.photo} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#b8860b]/30" 
                />
                <div>
                  <p className="font-display font-semibold text-[#1a1a1a]">{t.name}</p>
                  <p className="text-[#666] text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;