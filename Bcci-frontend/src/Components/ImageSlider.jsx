import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
    { src: "./ScrollImages/a.jpg", text: "Rising Stars" },
    { src: "./ScrollImages/kohlirohit.jpg", text: "Legends of the Game" },
    { src: "./ScrollImages/kohli.jpg", text: "Unforgettable Moments" },
    { src: "./ScrollImages/Six.jpg", text: "Iconic Six !" },
    { src: "./ScrollImages/t20 wc final.jpg", text: "Champions of the league" }
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [direction, setDirection] = useState("next");
    const [nextIndex, setNextIndex] = useState(1);

    const slideImage = (newDirection) => {
        if (isSliding) return;
        setIsSliding(true);
        setDirection(newDirection);

        const nextIdx = newDirection === "next" 
            ? (currentIndex + 1) % images.length 
            : (currentIndex - 1 + images.length) % images.length;
        setNextIndex(nextIdx);

        setTimeout(() => {
            setCurrentIndex(nextIdx);
            setIsSliding(false);
        }, 600);
    };

    const nextSlide = () => slideImage("next");
    const prevSlide = () => slideImage("prev");

    useEffect(() => {
        const autoSlide = setInterval(() => {
            if (!isSliding) {
                slideImage("next");
            }
        }, 5000);
        return () => clearInterval(autoSlide);
    }, [currentIndex, isSliding]);

    return (
        <section id="home" className="home-section">
        <div className="slider-background" style={{ backgroundImage: `url(${images[currentIndex].src})` }}>
            <div className="slider-container">
                <div className={`image-wrapper ${isSliding ? direction : ""}`}>
                    <img 
                        src={images[currentIndex].src} 
                        alt={images[currentIndex].text} 
                        className="slider-image" 
                    />
                </div>
                {isSliding && (
                    <div className={`image-wrapper next-image ${direction}`}>
                        <img 
                            src={images[nextIndex].src} 
                            alt={images[nextIndex].text} 
                            className="slider-image" 
                        />
                    </div>
                )}
                <div className="slider-bottom-bar">
                    <div className="slider-indicators">
                        <div className="indicator-text">{images[currentIndex].text}</div>
                        <div className="lines-container">
                            {images.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`line ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => {
                                        if (index !== currentIndex) {
                                            if (index > currentIndex) slideImage("next");
                                            else if (index < currentIndex) slideImage("prev");
                                        }
                                    }}
                                    role="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button className="slider-control prev" onClick={prevSlide} aria-label="Previous slide">◁</button>
                        <button className="slider-control next" onClick={nextSlide} aria-label="Next slide">▷</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ImageSlider;