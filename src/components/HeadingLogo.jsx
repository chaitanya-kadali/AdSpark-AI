// Header.jsx
import React from 'react';
import logo from "../assets/AdSpark_tight.jpg"; // Update with correct path

const HeadingLogo = () => {
  return (
    <header className="flex items-center justify-center py-6 bg-opacity-80 backdrop-blur-md shadow-md">
      <img src={logo} alt="Company Logo" className="h-16 w-auto mr-3" />
      <h1 className="text-3xl font-bold text-white">AdSpark AI</h1>
    </header>
  );
};

export default HeadingLogo;
