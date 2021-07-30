import React, { useState } from 'react';
// import './header.scss';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id='header'>
      <div className='header container'>
        <div className='nav-bar'>
          <div className='brand'>
            <a href='#hero'>
              <span>s</span>akshi <span>m</span>ittal
            </a>
          </div>
          <nav className='nav-list'>
            <div className='hamburger' onClick={handleClick}>
              <div className='bar'></div>
            </div>
            <ul
              className={`header-links ${isVisible === true ? 'active' : ''}`}
            >
              <li>
                <a href='#hero' data-after='home'>
                  home
                </a>
              </li>
              <li>
                <a href='#services' data-after='services'>
                  services
                </a>
              </li>
              <li>
                <a href='#projects' data-after='projects'>
                  projects
                </a>
              </li>
              <li>
                <a href='#about' data-after='about'>
                  about
                </a>
              </li>
              <li>
                <a href='#contact' data-after='contact'>
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
