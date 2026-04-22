import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 sm:px-6">

      {/* 404 Text */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-yellow-500 mb-3 sm:mb-4">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-md text-sm sm:text-base">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition text-sm sm:text-base"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;