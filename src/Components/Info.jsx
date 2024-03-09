import React, { useState } from 'react';
import "./Info.css";

function Info() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className='info'>
      <a
        className={`name ${activeLink === 0 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(0)}
      >
        Overview
      </a>
      <a
        className={`name ${activeLink === 1 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(1)}
      >
        Fundamentals
      </a>
      <a
        className={`name ${activeLink === 2 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(2)}
      >
        News Insights
      </a>
      <a
        className={`name ${activeLink === 3 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(3)}
      >
        Sentiments
      </a>
      <a
        className={`name ${activeLink === 4 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(4)}
      >
        Team
      </a>
      <a
        className={`name ${activeLink === 5 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(5)}
      >
        Technicals
      </a>
      <a
        className={`name ${activeLink === 6 ? 'active' : ''}`}
        href="#"
        onClick={() => handleLinkClick(6)}
      >
        Tokenomics
      </a>
    </div>
  );
}

export default Info;
