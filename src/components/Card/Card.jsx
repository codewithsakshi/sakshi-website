import React from 'react';
import './Card.scss';

export default function Card(props) {
  return (
    <div className='project-item'>
      <div className='project-img'></div>
      <div className='project-info'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a
          href={props.projectUrl}
          target='_blank'
          rel='noreferrer'
          type='button'
          className='demo-btn'
        >
          Live demo
        </a>
      </div>
    </div>
  );
}
