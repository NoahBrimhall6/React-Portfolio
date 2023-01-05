import React from 'react'

import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ project }) {
  return (
    <Grid sm={12} md={6} lg={4}>
      <Card elevation={12}>
      <CardMedia
        sx={{ height: 260 }}
        image={project.img}
        title="Connect With Me"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">{project.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="large" href={project.github}>GitHub</Button>
        <Button size="large" href={project.deployed}>Deployed</Button>
      </CardActions>
      </Card>
    </Grid>
  )
}