import '../styles/Home.css';
// import { motion } from 'framer-motion';
import VideoManager from './video/VideoManager';
import BackgroundGrid from './BackGround';
import ContactForm from './ContactForm';
function Home()
{ 
    

    
return(
    <>
 <div className="background-container">
      
 <BackgroundGrid />

      {/* Content */}
      <div className="content">
        <h1>Ganesh Company</h1>
        <p>Build Ready-To-Launch 'Full-Stack' Funnels Solo 🚀</p>

        <VideoManager />
        <ContactForm/>
      </div>

    </div>
    </>
    )
}
export default Home;