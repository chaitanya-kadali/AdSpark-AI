import { motion } from 'framer-motion';

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
      fontSize: '1.5rem', // Smaller heading for better balance
      fontWeight: 'bold',
      marginBottom: '5px',
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
    {/* <motion.h1 style={styles.heading} animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }} className="text-violet-300" >
      ✨ Experience the Magic in Motion ✨
    </motion.h1> */}
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
  </motion.div>
);

const IndustryShowcase = ({ title, description, emoji }) => (
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
      {emoji} {title}
    </motion.h2>
    <motion.p
      style={styles.text}
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {description}
    </motion.p>
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
  <div>
    <MagicIntro />
    <IndustryShowcase title="Fashion" description="Where style s technology—your latest trends, brought to life." emoji="👗" />
    <IndustryShowcase title="Pickles" description="Every crunch, every flavor—captured in mouthwatering motion." emoji="🥒" />
    <IndustryShowcase title="Restaurants" description="From sizzle to serve—irresistible dishes, now irresistible videos." emoji="🍽" />
    <IndustryShowcase title="Farms" description="The heart of the earth—freshness and authenticity, visualized." emoji="🚜" />
    <IndustryShowcase title="Cafes" description="Sip, savor, and share—warmth and aroma in every frame." emoji="☕" />
    <WhyAdSpark />
    <CallToAction />
  </div>
);

export default BodyComp;
