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
    desc: 'My second fullstack group application. This is my flagship project built with the MERN stack.',
    github: 'https://github.com/NoahBrimhall6/Connect-With-Me',
    deployed: 'https://connect-with-me.herokuapp.com/'
  },
  {
    img: CodeQuizImg,
    title: 'Code Quiz',
    desc: 'A simple timed coding quiz',
    github: 'https://github.com/NoahBrimhall6/Code-Quiz',
    deployed: 'https://noahbrimhall6.github.io/Code-Quiz/'
  },
  {
    img: NeighborhoodShopperImg,
    title: 'Neighborhood Shopper',
    desc: 'My first fullstack group application. A sort of online neighborhood yardsale.',
    github: 'https://github.com/NoahBrimhall6/Neighborhood-Shopper',
    deployed: 'https://calm-garden-83557.herokuapp.com/'
  },
  {
    img: WeatherDashboardImg,
    title: 'Weather Dashboard',
    desc: 'A realtime weather dashboard application.',
    github: 'https://github.com/NoahBrimhall6/Weather-Dashboard',
    deployed: 'https://noahbrimhall6.github.io/Weather-Dashboard/'
  },
  {
    img: WorkdaySchedulerImg,
    title: 'Workday Schedualer',
    desc: 'A todo list style schedualing application.',
    github: 'https://github.com/NoahBrimhall6/work-day-scheduler',
    deployed: 'https://noahbrimhall6.github.io/work-day-scheduler/'
  },
  {
    img: TheTechBlogImg,
    title: 'The Tech Blog',
    desc: 'A fullstack blogging application built with bootstrap and express with a MYSQL server.',
    github: 'https://github.com/NoahBrimhall6/Tech-Blog',
    deployed: 'https://whispering-savannah-24297.herokuapp.com/'
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
