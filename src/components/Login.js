import React, { useState, useRef } from 'react';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = () => {
    // Perform login logic here
    toastr.success('Successfully Logged In!','Hover to dismiss')
    console.log('Logging in...');
    toastr.info('Redirecting to Dashboard','Info')
    navigate("/dashboard");

  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs  rounded-md p-4 formStyle">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameInputRef}
            className="w-full mb-4 p-2 border border-gray-400"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            className="w-full mb-4 p-2 border border-gray-400"
          />

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 mb-4"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Don't have an account?{' '}
          <Link to="/registration" className="text-gray-200 cursor-pointer">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
