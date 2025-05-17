import React from "react";
import "./NewsSectiondomestic.css";

const NewsSectiondomestic = () => {

document.addEventListener('DOMContentLoaded', function() {
  const sideNews = document.querySelector('.domestic-side-news');
  const mainNews = document.querySelector('.domestic-main-news');

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
    const newsContent = mainNews.querySelector('.domestic-main-news-content');
    const newsHeading = mainNews.querySelector('.domestic-news-heading');
    const newsDescription = mainNews.querySelector('.domestic-news-description');
    
    newsContent.style.transform = 'translateY(0)';
    newsHeading.style.transform = 'translateY(-5px)';
    newsDescription.style.opacity = '1';
    newsDescription.style.transform = 'translateY(0)';
  });
  
  mainNews.addEventListener('mouseleave', function() {
    const newsContent = mainNews.querySelector('.domestic-main-news-content');
    const newsHeading = mainNews.querySelector('.domestic-news-heading');
    const newsDescription = mainNews.querySelector('.domestic-news-description');
    
    newsContent.style.transform = 'translateY(70%)';
    newsHeading.style.transform = 'translateY(0)';
    newsDescription.style.opacity = '0';
    newsDescription.style.transform = 'translateY(20px)';
  });
});
  return (
    <section id="news" className="domestic-news-container">
    <div className="domestic-news-grid">
      <div className="domestic-main-news">
        <img
          src="./newsdomestic/ranji_trophy_keral_final.jpg"
          alt="Mumbai Cricket Victory"
          className="domestic-main-news-img"
        />
        <div className="domestic-main-news-content">
          <p className="domestic-news-date">18 Mar 2025</p>
          <h3 className="domestic-news-heading1">Ranji Trophy 2024 Final: Mumbai Clinches Record 42nd Title!</h3>
          <p className="domestic-news-description">
          Mumbai outplayed their opponents in a thrilling Ranji Trophy final, securing their 42nd title in the history of India’s premier first-class tournament. 
          </p>
        </div>
      </div>
      <div className="domestic-side-news">
        
        <div className="domestic-news-card">
          <img src="./newsdomestic/domestic women.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">26 Jan 2025</p>
            <h4 className="domestic-news-heading">U19 Women’s One Day Trophy: Mumbai Lifts the Trophy!”
            </h4>
            <p>Mumbai’s U19 women’s team showcased their exceptional talent, securing the One Day Trophy title.</p>
          </div>
        </div>
        <div className="domestic-news-card">
          <img src="./newsdomestic/Irani_Trophy_Rahane_Shreyas.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">15 Jan 2025</p>
            <h4 className="domestic-news-heading">India A vs England Lions: Young Stars Shine in Test Series
            </h4>
            <p>“The upcoming cricketers in India A put up a strong fight against England Lions in the unofficial Test series.”</p>
          </div>
        </div>
        <div className="domestic-news-card">
          <img src="./newsdomestic/Railways-Womens-Cricket-Team1 domestic.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">27 Feb 2025</p>
            <h4 className="domestic-news-heading">Women’s Senior T20 Trophy: Railways Clinch Another Title!</h4>
            <p>The Railways women’s team continued their dominance in the Women’s Senior T20 Trophy, defeating Maharashtra in the finals with a commanding performance.</p>
          </div>
        </div>
        <div className="domestic-news-card">
          <img src="./newsdomestic/duleep trophy.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">27 Feb 2025</p>
            <h4 className="domestic-news-heading">Duleep Trophy 2024: West Zone Triumphs Over South Zone</h4>
            <p>West Zone emerged victorious in the Duleep Trophy final, with a stellar performance by their bowlers sealing the win.</p>
          </div>
        </div>
        <div className="domestic-news-card">
          <img src="./newsdomestic/vijay hazare.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">29 Feb 2025</p>
            <h4 className="domestic-news-heading">Vijay Hazare Trophy: Tamil Nadu Storms into the Finals</h4>
            <p>Tamil Nadu showcased a dominant performance in the semi-finals of the Vijay Hazare Trophy, setting up a mouth-watering final clash.</p>
          </div>
        </div>
        <div className="domestic-news-card">
          <img src="./newsdomestic/tamil-nadu-cricket1-1732094487.jpeg.jpg" alt="News" className="domestic-news-img" />
          <div className="domestic-news-text">
            <p className="domestic-news-date">27 Feb 2025</p>
            <h4 className="domestic-news-heading">Syed Mushtaq Ali Trophy: Karnataka Wins in a Nail-Biter!</h4>
            <p>In a last-ball thriller, Karnataka edged past Tamilnadu to lift the Syed Mushtaq Ali Trophy in a high-octane T20 final.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default NewsSectiondomestic;
