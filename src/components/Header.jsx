import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/header.css';
import Nav from './Nav';
import homeImageIcons from '../assets/imgs/homeImageIcons.png';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="header">
      <div className="nav-content">
        <Nav />
      </div>

      <div className="header-content">
        <div className="header-left">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <p>Data-powered solutions</p>
            <p> for Industrial Excellence</p>
          </div>
          <button className="header-button">Read More</button>
        </div>
        <div className="header-right">
          <img src={homeImageIcons} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
