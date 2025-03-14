import { motion } from 'framer-motion';
import '../styles/VideoComp.css'
import WistiaVideo from './video/WistiaVideo';
import { video } from 'framer-motion/client';
import VideoManager from './video/VideoManager';

// Common Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    width: '100%',
    maxWidth: '700px', // Keep it compact
  },
  heading: {
    fontSize: '1.2rem', // Smaller heading for better balance
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  text: {
    fontSize: '0.8rem',
    maxWidth: '90%',
    marginBottom: '10px',
    lineHeight: '1.4', // Better text spacing
  },
button: {
  padding: '10px 20px',
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#ff6600',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
},
};

const MagicIntro = () => (
  <motion.div style={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    
    <motion.p style={styles.text} animate={{ y: [-10, 0] }} transition={{ duration: 0.5 }}  className="text-white">
        
      
      <span className="text-red-500 mr-3">🔥</span>
      <span className="italic">  Get Ready-To-Launch  <span className="ml-1"></span></span>
      <span className="font-bold">AI-Powered  <span className="ml-1"></span> </span> 
      <span className="italic">Mini Videos <span className="ml-1"></span></span>

      <span className="italic font-semibold"> 
      for Your Brand </span>
      

    </motion.p>

    <motion.h1 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }} className="text-white bold" >
    🎥 Our Work – See AI Magic in Action
    </motion.h1>

    <motion.p style={styles.text} animate={{ y: [-10, 0] }} transition={{ duration: 0.5 }}  className="text-white">
        
    
        <span >  We craft 
        <span className="ml-1"></span>
        <span className="font-bold">high-impact videos 
          <span className="ml-1"></span> </span> 

         tailored for your niche.<span className="ml-1"></span></span>
      <span className="italic font-semibold">  Check out some of our recent projects: 
      </span>
      
    
    </motion.p>

  </motion.div>
);



const WhyAdSpark = () => (
  <motion.div style={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.h2 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>
    📊 Your Brand Could Be Next – Let's Make It Happen
    </motion.h2>

    ✨ What’s Included – Our Add-Ons

    <motion.div style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment
        textAlign: "left", // Makes sure text aligns left
        width: "100%", // Full width for proper positioning
        padding: "10px", // Some spacing for readability
      }
    }> 
    <motion.p style={styles.text}>
    ✅ <span className="font-bold text-white">Custom Branding - </span> 
     We integrate your logo, colors, and unique style seamlessly.
    </motion.p>
    
    <motion.p style={styles.text}>
    ✅ <span className="font-bold text-white">Script Assistance - </span> 
    Need help with messaging? We’ll craft compelling copy that sells.
    </motion.p>

    <motion.p style={styles.text}>
    ✅ <span className="font-bold text-white">Multiple Aspect Ratios - </span> 
    Perfectly optimized for Instagram, Facebook, and more.
    </motion.p>
    
    <motion.p style={styles.text}>
    ✅ <span className="font-bold text-white">Fast Delivery- </span> 
    Get your AI-powered mini videos delivered quickly without compromise.
    </motion.p>

    <motion.p style={styles.text}>
    ✅ <span className="font-bold text-white">Revisions Included - </span> 
    We work with you to ensure the final product exceeds expectations.
    </motion.p>

    </motion.div>

  </motion.div>
);

const CallToAction = () => (
  <motion.div style={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.h2 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>
    📞 Book Your Free Consultation
    </motion.h2>
    <motion.p style={styles.text}>
    🚀 Book a Call with Our Team Today – Your Vision,<strong> Our AI Expertise. </strong>.
    </motion.p>
  </motion.div>
);

const BodyComp = () => (
  <>
    <MagicIntro />
    <VideoManager/>
    <WhyAdSpark />
    <CallToAction />
  </>
);

export default BodyComp;
