// src/components/Footer.js

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Online Solution. All rights reserved.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
