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
            <img src="data:image/jpeg;base64,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" alt="Logo" className="h-8 w-8" />
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
