import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000/api';

function BookingModal({ isOpen, onClose, room }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [agree, setAgree] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const calculatePrice = (inDate, outDate) => {
    if (inDate && outDate && room) {
      const start = new Date(inDate);
      const end = new Date(outDate);
      const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      const price = nights * room.price;
      setTotalPrice(price > 0 ? price : 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          roomId: room._id,
          checkInDate: checkin,
          checkOutDate: checkout
        })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message || 'Booking failed');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-10 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#b8860b]/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#b8860b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-display font-semibold text-[#1a1a1a] mb-3">Booking Confirmed!</h2>
          <p className="text-[#666] mb-6">Your reservation has been successfully completed.</p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#b8860b] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#9a7b3f] transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#666] hover:text-[#1a1a1a] text-xl"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-semibold text-[#1a1a1a]">
            Reserve Your <span className="text-[#b8860b]">Stay</span>
          </h2>
          {room && (
            <p className="text-[#666] mt-2">
              {room.title} — <span className="text-[#b8860b] font-semibold">${room.price}</span>/night
            </p>
          )}
        </div>

        {!user && (
          <div className="bg-[#faf8f5] border border-[#b8860b]/30 text-[#666] px-4 py-3 rounded mb-4 text-center">
            Please <a href="/login" className="text-[#b8860b] font-medium underline">login</a> to book a room.
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#666] mb-2">Check-in</label>
              <input
                type="date"
                value={checkin}
                onChange={(e) => {
                  setCheckin(e.target.value);
                  calculatePrice(e.target.value, checkout);
                }}
                className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#666] mb-2">Check-out</label>
              <input
                type="date"
                value={checkout}
                onChange={(e) => {
                  setCheckout(e.target.value);
                  calculatePrice(checkin, e.target.value);
                }}
                className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#666] mb-2">Adults</label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#666] mb-2">Children</label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#666] mb-2">Payment Method</label>
            <select className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors">
              <option>Cash on Arrival</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          <div>
            <textarea
              placeholder="Special Requests (optional)"
              rows={2}
              className="border border-gray-200 p-3 rounded-lg w-full text-sm focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
            />
          </div>

          {totalPrice > 0 && (
            <div className="bg-[#faf8f5] text-[#1a1a1a] font-display font-semibold text-center p-4 rounded-lg border border-[#b8860b]/30">
              Total: <span className="text-[#b8860b]">${totalPrice}</span>
            </div>
          )}

          <label className="flex items-center gap-3 text-sm text-[#666]">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="w-4 h-4 accent-[#b8860b]"
            />
            I accept the terms & conditions
          </label>

          <button
            type="submit"
            disabled={!agree || loading || !user}
            className="w-full bg-[#1a1a1a] text-white py-4 font-medium tracking-wider uppercase text-sm hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;