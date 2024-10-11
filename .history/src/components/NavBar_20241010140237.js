import React from 'react';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://www.google.com/search?sca_esv=97958ac28674b0c2&sxsrf=ADLYWIIGhBePoydWNfw7YerwjDK4GESGFw:1728556548648&q=logo&udm=2&fbs=AEQNm0A-2qeMemLzzt_2BVemHLFNuCSl5jMwuDXSDytcTb5xOFugulBwSVKrCaczAYRUt2Z5_be3-rr2W2-c6mcvRLEBy7B8OoFBW2ddfwIZ-c2oYTCDQ1iCuvHelksIAXRGLHukGddKBP6yt5C23FV63C6WSY7rsohu2QCQPF_BM43tJgshsEo&sa=X&ved=2ahUKEwiZobn4zoOJAxWW3gIHHT9LAI0QtKgLegQIEhAB&biw=639&bih=599&dpr=1.5#vhid=qrn4zRugFoxeWM&vssid=mosaic"
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
