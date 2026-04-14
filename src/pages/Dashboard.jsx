import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('rooms');
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
    roomType: 'standard',
    capacity: 2,
    amenities: []
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchData();
  }, [user]);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [roomsRes, bookingsRes, revenueRes, usersRes] = await Promise.all([
        fetch(`${API_URL}/rooms/all`, { headers }),
        fetch(`${API_URL}/bookings/all`, { headers }),
        fetch(`${API_URL}/bookings/revenue`, { headers }),
        fetch(`${API_URL}/auth/users`, { headers })
      ]);

      setRooms(await roomsRes.json());
      setBookings(await bookingsRes.json());
      setRevenue((await revenueRes.json()).totalRevenue);
      setUsers(await usersRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const method = editingRoom ? 'PUT' : 'POST';
    const url = editingRoom 
      ? `${API_URL}/rooms/${editingRoom}` 
      : `${API_URL}/rooms`;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    setShowModal(false);
    setEditingRoom(null);
    setFormData({ title: '', price: '', description: '', images: [], roomType: 'standard', capacity: 2, amenities: [] });
    fetchData();
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    const token = localStorage.getItem('token');
    await fetch(`${API_URL}/rooms/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchData();
  };

  const toggleAvailability = async (id, isAvailable) => {
    const token = localStorage.getItem('token');
    await fetch(`${API_URL}/rooms/${id}/availability`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ isAvailable: !isAvailable })
    });
    fetchData();
  };

  const deleteBooking = async (id) => {
    if (!confirm('Delete this booking?')) return;
    const token = localStorage.getItem('token');
    await fetch(`${API_URL}/bookings/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchData();
  };

  const openEditModal = (room) => {
    setEditingRoom(room._id);
    setFormData({
      title: room.title,
      price: room.price,
      description: room.description,
      images: room.images,
      roomType: room.roomType || 'standard',
      capacity: room.capacity || 2,
      amenities: room.amenities || []
    });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-amber-700 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Rooms</h3>
          <p className="text-3xl font-bold text-amber-600">{rooms.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">{bookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Users</h3>
          <p className="text-3xl font-bold text-green-600">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Revenue</h3>
          <p className="text-3xl font-bold text-purple-600">${revenue}</p>
        </div>
      </div>

      <div className="px-6">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-4 py-2 rounded ${activeTab === 'rooms' ? 'bg-amber-600 text-white' : 'bg-white'}`}
          >
            Manage Rooms
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded ${activeTab === 'bookings' ? 'bg-amber-600 text-white' : 'bg-white'}`}
          >
            Manage Bookings
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded ${activeTab === 'users' ? 'bg-amber-600 text-white' : 'bg-white'}`}
          >
            Users
          </button>
        </div>

        {activeTab === 'rooms' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Rooms</h2>
              <button
                onClick={() => { setEditingRoom(null); setShowModal(true); }}
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
              >
                Add Room
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Title</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map(room => (
                    <tr key={room._id} className="border-b">
                      <td className="p-3">{room.title}</td>
                      <td className="p-3">${room.price}/night</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-sm ${room.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {room.isAvailable ? 'Available' : 'Booked'}
                        </span>
                      </td>
                      <td className="p-3">
                        <button onClick={() => openEditModal(room)} className="text-blue-600 mr-3">Edit</button>
                        <button onClick={() => handleDelete(room._id)} className="text-red-600 mr-3">Delete</button>
                        <button onClick={() => toggleAvailability(room._id, room.isAvailable)} className="text-amber-600">
                          {room.isAvailable ? 'Mark Booked' : 'Mark Available'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">All Bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">User</th>
                    <th className="p-3 text-left">Room</th>
                    <th className="p-3 text-left">Check In</th>
                    <th className="p-3 text-left">Check Out</th>
                    <th className="p-3 text-left">Total</th>
                    <th className="p-3 text-left">Payment</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <tr key={booking._id} className="border-b">
                      <td className="p-3">{booking.userId?.name || 'Unknown'}</td>
                      <td className="p-3">{booking.roomId?.title || 'Unknown'}</td>
                      <td className="p-3">{new Date(booking.checkInDate).toLocaleDateString()}</td>
                      <td className="p-3">{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                      <td className="p-3">${booking.totalPrice}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-sm ${booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="p-3">
                        <button onClick={() => deleteBooking(booking._id)} className="text-red-600">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">All Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user._id} className="border-b">
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{editingRoom ? 'Edit Room' : 'Add Room'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Room Title"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                placeholder="Price per night"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
              <select
                value={formData.roomType}
                onChange={e => setFormData({...formData, roomType: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
              </select>
              <input
                type="number"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={e => setFormData({...formData, capacity: e.target.value})}
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded flex-1">
                  {editingRoom ? 'Update' : 'Add'}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;