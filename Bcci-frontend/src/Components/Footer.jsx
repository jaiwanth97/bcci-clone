import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-logo">
              <img src="/ScrollImages/BCCI_logo.png" alt="BCCI Logo" />
              <div className="footer-logo-text">
                <h3>Board of Control for Cricket in India</h3>
                <p>Cricket House, 24 Wankhede Stadium</p>
                <p>'D' Road, Churchgate, Mumbai - 400020</p>
              </div>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com/IndianCricketTeam" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com/BCCI" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com/indiancricketteam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://youtube.com/BCCI" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
                <a href="https://linkedin.com/company/bcci" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-matches">Matches</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/rankings">Rankings</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Domestic Cricket</h4>
              <ul>
                <li><Link to="/domestic/ranji-trophy">Ranji Trophy</Link></li>
                <li><Link to="/domestic/vijay-hazare">Vijay Hazare Trophy</Link></li>
                <li><Link to="/domestic/syed-mushtaq-ali">Syed Mushtaq Ali Trophy</Link></li>
                <li><Link to="/domestic/irani-cup">Irani Cup</Link></li>
                <li><Link to="/domestic/duleep-trophy">Duleep Trophy</Link></li>
                <li><Link to="/domestic/coa">All Domestic Matches</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>International Cricket</h4>
              <ul>
                <li>Test Matches</li>
                <li>ODI Matches</li>
                <li>T20 Matches</li>
                <li>ICC Tournaments</li>
                <li>Bilateral Series</li>
                <li>All International Matches</li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li>
                  <Phone size={16} />
                  <span>+91-22-22800300</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>office@bcci.tv</span>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>Cricket Center, Wankhede Stadium, Mumbai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>© {new Date().getFullYear()} Board of Control for Cricket in India. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;