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
            I’ve been learning web development for some time and have created
            interesting projects to showcase my skill set. I'm looking for an
            entry-level job in the field.
            <br />
            Please do let me know if you come across any opportunities that fit
            my skillset. Thanks a lot. My strong skill set is HTML, CSS,
            JavaScript, Basic ReactJS, and TailwindCSS.
          </p>

          <a
            href='/sakshi_resume.pdf'
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
