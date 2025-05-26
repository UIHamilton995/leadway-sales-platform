import React, { useState } from 'react';
import logo from '../assets/leadway-team1.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('h-ude@leadway.com');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-4">
            <div className="flex items-center">
              <img src="/LeadwayLogo.svg" alt="Leadway Logo" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight mb-4 text-customPink">
            Welcome to Leadway<br />Health HMO Report Portal
          </h1>

          {/* Login Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-1">Login</h2>
            <p className="text-gray-700 mb-4">to get started</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="h-ude@leadway.com"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="********"
                />
              </div>
              <div className="mb-4">
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-customPink text-white py-3 px-4 rounded font-medium hover:bg-red-600 transition duration-200"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">New User?</span>{' '}
              <a href="/signup" className="text-gray-800 hover:text-red-500 font-medium">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Portrait image with light blue overlay */}
      <div className="hidden md:block md:w-1/2 bg-blue-100 relative overflow-hidden">
        <img className='h-full w-full' src={logo} alt="bgImage" />
        
        {/* You can add content overlay here if needed */}
        <div className="relative h-full flex items-center justify-center p-12">
          {/* Optional: Content that overlays the image */}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;