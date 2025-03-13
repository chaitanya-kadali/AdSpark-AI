import React from 'react';

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
    {/* Main headline with gradient */}
    <h1 className="text-6xl font-bold leading-tight">
      <span className="text-white"> The  </span>
     
      <span 
    style={{
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
        <span className="text-violet-400">Step &nbsp; </span>
        <span className="italic text-violet-400">Into the future  with AdSpark AI—Your Brand,  &nbsp; </span>
        <span className="text-white">Reimagined with &nbsp; </span>
        <span className="underline text-white">AI </span>
        <span className="text-white">&nbsp; Mini Videos </span>
      </div>
    
    {/* Descriptive text */}
    <p className="text-xl text-white">
      Get started with this <span className="font-bold">beginner-friendly, </span>
      <span className="italic">over-the-shoulder </span>
      training that gets you from <span className="underline">zero</span> to your first full-stack 
      customer getting funnel in <span className="italic font-semibold">hours instead of days—even if you've never built one before.</span>
    </p>
  </div>
  );
};

export default Typography;