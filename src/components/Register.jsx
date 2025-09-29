import React, { useState } from "react";

export default function Register({ onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/auth";

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  setIsLoading(true);

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { message: 'Invalid response from server' };
    }

    if (res.ok) {
      if (data.success) {
        setMessage('✅ Registration successful!');
        setTimeout(() => onRegisterSuccess(), 1000);
      } else {
        setMessage(`❌ ${data.message || 'Registration failed'}`);
      }
    } else {

      setMessage(`❌ ${data.message || `Error: ${res.status}`}`);
    }
  } catch (err) {
    setMessage('⚠ Network error: Unable to reach API server.');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>
        {message && (
          <p
            className={`mb-4 text-center ${
              message.startsWith("✅")
                ? "text-green-600"
                : message.startsWith("⚠")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 disabled:bg-gray-100"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              type="email"
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 disabled:bg-gray-100"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 disabled:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          API URL: {API_URL}
        </div>
      </div>
    </div>
  );
}
