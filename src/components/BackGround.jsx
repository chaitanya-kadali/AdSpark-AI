import React, { useState, useEffect } from "react";
import '../styles/Home.css';

const BackgroundGrid = () => {
  const [gridCount, setGridCount] = useState(0);

  // Function to calculate grid count based on screen size
  const calculateGridCount = () => {
    const boxSize = 30; // Adjust this value for grid density
    const cols = Math.floor(window.innerWidth / boxSize);
    const rows = Math.floor(window.innerHeight / boxSize);
    setGridCount(cols * rows);
  };

  useEffect(() => {
    calculateGridCount(); // Initial calculation

    window.addEventListener("resize", calculateGridCount);
    return () => window.removeEventListener("resize", calculateGridCount);
  }, []);

  return (

      <div
        className="background-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(30px, 1fr))`,
          gridTemplateRows: `repeat(auto-fill, minmax(30px, 1fr))`,
          width: "100vw",
          height: "100vh",
        }}
      >
        {Array.from({ length: gridCount }).map((_, index) => (
          <div key={index} className="grid-box" />
        ))}
      </div>
    
  );
};

export default BackgroundGrid;
