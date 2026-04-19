import React, { useState } from "react";

const WHATSAPP_NUMBER = "+923001234567";

const responses = {
  greeting: "Hello! Welcome to Al Riaz Hotel. How can I help you today?",
  rooms: "We have luxury rooms starting from PKR 5000/night. Would you like to view our rooms?",
  booking: "I'd be happy to help you book a room! Please share your check-in date and number of guests.",
  price: "Rooms start from PKR 5000 per night",
  cost: "Rooms start from PKR 5000 per night",
  rate: "Rooms start from PKR 5000 per night",
  rates: "Rooms start from PKR 5000 per night",
  checkin: "Check-in time is 2 PM",
  "check-in": "Check-in time is 2 PM",
  location: "We are located in the city center",
  address: "We are located in the city center",
  where: "We are located in the city center",
  contact: "You can reach us at +92 300 1234567 or email info@alriazhotel.com",
  phone: "You can reach us at +92 300 1234567",
  call: "You can reach us at +92 300 1234567",
  email: "You can email us at info@alriazhotel.com",
  services: "We offer: Free WiFi, Parking, Restaurant, Room Service, Air Conditioning",
  service: "We offer: Free WiFi, Parking, Restaurant, Room Service, Air Conditioning",
  amenities: "We offer: Free WiFi, Parking, Restaurant, Room Service, Air Conditioning",
  wifi: "Yes, we offer free high-speed WiFi for all guests!",
  parking: "Yes, we provide free parking for all guests.",
  restaurant: "Our restaurant serves delicious local and international cuisine.",
  "room service": "We offer 24/7 room service for all our guests.",
  ac: "Yes, all our rooms are air-conditioned.",
  default: "Sorry, I didn't understand your question. For immediate assistance, please WhatsApp us at +92 300 1234567"
};

const keywords = {
  hi: "greeting", hello: "greeting", hey: "greeting", hey: "greeting",
  room: "rooms", rooms: "rooms", suite: "rooms", suites: "rooms",
  book: "booking", booking: "booking", reserve: "booking",
  price: "price", cost: "cost", rate: "rate", rates: "rates",
  checkin: "checkin", "check-in": "check-in", checkin: "checkin",
  location: "location", address: "address", where: "location",
  contact: "contact", phone: "contact", call: "contact", email: "email",
  service: "services", services: "services", amenity: "services", amenities: "services",
  wifi: "wifi", internet: "wifi",
  parking: "parking", valet: "parking",
  restaurant: "restaurant", dining: "restaurant", food: "restaurant",
  "room service": "room service",
  ac: "ac", "air conditioning": "ac", cooling: "ac"
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: responses.greeting, from: "bot" }]);
  const [input, setInput] = useState("");

  const getResponse = (text) => {
    const lower = text.toLowerCase();
    for (const [key, value] of Object.entries(keywords)) {
      if (lower.includes(key)) return responses[value];
    }
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, from: "user" };
    setMessages(prev => [...prev, userMsg]);
    setTimeout(() => {
      const botMsg = { text: getResponse(input), from: "bot" };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b8860b] transition-all duration-300 z-50"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.2 3h-2.8c-.4-.8-1-1.5-1.8-1.8V1.2c0-.7-.6-1.2-1.2-1.2H9.6C8.9 0 8.3.6 8.3 1.2v2c-.8.3-1.4 1-1.8 1.8H3.8c-.7 0-1.2.6-1.2 1.2v16.6c0 .7.6 1.2 1.2 1.2h16.4c.7 0 1.2-.6 1.2-1.2V4.2c0-.6-.5-1.2-1.2-1.2zm-2.8 12.8c-1.7 0-3.2-1.5-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.5 3.2-3.2 3.2zm5.8-7.5c0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2c0 .8.2 1.5.6 2.2l-1 3 3.2-1c.6.4 1.4.6 2.2.6 2.3 0 4.2-1.9 4.2-4.2z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-40 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-[#1a1a1a] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold">AR</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Al Riaz Hotel</p>
                <p className="text-white/60 text-xs">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.from === "bot" ? "bg-[#faf8f5] text-[#1a1a1a] ml-0" : "bg-[#1a1a1a] text-white mr-0 ml-auto"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center hover:bg-[#8b6914] transition-colors"
            >
              <svg className="w-4 h-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export { Chatbot, WhatsAppButton };