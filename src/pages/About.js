import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import profileImg from '../assets/profile.JPG';

export default function About() {
  return (
    <Container maxWidth="sm" sx={{ marginY: 6 }}>
      <Paper elevation={16}>
        <Box padding={2}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Noah Brimhall" src={profileImg} sx={{ width: 64, height: 64 }}/>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
          </Stack>
          <Typography variant="body1" gutterBottom>
            I am a Full Stack Web Developer with a certificatefrom the University of Utah Web Development Bootcamp where I developed skills in JavaScript, React.js, databases, responsive web design, and more. I am a great team player and am always excited to learn new things. 
          </Typography>
          <Typography variant="body1" gutterBottom>
            During the bootcamp my team created Connect With Me, a social media/job search application built with React and Apollo GraphQL. I worked to add features and improve the user experience while creating a clean and responsive site.  
          </Typography>
          <Typography variant="body1" gutterBottom>
            I enjoy coding, Riding my bike, and playing videogames!  I have two cats, Chowder and Louise.  I love Javascript and I think React is super cool!
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}
