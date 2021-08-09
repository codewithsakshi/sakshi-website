import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div id='about'>
      <div className='about container'>
        <div className='col-left'>
          <div className='about-img'>
            <img src='profileImg.jpg' alt='img' />
          </div>
        </div>
        <div className='col-right'>
          <h1 className='section-title'>
            About <span>me</span>
          </h1>
          <h2>Front End Developer</h2>
          <p>
            Hello, Recently i'm learning Web development & very passionate about
            Web development and strive to better myself as a Developer.
            <br />
            Learning to Program is hard. It's difficult to know where to start,
            but it's even more challenging to know what to do when you have'nt
            learned the basics.
          </p>
          <button>
            <a href='/sakshi_resume.pdf' className='cta' target='_blank'>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
