import React from 'react';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="../logo.webp"
          width={45}
          height={45}
          alt="Company Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="/" className="text-black">Home</a>
        <a href="#about" className="text-black">About</a>
        <a href="#services" className="text-black">Services</a>
        <a href="#contact" className="text-black">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
