import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import { type } from 'os';



const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === -1 ? -1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 1 : prevIndex + 1));
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <div id="Carousel-Main">
        <div id="Carousel-Prev">
            <button id="prev-btn" onClick={nextSlide}>‹</button>
        </div>
        <div id="Carousel-Inner" style={{ transform: `translateX(calc(0% + ${currentIndex * 33.33}%))` }}>

        
            <div id={currentIndex === 1 ? "Carousel-Item-Active" : "Carousel-Item"} onClick={() => handleClick(1)}>Item 1</div>
            <div id={currentIndex === 0 ? "Carousel-Item-Active" : "Carousel-Item"} onClick={() => handleClick(0)}>Item 2</div>
            <div id={currentIndex === -1 ? "Carousel-Item-Active" : "Carousel-Item"} onClick={() => handleClick(-1)}>Item 3</div>
        </div>
        <div id="Carousel-Next">
            <button id="next-btn" onClick={prevSlide}>›</button>
        </div>
    </div>
  );
};

export default Carousel;