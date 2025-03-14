import '../styles/Home.css';
// import { motion } from 'framer-motion';
import VideoManager from './video/VideoManager';
import BackgroundGrid from './BackGround';
import ContactForm from './ContactForm';
import BodyComp from './BodyComp';
import HeadingLogo from './TopArea/HeadingLogo';
import Typography from './Typography';

function Home()
{ 
    

    
return(
    <>
 <div className="background-container">
      
 <BackgroundGrid />

      {/* Content */}
      <div className="content">
        
            <HeadingLogo/>
            <Typography />
            
        
         <div> <BodyComp/> </div>
              <VideoManager />
        <div style={{width:"100%",paddingLeft:'2%'}}> 
              <h1 className="text-white" style={{fontSize:"2.4rem",padding:"20px"}}>🚀 Book a Call with Our Team Today </h1>
              <ContactForm/>
        </div>
      </div>

    </div>
    </>
    )
}
export default Home;