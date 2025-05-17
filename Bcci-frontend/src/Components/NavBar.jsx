import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [activePage, setActivePage] = useState("Home");
    const location = useLocation();
    const navigate = useNavigate();

    // Check if we're on domestic page and set toggle accordingly
    useEffect(() => {
        const isDomesticPath = location.pathname.startsWith('/domestic');
        setIsToggled(isDomesticPath);
    }, [location.pathname]);

    // Update active page based on current URL path
    useEffect(() => {
        if (location.pathname === "/" || location.pathname.startsWith('/domestic')) {
            setActivePage("Home");
        } else if (location.pathname === "/about-us") {
            setActivePage("About");
        } else if (location.pathname === "/login" || location.pathname === "/register") {
            setActivePage("Login");
        } else if (location.pathname === "/rankings") {
            setActivePage("Rankings");
        }
    }, [location]);

    // Keep the scroll handling for when we're on the home page
    useEffect(() => {
        if (location.pathname !== "/" && !location.pathname.startsWith('/domestic')) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Define sections to track
            const sections = [
                { id: "home", name: "Home" },
                { id: "players", name: "Players" },
                { id: "matches", name: "Matches" },
                { id: "news", name: "News" },
                { id: "honours", name: "Honours" }
            ];
            
            // Determine which section is currently visible
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && scrollPosition >= section.offsetTop - 100) {
                    setActivePage(sections[i].name);
                    break;
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Set initial state
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const toggleSlider = () => {
        const newToggleState = !isToggled;
        setIsToggled(newToggleState);
        
        // Route to appropriate page based on toggle state
        if (newToggleState) {
            // If we're toggling to Domestic
            let domesticPath = '/domestic';
            
            // If we're on a specific page, maintain equivalent page in domestic
            if (location.pathname !== '/') {
                const currentPath = location.pathname.replace('/domestic', '');
                if (currentPath !== '/') {
                    domesticPath = `/domestic${currentPath}`;
                }
            }
            navigate(domesticPath);
        } else {
            // If we're toggling to International
            let internationalPath = '/';
            
            // If we're on a specific domestic page, go to equivalent international page
            if (location.pathname !== '/domestic') {
                internationalPath = location.pathname.replace('/domestic', '');
            }
            navigate(internationalPath);
        }
    };

    const handleNavClick = (pageName) => {
        setActivePage(pageName);
        
        if (pageName === "About" || pageName === "Login" || pageName === "Rankings") {
            // Navigation to About/Login/Rankings will be handled by React Router Link
            return;
        }
        
        if (pageName === "Home" && location.pathname !== "/" && location.pathname !== "/domestic") {
            // Navigation to Home will be handled by React Router Link
            return;
        }
        
        // Only scroll behavior for home page sections
        if (location.pathname === "/" || location.pathname === "/domestic") {
            // Convert page name to lowercase ID
            const targetId = pageName.toLowerCase();
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Get navbar height for offset calculation
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 75;
                
                // Calculate the target scroll position with an offset
                const targetPosition = targetElement.offsetTop - navbarHeight - 10;
                
                // Scroll to the element
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    // Determine base path prefix based on current mode
    const getBasePath = () => isToggled ? '/domestic' : '';

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/ScrollImages/BCCI_logo.png" alt="BCCI Logo" />
            </div>
            <div className="Slider-part">
                <p>International</p>
                <div className={`main-slider ${isToggled ? "active" : ""}`} onClick={toggleSlider}>
                    <div className="slider-circle"></div>
                </div>
                <p>Domestic</p>
            </div>
            <div className="nav-links">
                <Link 
                    to={`${getBasePath()}/`} 
                    className={activePage === "Home" ? "active" : ""} 
                    onClick={() => handleNavClick("Home")}
                >
                    Home
                </Link>
                <p 
                    className={activePage === "Matches" ? "active" : ""} 
                    onClick={() => handleNavClick("Matches")}
                >
                    Matches
                </p>
                <p 
                    className={activePage === "News" ? "active" : ""} 
                    onClick={() => handleNavClick("News")}
                >
                    News
                </p>
                <p 
                    className={activePage === "Players" ? "active" : ""} 
                    onClick={() => handleNavClick("Players")}
                >
                    Players
                </p>
                <p 
                    className={activePage === "Honours" ? "active" : ""} 
                    onClick={() => handleNavClick("Honours")}
                >
                    Honours
                </p>
                <Link 
                    to={`${getBasePath()}/rankings`} 
                    className={activePage === "Rankings" ? "active" : ""} 
                    onClick={() => handleNavClick("Rankings")}
                >
                    Rankings
                </Link>
                <Link 
                    to="/about-us" 
                    className={activePage === "About" ? "active" : ""} 
                    onClick={() => handleNavClick("About")}
                >
                    About
                </Link>
                <Link 
                    to="/login" 
                    className={`login-button ${activePage === "Login" ? "active" : ""}`} 
                    onClick={() => handleNavClick("Login")}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;