import { useEffect } from "react";

const WistiaVideo = ({ mediaId }) => {
  useEffect(() => {
    // Load Wistia script dynamically
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    
    <div style={{ height:"90%", maxWidth: "400px", flex: "1",margin:"3%"}}>
      {/* Wistia Player Component */}
      <style>
        {`
       wistia-player[media-id='${mediaId}']:not(:defined)
        { 
       background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/8g09s4cnzd/swatch');
          display: block; filter: blur(5px); padding-top:177.78%; 
          
          }
        `}
       {/* // background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');  */}

      </style>
      <wistia-player options={{
        fitStrategy: 'contain', // Ensures the video fits within the defined dimensions
      }} media-id={mediaId} aspect="0.5625"></wistia-player>
    </div>
  );
};

export default WistiaVideo;


/* 

<script src="https://fast.wistia.com/embed/8g09s4cnzd.js" async
 type="module"></script>
 <style>
 
 wistia-player[media-id='8g09s4cnzd']:not(:defined)
  { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/8g09s4cnzd/swatch');
    display: block; filter: blur(5px); padding-top:177.78%; }
    
    
    
    </style> <wistia-player media-id="8g09s4cnzd" 
    aspect="0.5625"></wistia-player>

*/