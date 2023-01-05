import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container maxWidth="sm" sx={{ marginY: 6 }}>
      <Paper elevation={16}>
        <Box padding={2}>
          <Typography variant="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            I am learning fullstack development from the University of Utah Web Development Bootcamp.  I enjoy coding, Riding my bike, and playing videogames!  I have two cats, Chowder and Louise.  I love Javascript and I think React is super cool!
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}
