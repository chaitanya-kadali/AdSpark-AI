import '../styles/Home.css';
// import { motion } from 'framer-motion';
import VideoManager from './video/VideoManager';
import BackgroundGrid from './BackGround';
import ContactForm from './ContactForm';
import BodyComp from './BodyComp';
import HeadingLogo from './HeadingLogo';
import Typography from './Typography';

function Home()
{ 
    

    
return(
    <>
 <div className="background-container">
      
 <BackgroundGrid />

      {/* Content */}
      <div className="content">
        <div>
            <HeadingLogo/>
            <Typography />
            
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