import React from 'react';
// import myvideo from '../../assets/testsong.mp4';
import WistiaVideo from './WistiaVideo';
import '../../styles/VideoComp.css'

function VideoManager(){
return(
 <>
    <div className="video-cont"> 

    <div className="video-child"> <WistiaVideo mediaId="1p8stfjfcj"/> </div> 

    <div className="video-child"> <WistiaVideo mediaId="dccx8sinnc"/> </div>   

     </div>
     <div className="video-cont"> 

    <div className="video-child"> <WistiaVideo mediaId="qo9xqql7e1"/> </div> 

    <div className="video-child"> <WistiaVideo mediaId="8g09s4cnzd"/> </div>   

     </div>
 </>
);
}
export default VideoManager;