import React from 'react';
import tick from "../../assets/tick.png"; 

const TickBadge = () => {
  return (
    <div className="ml-1 relative">
    {/* Container for the verification badge */}
    <div className="relative w-5 h-5">
      {/* Your imported verification badge PNG background */}
      <img 
        src={tick} 
        alt="Verification badge" 
        className="w-full h-full object-contain"
      />
      
      {/* The white tick mark - positioned in center */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M8 3.5L4 7.5L2 5.5" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
  );
};

export default TickBadge;