import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {toastr} from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [emailError, setEmailError] = useState('');
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  const handleSignup = async() => {
    if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
      // Perform signup logic here
      console.log('Signing up...');
      toastr.success('Signed up successfully!','Success');
      navigate("/login");


    }
  };
  const validateEmail = () => {
    if(!emailInputRef.current.value.includes('@')){
      setEmailError('Invalid Email');
    }else{
        setEmailError('');
    }
  }
  const validatePassword = () => {
    if (passwordInputRef.current.value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPasswordInputRef.current.value !== passwordInputRef.current.value) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm  rounded-md p-4 formStyle">
        <h2 className="text-center text-2xl mb-4">Signup</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              ref={nameInputRef}
              className="w-full p-2 border border-gray-300"
            />
            {/* Add error message display for name validation if needed */}
          </div>

          <div className="mb-4">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={usernameInputRef}
              className="w-full p-2 border border-gray-300"
            />
            {/* Add error message display for username validation if needed */}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={emailInputRef}
              onBlur={validateEmail}
              className="w-full p-2 border border-gray-300"
            />
            {emailError && (
              <p className="text-red-500 text-xs">{emailError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              onBlur={validatePassword}
              className="w-full p-2 border border-gray-300"
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordInputRef}
              onBlur={validateConfirmPassword}
              className="w-full p-2 border border-gray-300"
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-xs">{confirmPasswordError}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 mb-4"
          >
            Signup
          </button>
        </form>
        <p className="text-center">
          Back to Login{' '}
          <Link to="/login" className="text-gray-100 cursor-pointer">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
