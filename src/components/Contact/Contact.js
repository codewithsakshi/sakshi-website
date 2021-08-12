import React from 'react';
import './contact.scss';

export default function Contact() {
  return (
    <div id='contact'>
      <div className='contact container'>
        <div>
          <h1 className='section-title'>
            Contact <span>info</span>
          </h1>
        </div>
        <div className='contact-items-container'>
          {/* <div className='contact-item'>
            <div className='icon'>
              <img
                src='https://img.icons8.com/bubbles/100/000000/phone.png'
                alt='contact-icon'
              />
            </div>
            <div className='contact-info'>
              <h1>Phone</h1>
              <h2>Not Available</h2>
            </div>
          </div> */}
          <div className='contact-item'>
            <div className='icon'>
              <img
                src='https://img.icons8.com/bubbles/100/000000/new-post.png'
                alt='email-icon'
              />
            </div>
            <div className='contact-info'>
              <h1>Email</h1>
              <h2>sakshimittal3005@gmail.com</h2>
            </div>
          </div>
          <div className='contact-item'>
            <div className='icon'>
              <img
                src='https://img.icons8.com/bubbles/100/000000/map-marker.png'
                alt='address-icon'
              />
            </div>
            <div className='contact-info'>
              <h1>Address</h1>
              <h2>GandhiNagar, Gwalior, Madhya pradesh, India</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
