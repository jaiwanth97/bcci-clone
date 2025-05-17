import React from "react";
import "./NewsSection.css";

const NewsSection = () => {

document.addEventListener('DOMContentLoaded', function() {
  const sideNews = document.querySelector('.side-news');
  const mainNews = document.querySelector('.main-news');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const isScrolledToBottom = sideNews.scrollHeight - sideNews.scrollTop <= sideNews.clientHeight + 5;
    
    if (isScrolledToBottom && scrollPosition + windowHeight < documentHeight) {
      window.scrollBy({
        top: 10,
        behavior: 'smooth'
      });
    }
  });
  
  sideNews.addEventListener('mouseenter', function() {
    const scrollAmount = 2;
    const scrollInterval = setInterval(function() {
      if (sideNews.scrollTop + sideNews.clientHeight >= sideNews.scrollHeight) {
        clearInterval(scrollInterval);
      } else {
        sideNews.scrollBy(0, scrollAmount);
      }
    }, 50);
    
    sideNews.addEventListener('mouseleave', function() {
      clearInterval(scrollInterval);
    });
  });
  mainNews.addEventListener('mouseenter', function() {
    const newsContent = mainNews.querySelector('.main-news-content');
    const newsHeading = mainNews.querySelector('.news-heading');
    const newsDescription = mainNews.querySelector('.news-description');
    
    newsContent.style.transform = 'translateY(0)';
    newsHeading.style.transform = 'translateY(-5px)';
    newsDescription.style.opacity = '1';
    newsDescription.style.transform = 'translateY(0)';
  });
  
  mainNews.addEventListener('mouseleave', function() {
    const newsContent = mainNews.querySelector('.main-news-content');
    const newsHeading = mainNews.querySelector('.news-heading');
    const newsDescription = mainNews.querySelector('.news-description');
    
    newsContent.style.transform = 'translateY(70%)';
    newsHeading.style.transform = 'translateY(0)';
    newsDescription.style.opacity = '0';
    newsDescription.style.transform = 'translateY(20px)';
  });
});
  return (
    <section id="news" className="news-section">
    <div className="news-container">
      <div className="news-grid">
        <div className="main-news">
          <img
            src="./NewsImages/t20_wc.jpg"
            alt="India Cricket Victory"
            className="main-news-img"
          />
          <div className="main-news-content">
            <p className="news-date">18 Mar 2025</p>
            <h3 className="news-heading">India Wins ICC Champions Trophy!</h3>
            <p className="news-description">
              A historic victory for Team India as they lift the ICC Champions Trophy after a stunning performance.
            </p>
          </div>
        </div>
        <div className="side-news">
          <div className="news-card">
            <img src="./NewsImages/Rohit.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">27 Feb 2025</p>
              <h4 className="news-heading">Rohit Sharma Breaks Record</h4>
              <p>Rohit Sharma becomes the highest run scorer in T20 World Cup history.</p>
            </div>
          </div>
          <div className="news-card">
            <img src="./NewsImages/TEST2.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">25 Jan 2025</p>
              <h4 className="news-heading">BCCI Announces New Squad</h4>
              <p>The Indian squad for the upcoming test series against England is revealed.</p>
            </div>
          </div>
          <div className="news-card">
            <img src="./NewsImages/ipl.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">15 Jan 2025</p>
              <h4 className="news-heading">IPL 2025 Schedule Released</h4>
              <p>The much-awaited IPL 2025 schedule is out! Check out the fixtures and venues.</p>
            </div>
          </div>

          <div className="news-card">
            <img src="./NewsImages/WOMENS.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">8 JAN 2025</p>
              <h4 className="news-heading">ENG-W VS IND-W</h4>
              <p>Finishing the historic win at the Lord's with a victory lap 👏👏</p>
            </div>
          </div>


          <div className="news-card">
            <img src="./NewsImages/bcci.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">7 March 2025</p>
              <h4 className="news-heading">BCCI’s Appointments to the ACC Board</h4>
              <p>With Mr. Jay Shah taking over as the Chair of the International Cricket Council</p>
            </div>
          </div>

          <div className="news-card">
            <img src="./NewsImages/domestic.jpg" alt="News" className="news-img" />
            <div className="news-text">
              <p className="news-date">22 Mar 2025</p>
              <h4 className="news-heading">What’s Next for India A?</h4>
              <p>Young Talents to Watch in Indian Cricket.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default NewsSection;
