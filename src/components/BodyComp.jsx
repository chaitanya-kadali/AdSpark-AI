import { motion } from 'framer-motion';
import '../styles/VideoComp.css'
import WistiaVideo from './video/WistiaVideo';
import { video } from 'framer-motion/client';

// Common Styles
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10px',
      width: '100%',
      maxWidth: '400px', // Keep it compact
    },
    heading: {
      fontSize: '2.2rem', // Smaller heading for better balance
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    text: {
      fontSize: '1rem',
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
        
      <p className="text-white !text-white">
      <span className="text-red-500 mr-3">🔥</span>
      <span className="italic">  Get Ready-To-Launch  <span className="ml-1"></span></span>
      <span className="font-bold">AI-Powered  <span className="ml-1"></span> </span> 
      <span className="italic">Mini Videos <span className="ml-1"></span></span>

      <span className="italic font-semibold"> 
      for Your Brand </span>
      
    </p>
    </motion.p>

    <motion.h1 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }} className="text-white bold" >
    🎥 Our Work – See AI Magic in Action
    </motion.h1>

    <motion.p style={styles.text} animate={{ y: [-10, 0] }} transition={{ duration: 0.5 }}  className="text-white">
        
      <p className="text-white !text-white">
        <span >  We craft 
        <span className="ml-1"></span>
        <span className="font-bold">high-impact videos 
          <span className="ml-1"></span> </span> 

         tailored for your niche.<span className="ml-1"></span></span>
      <span className="italic font-semibold">  Check out some of our recent projects: 
      </span>
      
    </p>
    </motion.p>

  </motion.div>
);

const IndustryShowcase = ({ title, description,video_id }) => (
  <motion.div
    style={styles.container}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h2
      style={styles.heading}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
       {title}
    </motion.h2>
    <motion.p
      style={styles.text}
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {description}
    </motion.p>

    <motion.div >
    <div className="video-child">
       <WistiaVideo mediaId={video_id}/>
        </div> 
    </motion.div>
  
  </motion.div>
);

const WhyAdSpark = () => (
  <motion.div style={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.h2 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>
      🔥 Why Settle for Ordinary? Go Beyond with AdSpark AI.
    </motion.h2>
    <motion.p style={styles.text}>
      🎨 <strong>Custom-Crafted Perfection:</strong> Each video mirrors your industry’s unique vibe—no cookie-cutter templates here.
    </motion.p>
    <motion.p style={styles.text}>
      ⚡ <strong>Lightning-Fast Delivery:</strong> Our AI works faster than imagination—your vision, realized in no time.
    </motion.p>
    <motion.p style={styles.text}>
      📊 <strong>Unstoppable Engagement:</strong> Hook your audience, hold their gaze, and keep them coming back for more.
    </motion.p>
  </motion.div>
);

const CallToAction = () => (
  <motion.div style={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.h2 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>
      💡 Your Brand Deserves a Story That Stands Out.
    </motion.h2>
    <motion.p style={styles.text}>
      Don't let your brand fade into the background—make it <strong>unforgettable</strong>.
    </motion.p>
  </motion.div>
);

const BodyComp = () => (
  <>
    <MagicIntro />
    <div className='total-vid-cont'>

        <div className="video-cont"> 
          {/* have to change this by having all four childs together and main cont to be automatically changed based on screen size */}
              <IndustryShowcase title="Fashion" 
              description="Elevate your style with AI-generated cinematic flair" 
              video_id="8g09s4cnzd" />

            <IndustryShowcase title="Pickles" 
              description="Make every jar pop with mouth-watering, scroll-stopping visuals." 
              video_id="dccx8sinnc" />

        </div>
        <div className="video-cont"> 
            <IndustryShowcase title="Restaurants" 
                  description="Showcase your signature dishes with irresistible video content." 
                  video_id="1p8stfjfcj" />
              <IndustryShowcase title="Organic Farms" 
                  description="Bring your farm’s fresh, natural story to life with vibrant visuals." 
                  video_id="qo9xqql7e1" />


        </div>
  </div>
    <WhyAdSpark />
    <CallToAction />
  </>
);

export default BodyComp;
