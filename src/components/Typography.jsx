import React from 'react';

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
    {/* Main headline with gradient */}
    <h1 className="font-bold leading-tight" style={{ fontSize: "1.5rem" }}>
      <span className="text-red-500">🚀</span>
      <span 
        style={{
          fontWeight:'bold',
          background: "linear-gradient(90deg, white, #ec4899, #f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
          textShadow: "0px 0px 10px rgba(255,255,255,0)" // White glow to remove black edges
        }}
      >
        AI-Powered Mini Videos
      </span>
    </h1>
  </div>
  );
};

export default Typography;