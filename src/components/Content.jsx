import React, { useEffect } from 'react';
import '../styles/content.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content = ({ title, description, imgsrc, alignment }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={
        alignment % 2 === 0 ? 'content-div leftAlign' : 'content-div rightAlign'
      }
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="content-left">
        <img src={imgsrc} alt="" />
      </div>
      <div className="content-right">
        <div className="content-heading">
          <p>{title}</p>
        </div>
        <div className="content-detail">
          {description.map((desc, idx) => {
            return <p key={idx}>{desc}</p>;
          })}
        </div>
        <button className="content-button">Read More</button>
      </div>
    </div>
  );
};

export default Content;
