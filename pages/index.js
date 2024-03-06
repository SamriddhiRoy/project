import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <IntroSection setExpanded={setExpanded} />
      <Footer />
    </div>
  );
};

const ImageBox = ({ imageUrl, isExpanded, onClick }) => {
  const cardClasses = isExpanded ? 'card expanded' : 'card';

  return (
    <figure className={cardClasses} onClick={onClick} > 
      <img src={imageUrl} alt="Gallery" />
    </figure>
  );
};

const IntroSection = ({ setExpanded }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704739300067-0cfbf8eb8bd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1700590338986-0479436a2596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleImageClick = (index) => {
    setExpandedImage(expandedImage === index ? null : index);
  };

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <section className="bg-black h-screen flex items-center justify-center relative overflow-hidden">
      <div className="featured-text">
        FEATURED&nbsp;&nbsp;WORK
      </div>
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <ImageBox
            key={index}
            imageUrl={imageUrl}
            isExpanded={index === expandedImage}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;


