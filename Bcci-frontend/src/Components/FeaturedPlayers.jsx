import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FeaturedPlayers.css';

const FeaturedPlayers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDomestic = location.pathname.startsWith('/domestic');
  
  const players = [
    {
      name: "Virat Kohli",
      role: "Batter",
      country: "India",
      image: "./Players/virat.png"
    },
    {
      name: "Rohit Sharma",
      role: "Batter",
      country: "India",
      image: "./Players/rohitsharma.png"
    },
    {
      name: "Jasprit Bumrah",
      role: "Bowler",
      country: "India",
      image: "./Players/bumrah.png"
    },
    {
      name: "Hardik Pandya",
      role: "All-rounder",
      country: "India",
      image: "./Players/hardik.png"
    },
    {
      name: "Rishabh Pant",
      role: "Wicket Keeper",
      country: "India",
      image: "./Players/rishabh.png"
    },
    {
      name: "MS Dhoni",
      role: "Batter",
      country: "India",
      image: "./Players/doni.png"
    },
    {
      name: "Ravindra Jadeja",
      role: "All-rounder",
      country: "India",
      image: "./Players/jadddd.png"
    },
    {
      name: "Ravichandran Ashwin",
      role: "Bowler",
      country: "India",
      image: "./Players/ashwin.png"
    },
    {
      name: "Shubman Gill",
      role: "Batter",
      country: "India",
      image: "./Players/gill.png"
    },
    {
      name: "Mohammed Shami",
      role: "Bowler",
      country: "India",
      image: "./Players/shami.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const visibleItems = 5;
  const maxIndex = players.length - visibleItems;

  const scrollToIndex = (index) => {
    if (isAnimating) return;

    const boundedIndex = Math.max(0, Math.min(index, maxIndex));

    setIsAnimating(true);
    setCurrentIndex(boundedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (maxIndex + 1);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  // Handle navigation to the /players page
  const handleSeeAllClick = () => {
    // Navigate to appropriate path based on current mode (Domestic or International)
    if (isDomestic) {
      navigate('/domestic/players');
    } else {
      navigate('/players');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="players" className="featured-players-section">
      <div className="bcci-container">
        <button className="see-all-button" onClick={handleSeeAllClick}>See All</button>
        <h1 className="bcci-heading">FEATURED PLAYERS</h1>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {players.map((player, index) => (
              <div key={index} className="player-card-wrapper">
                <div className="player-card">
                  <div className="player-image-container">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="player-image"
                      onError={(e) => {
                        e.target.src = "./Players/player_placeholder.png";
                      }}
                    />
                  </div>
                  <div className="player-info">
                    <h2 className="player-name">{player.name.toUpperCase()}</h2>
                    <div className="player-details">
                      <span className="player-country">
                        <img src="./ScrollImages/Flag_of_India.png" alt="India flag" className="country-flag" />
                        <span>{player.country}</span>
                      </span>
                      <span className="separator">|</span>
                      <span className="player-role">{player.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={isAnimating || currentIndex === 0}
            className="nav-button prev-button"
            aria-label="Previous"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating || currentIndex === maxIndex}
            className="nav-button next-button"
            aria-label="Next"
          >
            →
          </button>

          <div className="nav-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;