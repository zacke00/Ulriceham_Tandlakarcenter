import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import { Hannes, Sted } from '../Personal/Index';



const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === -1 ? -1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex + 1));
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="Carousel-Main">
        <div id="Carousel-Prev">
            <div id="prev-btn" onClick={nextSlide}>‹</div>
        </div>
        <div id="Carousel-Inner" style={{ transform: `translateX(calc(20% + ${currentIndex * 40}%))` }}>

            <div id={currentIndex === 0 ? "Carousel-Item-Active" : "Carousel-Item"} onClick={() => handleClick(0)}>
              <Sted called={currentIndex}/>
            </div>
            <div id={currentIndex === -1 ? "Carousel-Item-Active" : "Carousel-Item"} onClick={() => handleClick(-1)}>
              <Hannes called={currentIndex}/>
            </div>

        </div>

        <div id="Carousel-Next">
            <div id="next-btn" onClick={prevSlide}>›</div>
        </div>
    </div>
  );
};

export default Carousel;