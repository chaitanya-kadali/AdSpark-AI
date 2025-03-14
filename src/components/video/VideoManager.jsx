import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WistiaVideo from './WistiaVideo';
import '../../styles/VideoComp.css';

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
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      zIndex: 10,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
    leftArrow: {
      left: '10px',
    },
    rightArrow: {
      right: '10px',
    },
    carouselContainer: {
      overflow: 'hidden',
      width: '100%',
    },
    // videoWrapper: {
    //   width: '100%',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   border:'4px solid white'
// }

  };

const IndustryShowcase = ({ title, description, video_id }) => (
  <div style={styles.container}>

    <h2 style={styles.heading}>{title}</h2>
    <p style={styles.text}>{description}</p>
    <div style={{height:"85vh"}}> 
      <WistiaVideo mediaId={video_id} />
      </div>
  
  </div>
);

function VideoManager() {
  // Create an array of all the video showcases
  const showcases = [
    {
      title: "🍔 Restaurants",
      description: "🌟 Showcase your signature dishes with irresistible video content.",
      video_id: "1p8stfjfcj"
    },
    {
      title: "🌶️ Pickles",
      description: "🌟 Make every jar pop with mouth-watering, scroll-stopping visuals.",
      video_id: "dccx8sinnc"
    },
      
    {
      title: "🍯 Organic Farms",
      description: "🌟 Bring your farm's fresh, natural story to life with vibrant visuals.",
      video_id: "qo9xqql7e1"
    },
    {
      title: "👗 Fashion",  
      description: "🌟 Elevate your style with AI-generated cinematic flair",
      video_id: "8g09s4cnzd"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? showcases.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500); // Match this with transition duration
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === showcases.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500); // Match this with transition duration
  };

  return (
    <div style={styles.navigationContainer} className='navigator'>
      {/* Left Arrow */}
      <div 
        style={{...styles.arrow, ...styles.leftArrow}} 
        onClick={handlePrevious}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Right Arrow */}
      <div 
        style={{...styles.arrow, ...styles.rightArrow}} 
        onClick={handleNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Single Video Display */}
      <div style={styles.videoWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <IndustryShowcase
              title={showcases[currentIndex].title}
              description={showcases[currentIndex].description}
              video_id={showcases[currentIndex].video_id}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default VideoManager;