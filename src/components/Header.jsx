import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavItems = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const NavButton = styled(Button)({
  color: 'rgb(136, 146, 176)',
  marginLeft: '20px',
  textTransform: "capitalize",
  '&:hover': {
    color: 'rgb(100, 255, 218)',
    backgroundColor: 'transparent'
  },
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
  fontSize: '12px',
  '&:hover': {
    opacity: "0.8",
  },
});

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (sectionId) => {
    setDrawerOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const drawerContent = (
    <Box
      sx={{ 
        width: '75vw', 
        height: '100%', 
        backgroundColor: 'rgb(23, 42, 69)', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'rgb(100, 255, 218)' }}>
          <CloseIcon sx={{ fontSize: '40px' }} />
        </IconButton>
      </Box>
      <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {['About', 'Work', 'Contact'].map((text) => (
          <ListItem 
            button 
            key={text} 
            onClick={() => handleNavClick(text.toLowerCase())} 
            sx={{ 
              color: 'rgb(136, 146, 176)', 
              textTransform: 'capitalize', 
              padding: '16px 0',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {text}
          </ListItem>
        ))}
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </ResumeButton>
      </List>
    </Box>
  );

  return (
    <TransparentAppBar position="static">
      <StyledToolbar>
        <Typography mt={2}> {/* Logo */}
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40px" width="40px">
            <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z" fill="rgb(100, 255, 218)"></path>
          </svg>
        </Typography>

        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: 'rgb(100, 255, 218)' }}
          >
            <MenuIcon sx={{ fontSize: '35px', marginTop: '10px', marginRight: '-12px' }} />
          </IconButton>
        ) : (
          <NavItems>
            <NavButton onClick={() => handleNavClick('about')}>About</NavButton>
            <NavButton onClick={() => handleNavClick('work')}>Work</NavButton>
            <NavButton onClick={() => handleNavClick('contact')}>Contact</NavButton>
            <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</ResumeButton>
          </NavItems>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent}
        </Drawer>
      </StyledToolbar>
    </TransparentAppBar>
  );
};

export default Header;
