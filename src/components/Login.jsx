import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in real app, check against backend
    if (email && password) {
      // For demo, accept any email/password
      login({ email });
      navigate('/ai');
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl text-center mb-8" style={{
          background: "linear-gradient(135deg,#00F0FF,#5200FF,#FF2DF7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Kirish
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              placeholder="Emailingizni kiriting"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              placeholder="Parolingizni kiriting"
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#5200FF] text-white font-semibold hover:opacity-90 transition"
          >
            Kirish
          </button>
        </form>
        <p className="text-center mt-6">
          Hisobingiz yo'qmi? <Link to="/register" className="text-cyan-400 hover:underline">Ro'yxatdan o'ting</Link>
        </p>
      </div>
    </div>
  );
}