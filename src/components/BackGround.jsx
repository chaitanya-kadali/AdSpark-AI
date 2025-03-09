import React, { useState, useEffect } from "react";
import "../styles/BackgroundGrid.css"

const BackgroundGrid = () => {
  const [numVerticalLines, setNumVerticalLines] = useState(0);
  const [numHorizontalLines, setNumHorizontalLines] = useState(0);
  const [gridHeight, setGridHeight] = useState("100vh");

  const updateGrid = () => {
    const boxSize = 30; // Adjust grid density
    const contentHeight = Math.max(document.body.scrollHeight, window.innerHeight); // Get full content height
    const numVertical = Math.floor(window.innerWidth / boxSize) +1;
    const numHorizontal = Math.floor(contentHeight / boxSize)+1;

    setNumVerticalLines(numVertical);
    setNumHorizontalLines(numHorizontal);
    setGridHeight(`${contentHeight}px`);
  };

  useEffect(() => {
    updateGrid(); // Initial setup
    window.addEventListener("resize", updateGrid);
    window.addEventListener("scroll", updateGrid);

    return () => {
      window.removeEventListener("resize", updateGrid);
      window.removeEventListener("scroll", updateGrid);
    };
  }, []);

  return (
    <div className="background-grid" style={{ height: gridHeight }}>
      {/* Vertical Lines */}
      {Array.from({ length: numVerticalLines }).map((_, index) => (
        <div
          key={`v-${index}`}
          className="grid-line vertical"
          style={{ left: `${index * 30}px` }} // Spacing between vertical lines
        />
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: numHorizontalLines }).map((_, index) => (
        <div
          key={`h-${index}`}
          className="grid-line horizontal"
          style={{ top: `${index * 30}px` }} // Spacing between horizontal lines
        />
      ))}
    </div>
  );
};

export default BackgroundGrid;
