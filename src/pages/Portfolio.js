import React from 'react';
import ProjectCard from '../components/ProjectCard';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import ConnectWithMeImg from '../assets/ConnectWithMe.png';
import CodeQuizImg from '../assets/CodeQuiz.png';
import NeighborhoodShopperImg from '../assets/NeighborhoodShopper.png';
import WeatherDashboardImg from '../assets/WeatherDashboard.png';
import WorkdaySchedulerImg from '../assets/WorkdayScheduler.png';
import TheTechBlogImg from '../assets/TheTechBlog.png';

const projects = [
  {
    img: ConnectWithMeImg,
    title: 'Connect With Me',
    desc: '',
    github: '',
    deployed: ''
  },
  {
    img: CodeQuizImg,
    title: 'Code Quiz',
    desc: '',
    github: '',
    deployed: ''
  },
  {
    img: NeighborhoodShopperImg,
    title: 'Neighborhood Shopper',
    desc: '',
    github: '',
    deployed: ''
  },
  {
    img: WeatherDashboardImg,
    title: 'Weather Dashboard',
    desc: '',
    github: '',
    deployed: ''
  },
  {
    img: WorkdaySchedulerImg,
    title: 'Workday Schedualer',
    desc: '',
    github: '',
    deployed: ''
  },
  {
    img: TheTechBlogImg,
    title: 'The Tech Blog',
    desc: '',
    github: '',
    deployed: ''
  }
];

export default function Portfolio() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={6}>
        {projects.map((project) => <ProjectCard project={project}/>)}
      </Grid>
    </Container>
  )
}
