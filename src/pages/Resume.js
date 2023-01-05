import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function Resume() {
  const download = () => {
    const texts = [
      "Resume", 
      "Frontend Proficencies", 
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "TailwindCSS",
      "MaterialUI",
      "Backend Proficencies",
      "APIs",
      "Node.js",
      "Express.js",
      "SQL",
      "noSQL",
      "mongoDB",
      "Apollo",
      "GraphQL"
    ];

    const file = new Blob([texts.join('\n')], {type: 'text/plain'});
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "NoahBrimhallResume-" + Date.now() + ".txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container maxWidth="sm" sx={{ marginY: 6 }}>
      <Paper elevation={12}>
        <Box padding={2}>
          <Button variant="contained" onClick={download} sx={{ marginBottom: 2 }}>Download Resume</Button>
          <Typography variant="h3" gutterBottom>
            Frontend Proficencies
          </Typography>
          <Typography variant="h5">HTML</Typography>
          <Typography variant="h5">CSS</Typography>
          <Typography variant="h5">JavaScript</Typography>
          <Typography variant="h5">React</Typography>
          <Typography variant="h5">Bootstrap</Typography>
          <Typography variant="h5">TailwindCSS</Typography>
          <Typography variant="h5">MaterialUI</Typography>

          <Divider sx={{ marginY: 3 }}/>

          <Typography variant="h3" gutterBottom>
            Backend Proficencies
          </Typography>
          <Typography variant="h5">APIs</Typography>
          <Typography variant="h5">Node.js</Typography>
          <Typography variant="h5">Express.js</Typography>
          <Typography variant="h5">SQL</Typography>
          <Typography variant="h5">noSQL</Typography>
          <Typography variant="h5">mongoDB</Typography>
          <Typography variant="h5">Apollo</Typography>
          <Typography variant="h5">GraphQL</Typography>
        </Box>
      </Paper>
    </Container>
  )
}
