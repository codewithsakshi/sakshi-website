import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  colLeft: {
    border: "3px solid rgb(100, 255, 218)",
    width: "300px",
    height: "400px",
    marginBottom: "30px",
    marginRight: "100px",
  },
  aboutImg: {
    width: '300px',
    height: '400px',
    borderRadius: '3px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transform: 'translate(20px, -20px)',
    '@media (max-width: 500px)': {
      transform: 'translate(30px, -20px)',
    },
  }
}));

// Styled components
const AboutMeContainer = styled(Box)({
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1000px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
});

const ImageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const DescriptionContainer = styled(Box)({
  padding: '0 20px',
  textAlign: 'left',
  maxWidth: '600px', // Increased the width of the right section
  '& ul': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    marginTop: '20px',
    listStyleType: 'none',
  },
  '& li': {
    flex: '1 0 40%', // Allow two items per row
    boxSizing: 'border-box',
    marginBottom: '10px',
    padding: '0 10px',
    textAlign: 'left',
    position: 'relative',
    marginLeft: '10px',
    
    '&::before': {
      content: '"▹"',
      position: 'absolute',
      left: "-10px",
      top: '3px',
      color: 'rgb(100, 255, 218)',
      fontSize: '10px',
      lineHeight: '12px',
    }  
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <AboutMeContainer id="about">
      <SectionTitle style={{color: "rgb(255, 255, 255)"}}>About Me</SectionTitle>
      <Grid container spacing={4} alignItems="center" justifyContent="center" style={{marginTop: "20px"}}>
        <Grid xs={12} md={3.5} className={classes.colLeft}>
          <ImageContainer>
            <img
              src='/profileImg.jpeg'
              alt="Profile"
              className={classes.aboutImg}
            />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} md={7}>
          <DescriptionContainer>
            <Typography>
              I am a Web Developer based in Bangalore, India with three years of experience in developing web applications.
              <br /><br />
              I am working at the <a href="http://landmarkcares.in/" style={{ color: "rgb(100, 255, 218)", margin: "0 5px" }} target="_blank" rel="noopener noreferrer">Landmark Group of Technology</a> as a Frontend Developer.
              <br /><br />
              I aim to work as a Frontend Developer, applying my knowledge in the field of frontend design and development. I aspire to collaborate with a team of motivated individuals who are dedicated to the advancement of the company and its goals.
              <br /><br />
              Here are some of the skills and technologies I am proficient in:
            </Typography>
            <ul>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>CSS & HTML</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>jQuery</li>
            </ul>
          </DescriptionContainer>
        </Grid>
      </Grid>
    </AboutMeContainer>
  );
};

export default About;
