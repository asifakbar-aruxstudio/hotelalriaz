import React, { useState } from "react";

function BookingModal({ isOpen, onClose, room }) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [agree, setAgree] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  if (!isOpen) return null;

  const calculatePrice = (inDate, outDate) => {
    if (inDate && outDate && room) {
      const start = new Date(inDate);
      const end = new Date(outDate);
      const nights = (end - start) / (1000 * 60 * 60 * 24);
      const price = nights * room.price;
      setTotalPrice(price > 0 ? price : 0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 text-xl hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Book Room
        </h2>

        {room && (
          <p className="text-center text-purple-700 mb-4">
            {room.name} - ${room.price}/night
          </p>
        )}

        {/* Booking Form */}
        <form className="space-y-4">

          {/* Row 1: Full Name + Email */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg w-full"
              required
            />
          </div>

          {/* Row 2: Phone + CNIC/Passport */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="tel"
              placeholder="Phone"
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="text"
              placeholder="CNIC / Passport"
              className="border p-3 rounded-lg w-full"
              required
            />
          </div>

          {/* Row 3: Check-in + Check-out */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              value={checkin}
              onChange={(e) => {
                setCheckin(e.target.value);
                calculatePrice(e.target.value, checkout);
              }}
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="date"
              value={checkout}
              onChange={(e) => {
                setCheckout(e.target.value);
                calculatePrice(checkin, e.target.value);
              }}
              className="border p-3 rounded-lg w-full"
              required
            />
          </div>

          {/* Row 4: Adults + Children */}
          <div className="grid grid-cols-2 gap-3">
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="border p-3 rounded-lg w-full"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="border p-3 rounded-lg w-full"
            >
              <option>0 Children</option>
              <option>1 Child</option>
              <option>2 Children</option>
            </select>
          </div>

          {/* Row 5: Room Type + Number of Rooms */}
          <div className="grid grid-cols-2 gap-3">
            <select className="border p-3 rounded-lg w-full">
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Family Room</option>
              <option>Suite Room</option>
            </select>
            <input
              type="number"
              placeholder="Number of Rooms"
              className="border p-3 rounded-lg w-full"
              min={1}
              defaultValue={1}
            />
          </div>

          {/* Payment Method */}
          <select className="border p-3 rounded-lg w-full">
            <option>Cash on Arrival</option>
            <option>Credit Card</option>
            <option>Bank Transfer</option>
          </select>

          {/* Special Request */}
          <textarea
            placeholder="Special Request"
            rows={3}
            className="border p-3 rounded-lg w-full"
          />

          {/* Total Price */}
          {totalPrice > 0 && (
            <div className="bg-blue-50 text-blue-700 font-semibold text-center p-2 rounded">
              Total: ${totalPrice}
            </div>
          )}

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            Accept terms & conditions
          </label>

          {/* Book Now */}
          <button
            type="submit"
            disabled={!agree}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            Book Now
          </button>

        </form>

      </div>
    </div>
  );
}

export default BookingModal;