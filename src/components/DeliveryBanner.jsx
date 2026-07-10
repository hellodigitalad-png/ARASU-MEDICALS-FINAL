import React from 'react';

const DeliveryBanner = () => {
  return (
    <div style={styles.bannerContainer}>
      {/* Scooter Rider */}
      <div style={styles.scooterWrapper}>
        <img 
          src="https://img.icons8.com/color/96/delivery-scooter.png" 
          alt="Delivery Scooter" 
          style={styles.scooterIcon}
        />
      </div>

      {/* Free Home Delivery Text Graphic */}
      <div style={styles.badgeWrapper}>
        <div style={styles.badgeBlack}>FREE HOME</div>
        <div style={styles.badgeYellow}>DELIVERY</div>
      </div>

      {/* Animated Arrows Container */}
      <div style={styles.arrowContainer}>
        <span style={{...styles.arrow, ...styles.arrow1}}>➔</span>
        <span style={{...styles.arrow, ...styles.arrow2}}>➔</span>
        <span style={{...styles.arrow, ...styles.arrow3}}>➔</span>
      </div>

      {/* CSS for Keyframe Animations */}
      <style>{`
        @keyframes pulseArrow {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

// Inline styles for complete self-containment
const styles = {
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#80001c', // Deep maroon matching the image
    padding: '15px 30px',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '900px',
    boxSizing: 'border-box',
    fontFamily: '"Arial Black", Gadget, sans-serif',
    overflow: 'hidden',
  },
  scooterWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  scooterIcon: {
    height: '60px',
    width: 'auto',
  },
  badgeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'rotate(-3deg)', // Gives it that dynamic skewed look
  },
  badgeBlack: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '4px 12px',
    fontSize: '16px',
    fontWeight: '900',
    letterSpacing: '1px',
    border: '2px solid #fff',
    boxShadow: '3px 3px 0px #000',
  },
  badgeYellow: {
    backgroundColor: '#ffcc00',
    color: '#000',
    padding: '4px 20px',
    fontSize: '20px',
    fontWeight: '900',
    marginTop: '-2px',
    boxShadow: '3px 3px 0px #000',
  },
  arrowContainer: {
    display: 'flex',
    gap: '15px',
  },
  arrow: {
    fontSize: '32px',
    color: '#000',
    fontWeight: 'bold',
    WebkitTextStroke: '2px #000', // Keeps it bold and outlined look
    animation: 'pulseArrow 1.5s infinite ease-in-out',
  },
  arrow1: { animationDelay: '0s' },
  arrow2: { animationDelay: '0.3s' },
  arrow3: { animationDelay: '0.6s' },
};

export default DeliveryBanner;