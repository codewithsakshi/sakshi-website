import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div id='about'>
      <div className='about container'>
        <div className='col-left'>
          <div className='about-img'>
            <img src='/profileImg.jpeg' alt='img' />
          </div>
        </div>
        <div className='col-right'>
          <h1 className='section-title'>
            About <span>me</span>
          </h1>
          <h2>Front End Developer</h2>
          <p>
            I am a Web Developer based in Banglore, India with Two year of experience in developing web applications with HTML, CSS, Javascript, ReactJS, Tailwind CSS, and jquery.
            <br />I am working in <a href="http://landmarkcares.in/" style={{ "color": "crimson", "text-decoration": "underline", "margin": "0 5px" }} target="_blank">Landmark group of technology</a> as a Frontend developer
            <br />
            To work as a Frontend developer applying my
            knowledge in the field of Frontend design and
            development. I wish to work in a team of
            motivated individuals who wish to work towards
            the advancement of the company and its goals.
          </p>
          <a
            href="/resume.pdf"
            rel='noreferrer'
            className='cta resume-btn'
            target='_blank'

          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
