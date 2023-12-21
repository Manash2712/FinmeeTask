import React from 'react';
import logo from '../assets/imgs/ntwistlight.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-services">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="footer-address">
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      </div>
      <div className="social-media">
        <i className="fa-brands fa-square-twitter fa-2xl"></i>
        <i className="fa-brands fa-linkedin fa-2xl"></i>
      </div>
      <div className="copyright">
        <p>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
