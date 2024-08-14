import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import projects from '../data/projects';
import Card from './Card/Card'; // Ensure Card component is compatible with Material-UI

export default function ProjectCard() {
  const cards = projects.map((item) => (
    <Card
      title={item.title}
      description={item.description}
      projectUrl={item.projectUrl}
      imageUrl={item.imageUrl}
      key={item.title}
    />
  ));

  return (
    <Box id='work' sx={{ padding: '20px' }}>
      <Typography variant='h4' component='h5'align='center' sx={{ margin: '100px auto 50px auto', fontWeight: 'bold' }} style={{color: 'rgb(255, 255, 255)'}}>
        Projects
      </Typography>
      <Grid container spacing={4} display='flex' justifyContent='center'>
        {cards}
      </Grid>
    </Box>
  );
}

