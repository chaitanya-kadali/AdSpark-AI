import React, { useState } from 'react';

// Sample video data
const videos = [
  {url:"https://res.cloudinary.com/dijzxhznv/video/upload/v1745930332/IMG_1098_ntgwve.mov" }
  
];

function PlainVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (index) => {
    setActiveVideo(activeVideo === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="grid gap-1">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-[9/16] bg-gray-900 cursor-pointer overflow-hidden mb-4"
              onClick={() => handleVideoClick(index)}
            >
              <video
                src={video.url}
                className="w-80 h-full object-cover transition-transform duration-300 hover:scale-105 "
                autoPlay={activeVideo === index}
                controls={activeVideo === index}
                playsInline
                
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlainVideos;