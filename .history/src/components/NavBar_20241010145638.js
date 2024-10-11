import React from 'react';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-1 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="data:image/jpeg;base64,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"
          width={4}
          height={40}
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
