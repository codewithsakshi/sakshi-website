import React from 'react';
import './hero.scss';

export default function Hero() {
  return (
    <div id='hero'>
      <div className='hero container'>
        <div>
          <h1>
            Hello,<span></span>
          </h1>
          <h1>
            My Name is<span></span>
          </h1>
          <h1 className='sakshi'>
            Sakshi<span></span>
          </h1>
          <button className='portfolio-btn'>
            <a href='#projects'>Portfolio</a>
          </button>
        </div>
      </div>
    </div>
  );
}
