import React, { useEffect, useCallback, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import headerImage from '../assets/header.jpg';
import lpImage from '../assets/lp.JPG';
import lpImage2 from '../assets/lp2.jpg';
import lpImage3 from '../assets/lp3.jpg';
import logo from '../assets/gdc.png';

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};

// Throttle function to optimize scroll performance
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
  const scrollToSection = useSmoothScroll();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger-icon')) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`header ${isVisible ? '' : 'hidden'}`}>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="GREENERGY PH logo" className="logo-img" loading="lazy" />
          </div>

          <nav className="nav-container">
            <ul className="nav-list1">
              <li className="nav-item dropdown">
  <a style={{ cursor: 'pointer' }}>BRANDS</a>
  <ul className="dropdown-content">
    <li>
      <a href="https://www.facebook.com/greenergysolarph" target="_blank" rel="noopener noreferrer">GREENERGY SOLAR</a>
    </li>
    <li>
      <Link to="/greenergy-mobility">GREENERGY MOBILITY</Link>
    </li>
    <li>
      <Link to="/greentech-solutions">GREENTECH SOLUTIONS</Link>
    </li>
    <li>
      <Link to="/greenergy-builders">GREENERGY BUILDERS</Link>
    </li>
    <li>
      <Link to="/greenergy-industrial">GREENERGY INDUSTRIAL SERVICES</Link>
    </li>
  </ul>
</li>

              <li className="nav-item">
                <a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>ABOUT US</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>CONTACT US</a>
              </li>
            </ul>
          </nav>

          <FontAwesomeIcon 
            icon={faBars} 
            className="hamburger-icon" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle mobile menu"
          />
        </div>
      </header>

      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <div className="sidebar-back-button">
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className="back-icon"
              onClick={toggleMobileMenu} 
              aria-label="Close Sidebar"
            />
          </div>
          <ul>
            <li><a onClick={() => { scrollToSection('home'); toggleMobileMenu(); }} style={{cursor: 'pointer'}}>Home</a></li>
            <li><a onClick={() => { scrollToSection('about'); toggleMobileMenu(); }} style={{cursor: 'pointer'}}>Book An Expert</a></li>
            <li><a onClick={() => { scrollToSection('contact'); toggleMobileMenu(); }} style={{cursor: 'pointer'}}>Aftersales</a></li>
          </ul>
        </nav>
      </div>

      <div className="content-container">
        <div className="carousel-section">
          <Carousel 
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            transitionTime={800}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => (
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
            )}
          >
            <div className="image-container">
              <img src={headerImage} alt="Header Slide" loading="lazy" />
            </div>
            <div className="image-container">
              <img src={lpImage} alt="Slide 2" loading="lazy" />
            </div>
            <div className="image-container">
              <img src={lpImage2} alt="Slide 3" loading="lazy" />
            </div>
            <div className="image-container">
              <img src={lpImage3} alt="Slide 4" loading="lazy" />
            </div>
          </Carousel>
          <ButtonSection scrollToSection={scrollToSection} />
        </div>
      </div>
    </>
  );
};

const ButtonSection = ({ scrollToSection }) => (
  <div className="buttons-overlay">
    <button 
      onClick={() => scrollToSection('products')} 
      aria-label="Our Products"
    >
      OUR PRODUCTS
    </button>
    <button 
      onClick={() => scrollToSection('book')} 
      aria-label="Book with the Experts"
    >
      BOOK WITH THE EXPERTS
    </button>
    <button 
      onClick={() => scrollToSection('quote')} 
      aria-label="Get Quote"
    >
      GET QUOTE
    </button>
  </div>
);

export default Header;