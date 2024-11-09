import React from 'react';
import './Footer.css';
import green2 from '../assets/green2.png'; // Greenergy logo
import icons from '../assets/icon.png'; // Certification icons
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Subscription Form Section */}
      <div className="footer-top">
        <div className="footer-subscribe">
          <input type="text" placeholder="Full name" className="subscribe-input" />
          <input type="email" placeholder="Email" className="subscribe-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Main Footer Content Section */}
      <div className="footer-main">
        {/* Left Section: Logo and Certifications */}
        <div className="footer-left">
          <img src={green2} alt="Greenergy Logo" className="footer-logo" />
          <div className="footer-certifications">
            <img src={icons} alt="Certifications" className="certification-icons" />
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="footer-right">
          <h4>Address:</h4>
          <p>
            Oro Chamber Business Development Centre<br />
            Macapagal Drive (Petron), Brgy Sr. August<br />
            Pueblo De Oro Business Park<br />
            Carmen, Cagayan de Oro City, Philippines
          </p>

          <h4>Contact Us:</h4>
          <p>
            (+63) 927 979 1555 (Globe)<br />
            (+63) 908 291 5451 (Smart)<br />
            (+63) 88 881 5250
          </p>

          <h4>Email Us:</h4>
          <p>info@greenergy.ph</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaTiktok className="social-icon" />
            <FaEnvelope className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
