import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
        
      <div className="text-center">
      <div className="mt-8 lg:w-[700px] w-[400px] mx-auto">
          <img
            src={logo}
            alt="Error Illustration"
            className="mx-auto w-1/2 md:w-1/3"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4">Lost your way?</h1>
        <p className="text-xl mb-8">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link to="/">
          <button className="text-white px-6 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
            Netflix Home
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default ErrorPage;
