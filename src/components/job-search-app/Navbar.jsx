import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Jobsphere.svg'; // Import your logo
/*  */
function Navbar() {
  return (
    <header className="bg-white shadow p-4 rounded-lg">
      <div className=" flex justify-between items-center gap-4">
        {/* Logo */}
        <img src={Logo} alt="Job Logo" className=" bg-blue-600 h-10" /> {/* Adjust height as needed */}

        {/* Navigation Links and Buttons */}
        <nav className="flex space-x-4 justify-evenly">
          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-4">
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Job Search</li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">My Applications</li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Companies</li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Login Button */}
            <Link
              to="/login" // Redirect to the login page
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>

            {/* Sign Up Button */}
            <Link
              to="/signup" // Redirect to the sign-up page
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;