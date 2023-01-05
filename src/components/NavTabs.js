import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavTabs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Noah Brimhall
          </Typography>
          <Button color="inherit" href='/'>About</Button>
          <Button color="inherit" href='/portfolio'>Portfolio</Button>
          <Button color="inherit" href='/resume'>Resume</Button>
          <Button color="inherit" href='/contact'>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
