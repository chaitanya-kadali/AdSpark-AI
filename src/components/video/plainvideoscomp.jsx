import React, { useState } from 'react';
import WistiaVideo  from './WistiaVideo';

// Sample video data
const videos = [
  {id:"bybjjsqwil" },
  {id:"m5bib6bplu" },
  {id: "bpxxool61u" },
  {id:"gcmavdh4uo" },
  {id:"yx3r3e6747" },
  {id:"4ije2vccss" },
  {id: "1p8stfjfcj" },
  {id:"dccx8sinnc" },
  {id:"qo9xqql7e1" },
  {id:"8g09s4cnzd" }
  
];

function PlainVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

//   const handleVideoClick = (index) => {
//     setActiveVideo(activeVideo === index ? null : index);
//   };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="grid gap-1">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="w-75 relative aspect-[9/16]  cursor-pointer overflow-hidden mb-2"
            >
                <WistiaVideo mediaId={video.id} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlainVideos;