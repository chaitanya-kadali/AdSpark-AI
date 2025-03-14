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
    
    <div style={{ width: "80%", maxWidth: "400px", flex: "1", margin: "5px" }}>
      {/* Wistia Player Component */}
      <style>
        {`
          wistia-player[media-id='${mediaId}']:not(:defined) { 
            filter: blur(5px); 
            padding-top: 56.25%; 
           
          }
        `}
       {/* // background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');  */}

      </style>
      <wistia-player media-id={mediaId} aspect="0.5625"></wistia-player>
    </div>
  );
};

export default WistiaVideo;
