import React, { useEffect, useCallback, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your updated CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import headerImage from '../assets/header.jpg'; 
import lpImage from '../assets/lp.JPG'; 
import lpImage2 from '../assets/lp2.jpg'; 
import lpImage3 from '../assets/lp3.jpg'; 
import logo from '../assets/gdc.png'; // Import the logo image

// Throttle function to optimize the scroll event
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll handler to hide/show header based on scroll direction
  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > lastScrollY.current) {
      setIsVisible(false); // Hide header on scroll down
    } else {
      setIsVisible(true);  // Show header on scroll up
    }
    lastScrollY.current = currentScrollY;
  }, []);

  // Apply the throttled scroll event listener
  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100); // Limit the scroll handler to fire every 100ms
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(prevState => !prevState);

  return (
    <>
      <header className={`header ${isVisible ? '' : 'hidden'}`}>
  <div className="header-container">
    {/* Logo */}
    <div className="logo">
      <img src={logo} alt="GREENERGY PH" className="logo-img" />
    </div>

    {/* Navigation */}
<nav className="nav-container">
  <ul className="nav-list1">
    <li className="nav-item dropdown">
      <a href="#" aria-label="Brands">BRANDS</a>
      <ul className="dropdown-content">
  <li><a href="https://www.facebook.com/greenergysolarph" target="_blank" rel="noopener noreferrer">GREENERGY SOLAR</a></li>
  <li><a href="/greenergy-mobility" target="_blank" rel="noopener noreferrer">GREENERGY MOBILITY</a></li>
  <li><a href="/greentech-solutions" target="_blank" rel="noopener noreferrer">GREENTECH SOLUTIONS</a></li>
  <li><a href="/greenergy-builders" target="_blank" rel="noopener noreferrer">GREENERGY BUILDERS</a></li>
  <li><a href="/greenergy-industrial" target="_blank" rel="noopener noreferrer">GREENERGY INDUSTRIAL <br></br>SERVICES</a></li>
</ul>

    </li>
    <li className="nav-item"><a href="/about" target="_blank" rel="noopener noreferrer">ABOUT US</a></li>
    <li className="nav-item"><a href="/contact" target="_blank" rel="noopener noreferrer">CONTACT US</a></li>
  </ul>
</nav>
    

    {/* Hamburger icon */}
    <FontAwesomeIcon 
      icon={faBars} 
      className="hamburger-icon" 
      onClick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
    />
  </div>
</header>

      {/* Sidebar Component */}
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          {/* Back Button */}
          <div className="sidebar-back-button">
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className="back-icon"
              onClick={toggleMobileMenu} // Close sidebar when back button is clicked
              aria-label="Close Sidebar"
            />
          </div>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-container">
    <div className="carousel-section">
        <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true}  // Enable infinite loop
            autoPlay={true}      // Enable auto sliding
            interval={3000}      // Interval between slides in milliseconds (3 seconds)
            stopOnHover={true}   // Stops sliding when hovered
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                    <li
                        className={`carousel-dot ${isSelected ? 'selected' : ''}`}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            <div className="image-container">
                <img src={headerImage} alt="Header Slide" />
            </div>
            <div className="image-container">
                <img src={lpImage} alt="Slide 2" />
            </div>
            <div className="image-container">
                <img src={lpImage2} alt="Slide 3" />
            </div>
            <div className="image-container">
                <img src={lpImage3} alt="Slide 4" />
            </div>
        </Carousel>
        <ButtonSection />
    </div>
</div>

    </>
  );
};

const ButtonSection = () => (
  <div className="buttons-overlay">
    <button aria-label="Our Products">OUR PRODUCTS</button>
    <button aria-label="Book with the Experts">BOOK WITH THE EXPERTS</button>
    <button aria-label="Get Quote">GET QUOTE</button>
  </div>
);

export default Header;
