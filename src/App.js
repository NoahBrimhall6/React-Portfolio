import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from './components/NavTabs';
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from "./pages/Portfolio";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a6017',
    },
    background: {
      default: '#dedede'
    },
    text: {
      secondary: 'rgb(0,0,0,0.9)'
    },
    action: {
      hoverOpacity: 0.2
    },
    divider: 'rgba(0,0,0,0.4)'
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', position: 'relative' }}>
          <NavTabs />
          <Box sx={{ paddingBottom: 8 }}>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}