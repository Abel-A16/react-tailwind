import React from 'react';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://www.google.com/imgres?q=logo&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fbird-colorful-logo-gradient-vector_343694-1365.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flogo&docid=ldkRqsCRrSjoyM&tbnid=qrn4zRugFoxeWM&vet=12ahUKEwi3v-H5zoOJAxUCwAIHHaNYHBAQM3oECBcQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwi3v-H5zoOJAxUCwAIHHaNYHBAQM3oECBcQAA"
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
