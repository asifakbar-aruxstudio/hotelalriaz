import React from "react";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing stay! The rooms were spacious, clean, and luxurious. Staff were very friendly and helpful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Khan",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "A wonderful experience! The hotel facilities are top-notch and very comfortable.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ahmed Ali",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Excellent hospitality and perfect location. I highly recommend Al Riaz Hotel.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 font-sans">

      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          What Our Guests Say
        </h2>

        {/* Testimonials Grid */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((t) => (

            <div
              key={t.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition duration-300"
            >

              {/* Photo */}

              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600"
              />

              {/* Stars */}

              <div className="flex justify-center mb-3">

                {Array(5)
                  .fill(0)
                  .map((_, i) => (

                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.63 9.392c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.965z" />
                    </svg>

                  ))}

              </div>

              {/* Review */}

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "{t.review}"
              </p>

              {/* Name */}

              <h3 className="font-semibold text-blue-700 text-lg">
                {t.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;