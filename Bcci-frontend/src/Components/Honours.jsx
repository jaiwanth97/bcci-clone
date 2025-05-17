import React, { useState, useRef } from "react";
import "./Honours.css";

const images = [
  { src: "./Cups/image1983.png", year: "1983" },
  { src: "./Cups/image2000.png", year: "2000" },
  { src: "./Cups/image2007.png", year: "2007" },
  { src: "./Cups/image2008.png", year: "2008" },
  { src: "./Cups/image2011.png", year: "2011" },
  { src: "./Cups/image2013.png", year: "2013" },
  { src: "./Cups/20181.png", year: "2018" },
  { src: "./Cups/image2022.png", year: "2022" },
  { src: "./Cups/image2024.png", year: "2024" },
  { src: "./Cups/image2025.png", year: "2025" }
];

const Honours = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="honours" className="honours">
      <h2 className="honours__title">Honours</h2>
      
      <div className="trophy-slider">
        <div 
          className="trophy-slider__track"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div className="trophy-card" key={index}>
              <img 
                src={image.src} 
                alt={`Trophy from ${image.year}`} 
                className="trophy-card__image" 
              />
              <div className="trophy-card__year">{image.year}</div>
            </div>
          ))}
        </div>
        
        <div className="trophy-slider__instructions">
          ← Drag to explore our achievements →
        </div>
      </div>
    </section>
  );
};

export default Honours;