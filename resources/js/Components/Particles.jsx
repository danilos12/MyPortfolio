import React, { useState, useEffect } from 'react';
const Particles = ({ initialX, initialY }) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY, opacity: 0 });

    useEffect(() => {
      const updatePosition = () => {
        setPosition(prevPosition => ({
          x: prevPosition.x,
          y: prevPosition.y - 1, // Adjust the speed as needed
          opacity: Math.min(prevPosition.opacity + 0.01, 1), // Fade in effect
        }));
      };

      const interval = setInterval(updatePosition, 10); // Adjust the interval as needed

      // Clear interval and reset position when the particle reaches the top
      if (position.y <= 0) {
        clearInterval(interval);
        setPosition({ x: Math.random() * window.innerWidth, y: window.innerHeight, opacity: 0 });
      }

      return () => clearInterval(interval);
    }, [position, initialX, initialY]); // Add position, initialX, and initialY to the dependencies array

    return (
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, ' + position.opacity + ')', // Fade in based on opacity
          borderRadius: '50%',
          left: position.x + 'px',
          top: position.y + 'px',
        //   boxShadow: '0 0 50px 5px rgba(255, 255, 255, 1)',
        }}
      ></div>
    );
  };


export default Particles





