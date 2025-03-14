import React from 'react';

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
    {/* Main headline with gradient */}
    <h1 className="text-6xl font-bold leading-tight">
      <span className="text-white"> The  </span>
     
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
    AdSpark AI
  </span>
  <span className="text-white"> Agency  </span>
      
       </h1>
    
    {/* Subheading with rocket icon */}
    <div className="flex flex-wrap justify-center items-center text-3xl mt-6 mb-8 text-center">
        <span className="text-red-500 mr-3">🚀</span>
        <span className="text-violet-400">AI-Powered   &nbsp; </span>
        <span className="italic text-violet-400">Mini Videos &nbsp;   </span>
        <span className="text-violet-400"> for    &nbsp;  </span>
      <span className="text-white"> Your Brand </span>
    </div>
    
    {/* Descriptive text */}
  </div>
  );
};

export default Typography;