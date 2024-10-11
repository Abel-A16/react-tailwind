import React from 'react';

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="mr-4"
          src="../logo.webp"
          width={45}
          height={45}
          alt="Company Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row space-x-6">
        <h1><a href="/">Home</a></h1>
        <h1><a href="#about">About</a></h1>
        <h1><a href="#services">Service</a></h1>
        <h1><a href="#contact">Contact</a></h1>
      </div>
    </div>
  );
}

export default NavBar;
