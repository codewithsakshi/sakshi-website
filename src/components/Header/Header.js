import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // const handleSetActive = () => {
  //   console.log('handle set Active');
  //   setIsVisible(false);
  // };
  return (
    <div id='header'>
      <div className='header container'>
        <div className='nav-bar'>
          <div className='brand'>
            <Link to='hero' smooth={true} spy={true}>
              {' '}
              <span>s</span>akshi <span>m</span>ittal
            </Link>
          </div>
          <nav className='nav-list'>
            <div className='hamburger' onClick={handleClick}>
              <div className='bar'></div>
            </div>
            <ul
              className={`header-links ${isVisible === true ? 'active' : ''}`}
            >
              <li>
                {/* <a href='#hero' data-after='home'>
                  home
                </a> */}
                <Link to='hero' smooth={true} onClick={handleClick} spy={true}>
                  Home
                </Link>
              </li>
              {/* <li>
                <a href='#services' data-after='services'>
                  services
                </a>
                <Link to='services' smooth='true'>
                  Services
                </Link>
              </li> */}
              <li>
                {/* <a href='#projects' data-after='projects'>
                  projects
                </a> */}
                <Link
                  to='projects'
                  smooth={true}
                  spy={true}
                  onClick={handleClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                {/* <a href='#about' data-after='about'>
                  about
                </a> */}
                <Link to='about' smooth={true} onClick={handleClick} spy={true}>
                  About
                </Link>
              </li>
              <li>
                {/* <a href='#contact' data-after='contact'>
                  contact
                </a> */}
                <Link
                  to='contact'
                  smooth={true}
                  spy={true}
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
