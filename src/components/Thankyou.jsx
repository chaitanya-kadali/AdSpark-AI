import React, { useState, useEffect } from 'react';
import BackgroundGrid from './BackGround';

const Thankyou = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    <BackgroundGrid />
    <div className="bg-transparent p-8 rounded-lg max-w-md mx-auto font-sans">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-6">
          {/* Checkmark circle */}
          <div className="w-20 h-20 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center relative">
            {/* Checkmark */}
            <CheckmarkAnimation isComplete={animationComplete} />
          </div>
        </div>
        
        <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            THANK YOU !
          </span>
        </h2>
        <p className="text-2xl font-light text-white mb-4">Your Booking is Confirmed! 🎉</p>
      </div>
      
      <div className="text-white text-center mb-6 font-light">
        <p className="mb-4 italic">Hey there! We've received your details, and our team is already on it.</p>
      </div>
      
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg backdrop-filter backdrop-blur-sm mb-6 border border-gray-700">
        <div className="flex items-start space-x-3 mb-4">
          <span className="text-green-400 flex-shrink-0 text-xl">✅</span>
          <p className="text-white font-light">Your request has been <span className="font-semibold">successfully submitted</span>.</p>
        </div>
        <div className="flex items-start space-x-3 mb-4">
          <span className="text-blue-400 flex-shrink-0 text-xl">📞</span>
          <p className="text-white font-light">One of our experts will <span className="font-semibold">reach out to you</span> shortly.</p>
        </div>
        <div className="flex items-start space-x-3">
          <span className="text-yellow-400 flex-shrink-0 text-xl">🚀</span>
          <p className="text-white font-light">Get ready to transform your brand with <span className="font-semibold">high-impact AI-generated video ads</span>!</p>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-white text-lg font-light">
          ✨ We're <span className="font-semibold italic">excited</span> to bring your vision to life—talk soon! 🚀
        </p>
      </div>
    </div>
    </>
  );
};

// Separate component for the checkmark animation
const CheckmarkAnimation = ({ isComplete }) => {
  return (
    <>
      {/* This is the SVG checkmark */}
      <svg 
        className="absolute inset-0"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        {/* <polyline
          points="25,40 35,50 55,30"
          fill="none"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60"
          strokeDashoffset={isComplete ? "0" : "60"}
          style={{
            transition: "stroke-dashoffset 0.6s ease-in-out 0.2s"
          }}
        /> */}

<polyline points="25,40 35,50 55,30" 
fill="none" stroke="#ffffff" 
strokeWidth="6" 
strokeLinecap="round" strokeLinejoin="round" 
strokeDasharray="60"
 strokeDashoffset={isComplete ? "0" : "60"} 
 style={{ transition: "stroke-dashoffset 0.6s ease-in-out 0.2s" }} />

      </svg>
    </>
  );
};

export default Thankyou;