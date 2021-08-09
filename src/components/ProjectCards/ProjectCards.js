import React from 'react';
import projects from '../../data/projects';
import Card from '../Card/Card';

export default function ProjectCard() {
  const cards = projects.map((item) => (
    <Card
      title={item.title}
      description={item.description}
      projectUrl={item.projectUrl}
      key={item.title}
    />
  ));

  return (
    <div id='projects'>
      <h1 className='project-heading'>
        My recent <span>projects</span>
      </h1>
      <div className='projects-item-container'>{cards}</div>
    </div>
  );
}
