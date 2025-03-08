import React from 'react';
// import myvideo from '../../assets/testsong.mp4';
import WistiaVideo from './WistiaVideo';
import '../../styles/VideoComp.css'

function VideoManager(){
return(
 <>
    <div className="video-cont"> 

    <div className="video-child"> <WistiaVideo mediaId="euip2ij8ae"/> </div> 

    <div className="video-child"> <WistiaVideo mediaId="euip2ij8ae"/> </div>   

     </div>
 </>
);
}
export default VideoManager;