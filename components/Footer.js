import React, { useState } from 'react';
import { FaBeer, FaCoffee, FaApple, FaBug, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHover = () => {
    const textElement = document.getElementById('connect-text');
    if (textElement) {
      textElement.innerText = 'EXPAND';
    }
  };

  const handleLeave = () => {
    const textElement = document.getElementById('connect-text');
    if (textElement) {
      textElement.innerText = 'CONNECT';
    }
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div>
         
        </div>
        <div className={`connect-box ${isExpanded ? 'expanded' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
          <IconContext.Provider value={{ color: 'white', size: '32px' }}>
            {isExpanded ? (
              <>
                <div className="icons-container">
                  <div className="icons-row">
                    <FaBeer />
                    <FaCoffee />
                    <FaApple />
                    <FaBug />
                  </div>
                  <div className="icons-row">
                    <FaBeer />
                    <FaCoffee />
                    <FaApple />
                    <FaBug />
                  </div>
                </div>
                <div className="close-text">CLOSE</div>
              </>
            ) : (
              <>
                <div className="box" />
                <span className="text" id="connect-text">
                  {isExpanded ? 'EXPAND' : 'CONNECT'}
                </span>
              </>
            )}
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

















