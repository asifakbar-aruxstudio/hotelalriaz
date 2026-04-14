import React, { useState } from "react";
import { Link } from "react-router-dom";

const terms = [
  {
    title: "Check-in and Check-out",
    content:
      "Check-in time is from 2:00 PM and check-out time is until 12:00 PM. Early check-in or late check-out is subject to availability and may incur extra charges.",
  },
  {
    title: "Cancellation Policy",
    content:
      "Cancellations made 24 hours prior to arrival are free. Late cancellations or no-shows may result in a charge equivalent to the first night stay.",
  },
  {
    title: "Payment Policy",
    content:
      "All bookings require a valid credit card or advance payment. Payment can be made via cash, card, or online payment gateways during booking.",
  },
  {
    title: "Room Occupancy",
    content:
      "Rooms are booked based on occupancy limits. Extra beds are available upon request and may incur additional charges.",
  },
  {
    title: "Pets Policy",
    content:
      "Pets are not allowed in the hotel premises unless prior approval is obtained.",
  },
  {
    title: "Hotel Facilities Usage",
    content:
      "Guests are expected to use hotel facilities responsibly. Any damage or loss caused by the guest may be charged accordingly.",
  },
  {
    title: "Noise and Conduct",
    content:
      "Guests are requested to maintain decorum and keep noise levels minimal. The hotel reserves the right to remove guests violating these rules.",
  },
  {
    title: "Privacy Policy",
    content:
      "Guest information is collected for booking purposes and is kept confidential. We do not share personal data without consent.",
  },
];

function TermsConditions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
          alt="Terms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-display font-semibold slide-up">
            Terms & <span className="text-[#b8860b]">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="space-y-4">
          {terms.map((term, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-6 bg-white text-[#1a1a1a] font-display font-semibold text-left focus:outline-none hover:bg-[#faf8f5] transition"
              >
                <span className="text-lg">{term.title}</span>
                <span className="text-2xl text-[#b8860b]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-[#faf8f5] text-[#666] leading-relaxed border-t border-gray-100">
                  {term.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#666] mb-6">Have questions about our policies?</p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;