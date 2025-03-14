import React from 'react';

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
    {/* Main headline with gradient */}
    <h1 className="text-6xl font-bold leading-tight">
    <span className="text-red-500 mr-3">🚀</span>
      <span 
    style={{
        fontWeight:'bold',
      background: "linear-gradient(90deg, white, #a78bfa, #ec4899, #f59e0b, white)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
      textShadow: "0px 0px 10px rgba(255,255,255,0.3)" // White glow to remove black edges
    }}
  >
 AI-Powered Mini Videos
  </span>
  <span className="text-white">  for Your Brand </span>
      
       </h1>
    
    {/* Subheading with rocket icon */}
   
    {/* Descriptive text */}
  </div>
  );
};

export default Typography;