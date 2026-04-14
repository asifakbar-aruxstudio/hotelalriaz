import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await register(name, email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-none shadow-[0_24px_80px_rgba(0,0,0,0.08)] p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-semibold text-[#0a0a0a] mb-2">Create Account</h2>
          <p className="text-[#6b6b6b] font-light">Join us for an exclusive experience</p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-none text-sm mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#0a0a0a] text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-[#0a0a0a] text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-[#0a0a0a] text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a0a0a] text-white py-4 font-semibold tracking-[0.12em] uppercase text-xs hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300 mt-2"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-8 text-[#6b6b6b] text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#c9a962] font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;