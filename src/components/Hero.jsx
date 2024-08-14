import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const HeroContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  textAlign: 'center',
  padding: '0 20px',
});

const HiText = styled(Typography)({
  fontSize: '1.25rem',
  color: 'rgb(100, 255, 218)',
  marginBottom: '10px',
});

const NameText = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'rgb(255, 255, 255)',
  marginBottom: '10px',
});

const DescriptionText = styled(Typography)({
  fontSize: '1.125rem',
  color: 'rgb(200, 200, 200)',
  maxWidth: '700px',
  marginTop: '10px'
});

const ResumeButton = styled('a')({
  marginLeft: '20px',
  backgroundColor: 'transparent',
  boxShadow: "none",
  color: 'rgb(100, 255, 218)',
  border: '1px solid rgb(100, 255, 218)',
  textTransform: "capitalize",
  padding: '8px 16px',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '3px',
  fontSize: '14px',
  padding: '15px 30px',
  marginTop: '40px',
  '&:hover': {
    opacity: "0.8",
  },
});

const Hero = () => {
  return (
    <HeroContainer id='hero'>
      <HiText>Hi, my name is</HiText>
      <NameText>Sakshi Mittal.</NameText>
      <DescriptionText>
        I'm a software developer based in Bengaluru, India with more than 3 years of experience in designing and developing large scale web applications with ReactJS, TypeScript, and Javascript.
      </DescriptionText>
      <ResumeButton href="mailto:sakshimittal3005@gmail.com" target="_blank" rel="noopener noreferrer">Get in touch</ResumeButton>
    </HeroContainer>
  );
};

export default Hero;
