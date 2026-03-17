import React, { useState } from "react";

const rooms = [
  { id: 1, name: "Standard Room", price: 80 },
  { id: 2, name: "Deluxe Room", price: 120 },
  { id: 3, name: "Family Room", price: 180 },
  { id: 4, name: "Suite Room", price: 300 }
];

function Booking() {

  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    adults: 1,
    children: 0,
    room: "",
    name: "",
    email: "",
    phone: "",
    payment: "cash"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="font-sans">

      {/* HERO */}

      <section className="relative h-[380px] flex items-center justify-center text-white">

        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Booking"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 opacity-80"></div>

        <h1 className="relative text-5xl font-extrabold">
          Book Your Room
        </h1>

      </section>


      {/* BOOKING FORM */}

      <section className="max-w-5xl mx-auto py-20 px-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-10 grid md:grid-cols-2 gap-6"
        >

          {/* CHECK IN */}

          <div>
            <label className="block mb-2 font-semibold">Check In</label>
            <input
              type="date"
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* CHECK OUT */}

          <div>
            <label className="block mb-2 font-semibold">Check Out</label>
            <input
              type="date"
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* ADULTS */}

          <div>
            <label className="block mb-2 font-semibold">Adults</label>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          {/* CHILDREN */}

          <div>
            <label className="block mb-2 font-semibold">Children</label>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* ROOM TYPE */}

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Room Type</label>

            <select
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            >
              <option value="">Select Room</option>

              {rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} - ${room.price}/night
                </option>
              ))}

            </select>

          </div>

          {/* NAME */}

          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* PHONE */}

          <div>
            <label className="block mb-2 font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+92 300 0000000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* PAYMENT */}

          <div>
            <label className="block mb-2 font-semibold">Payment Method</label>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="cash">Pay at Hotel</option>
              <option value="card">Credit / Debit Card</option>
              <option value="bank">Bank Transfer</option>
            </select>

          </div>


          {/* SUBMIT BUTTON */}

          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Confirm Booking
            </button>

          </div>

        </form>

      </section>

    </div>
  );
}

export default Booking;