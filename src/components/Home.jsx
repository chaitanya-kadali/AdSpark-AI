import '../styles/Home.css';
// import { motion } from 'framer-motion';
import VideoManager from './video/VideoManager';
import BackgroundGrid from './BackGround';
import ContactForm from './ContactForm';
import BodyComp from './BodyComp';
function Home()
{ 
    

    
return(
    <>
 <div className="background-container">
      
 <BackgroundGrid />

      {/* Content */}
      <div className="content">
        <div>
            <h1>AdSpark AI Agency</h1>
            <p>🚀 Step Into the Future with AdSpark AI—Your Brand, Reimagined with AI Mini Videos</p>
        </div>
         <div> <BodyComp/> </div>
              <VideoManager />
        <div> 
              <h1>Contact us </h1>
              <ContactForm/>
        </div>
      </div>

    </div>
    </>
    )
}
export default Home;