import React from 'react';
import { Grid, IconButton, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#04293A', 
        margin: "80px -40px 0"
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '30px', color: 'white', fontWeight: 'bold' }}>
        Get in Touch
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        <Grid item>
          <IconButton
            component="a"
            href="https://github.com/codewithsakshi"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: 'rgb(100, 255, 218)',
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '14px' }}>GitHub</Typography>
        </Grid>
        <Grid item>
          <IconButton
            component="a"
            href="https://twitter.com/sakshimittal01"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: 'rgb(100, 255, 218)',
              },
            }}
          >
            <TwitterIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '14px' }}>Twitter</Typography>
        </Grid>
        <Grid item>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/sakshimittal01/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: 'rgb(100, 255, 218)',
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '14px' }}>LinkedIn</Typography>
        </Grid>
        <Grid item>
          <IconButton
            component="a"
            href="mailto:sakshimittal3005@gmail.com"
            sx={{
              color: 'white',
              '&:hover': {
                color: 'rgb(100, 255, 218)',
              },
            }}
          >
            <EmailIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '14px' }}>Email</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
