import React, { useState } from 'react';
import '../styles/nav.css';
import logo from '../assets/imgs/ntwistlight.png';
import logoDark from '../assets/imgs/ntwistdark.png';

const Nav = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  {
    /*  added event-listner to change color or to make navbar transperent after scroll down*/
  }
  window.addEventListener('scroll', changeColor);
  return (
    <div className={color ? 'nav-div header-bg  ' : 'nav-div'}>
      <div className="nav-left">
        <div className="header-logo">
          <img src={color ? logoDark : logo} alt="ntwist-logo" />
        </div>
      </div>
      <div className="mob">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-items nav-selected">Home</li>
          <li className="nav-items">Industries</li>
          <li className="nav-items">AI Software</li>
          <li className="nav-items">Blog</li>
          <li className="nav-items">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
