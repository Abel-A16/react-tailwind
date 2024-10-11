import React from 'react';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://www.freepik.com/free-vector/golden-bird-logo-design_1182612.htm#query=logo&position=0&from_view=keyword&track=ais_hybrid-rr-similar&uuid=e566d490-1daf-476b-8cf5-2b3e1394c931"
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
