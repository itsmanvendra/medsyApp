import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100  min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 bg-white p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 p-4">
          Most Trusted & Reliable Pharmacy Software of India
        </h1>
        <p className="text-lg mb-4 p-2">
          Manage your Pharmacy Business from anywhere with Cloud-based Pharmacy ERP Software that works on PC & Mobile App
        </p>
        <div className="flex space-x-4 p-2">
          <button className="bg-blue-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
          <button className="bg-blue-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="m-4 p-4 w-50 h-50 bg-blue-300 rounded-md">
            <p className="text-lg mb-4 p-2">
          Say Goodbye to manual entries. Just upload CSV file and save your time
        </p>
          <Link to="/dashboard" className="bg-blue-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
            Go To Dashboard
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        <div className="w-70 h-70 bg-gray-800">
            <img src={require('../images/pexels-jonathan-borba-3259629.jpg')} alt="img" className="rounded-md w-50 h-50"/>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
