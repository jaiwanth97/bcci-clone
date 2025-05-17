import React, { useState, useRef } from "react";
import "./Trophiesdomestic.css";

const images = [
  { src: "./trophiesdomestic/Ranji.png", year: "2024-2025" },
  { src: "./trophiesdomestic/duleep.png", year: "2024-2025" },
  { src: "./trophiesdomestic/irani.png", year: "2024-2025" },
  { src: "./trophiesdomestic/smat.png", year: "2024-2025" },
  { src: "./trophiesdomestic/vh.png", year: "2024-2025" },
  
];

const Trophiesdomestic = () => {
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
    <section id="honours" className="slider-background-wrapper">
      <h2 className="slider-caption-txt">Honours</h2>
      
      <div className="slider-main-container">
        <div 
          className="slider-image-wrapper"
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
            <div className="slider-main-image" key={index}>
              <img 
                src={image.src} 
                alt={`Trophy from ${image.year}`} 
                className="slider-main-img" 
              />
              <div className="slider-caption-text">{image.year}</div>
            </div>
          ))}
        </div>
        
        <div className="slider-navigation-bar">
          ← Drag to explore our achievements →
        </div>
      </div>
    </section>
  );
};

export default Trophiesdomestic;
