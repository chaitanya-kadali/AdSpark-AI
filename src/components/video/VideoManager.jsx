import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import WistiaVideo from './WistiaVideo';
import '../../styles/VideoComp.css';
import PlainVideos from './plainvideoscomp';

// Common Styles
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10px',
      width: '100%',
      maxWidth: '600px', // Keep it compact
    },
    heading: {
      fontSize: '1.4rem', // Smaller heading for better balance
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    text: {
      fontSize: '0.9rem',
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
    navigationContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      height:'20%',
      // margin: '0 auto',
      // border:'5px solid white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
    
    carouselContainer: {
      overflow: 'hidden',
      width: '100%',
    },
  };


function VideoManager() {

  const [isAnimating, setIsAnimating] = useState(false);


  return (
    <div style={styles.navigationContainer} className='navigator'>

      {/* Single Video Display */}
      <div style={styles.videoWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={0}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* <p>video chai player here brooooo</p> */}
            <PlainVideos />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default VideoManager;