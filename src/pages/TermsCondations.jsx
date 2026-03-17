import React, { useState } from "react";

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
    <div className="font-sans max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-12 py-4 ">
        Terms & Conditions
      </h1>

      <div className="space-y-4">
        {terms.map((term, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-4 bg-blue-100 text-blue-700 font-semibold text-left focus:outline-none"
            >
              <span>{term.title}</span>
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 text-sm leading-relaxed">
                {term.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsConditions;