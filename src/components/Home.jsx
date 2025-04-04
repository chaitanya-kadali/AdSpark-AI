import '../styles/Home.css';
// import { motion } from 'framer-motion';
import BackgroundGrid from './BackGround';
import ContactForm from './ContactForm';
import BodyComp from './BodyComp';
import HeadingLogo from './TopArea/HeadingLogo';
import Typography from './Typography';

function Home()
{ 
    

    
return(
    <>
    
    <div className='half-circle'></div>
 <div className="background-container">
      
 <BackgroundGrid />

      {/* Content */}
      <div className="content">
        
            <HeadingLogo/>
            <Typography />
            <BodyComp/>

        <div style={{width:"100%",paddingLeft:'2%'}}>
              <ContactForm/>
        </div>
      </div>

    </div>
    </>
    )
}
export default Home;