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
            {/* I’ve been learning web development for some time and have created
            interesting projects to showcase my skill set. 
            <br />
             My strong skill set is HTML, CSS
            JavaScript, Basic ReactJS, and TailwindCSS. */}
            I am a Web Developer based in Gwalior, India with 6 months of experience in developing web applications with Javascript, Reactjs, and jquery,
            <br/>I am working on Eduvue brand of <a href="https://parakh.online/" style={{"color": "crimson", "text-decoration": "underline", "margin": "0 5px"}} target="_blank">Parakh</a>. It is a complete institute management solution for education institutes, i.e., schools, colleges, universities, coaching centers, tuition centers in India.
          </p>

          <a
            href='/sakshimittal_resume.pdf'
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
