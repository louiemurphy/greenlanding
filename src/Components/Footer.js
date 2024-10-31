import React from 'react';
import './Footer.css';
import greenergy from '../assets/greenergy.png'; // Your Greenergy logo image
import icons from '../assets/icon.png'; // Your icons image (like certifications)
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from 'react-icons/fa'; // Import your icons

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="footer-top">
        {/* Subscription Form */}
        <div className="footer-subscribe">
          <input type="text" placeholder="Full name" className="subscribe-input" />
          <input type="email" placeholder="Email" className="subscribe-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        {/* Logo and Icons */}
        <div className="footer-left">
          
          <img src={icons} alt="Certifications" className="footer-icons certification-icons" />
        </div>

        {/* Contact Information */}
        <div className="footer-right">
          <h4>Address:</h4>
          <p>Oro Chamber Business Development Centre<br />
            Macapagal Drive (Petron), Brgy Sr. Augut<br />
            Pueblo De Oro Business Park<br />
            Carmen, Cagayan de Oro City</p>

          <h4>Contact Us:</h4>
          <p>(+63) 927 979 1555 (Globe)<br />
            (+63) 908 291 5451 (Smart)<br />
            (+63) 88 881 5250</p>

          <h4>Email Us:</h4>
          <p>info@greenergy.ph</p>

          {/* Social Icons */}
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
