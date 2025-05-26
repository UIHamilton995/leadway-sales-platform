import React, { useState } from 'react';
import logo from '../assets/leadway-team1.jpg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('itsnaeenamjum@gmail.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt with:', { username, email, password, confirmPassword, agreeTerms });
  };

  return (
    <div className="flex max-h-screen">
      {/* Left side - Signup form */}
      <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="">
            <div className="flex items-center">
              <img src="/LeadwayLogo.svg" alt="Leadway Logo" className="h-16" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight mb-4 text-customPink">
            Welcome to Leadway<br />Health HMO Report Portal
          </h1>

          {/* Signup Form */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-1">Signup</h2>
            <p className="text-gray-700 mb-2">to get started</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Email"
                  readOnly
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Confirm Password"
                />
              </div>
              
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Agree to Our terms and Conditions
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-customPink text-white py-3 px-2 rounded font-medium hover:bg-rose-600 transition duration-200"
              >
                Continue
              </button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Already registered?</span>{' '}
              <a href="/" className="text-black hover:text-rose-500 font-medium">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Light blue background */}
      <div className="hidden md:block md:w-1/2 bg-blue-50">
        <img className='h-full w-full' src={logo} alt="bgImage" />
        {/* Light blue background only as shown in screenshot */}
      </div>
    </div>
  );
};

export default Register;