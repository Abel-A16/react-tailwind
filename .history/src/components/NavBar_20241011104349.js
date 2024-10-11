import React, { useState } from "react";

const Navbar = () => {
  // State for controlling mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for controlling services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold">My Website</span>
          </div>

          {/* Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              About
            </a>

            {/* Dropdown for Services */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-gray-800 hover:text-blue-500 focus:outline-none"
                onClick={toggleDropdown}
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-md mt-2 rounded-lg w-48">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Hamburger menu (visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-8 w-8 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </a>

            {/* Mobile Services dropdown */}
            <div className="block">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                Services
              </a>
              {isDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
