import React, { useState } from "react";

import NavTabs from './components/NavTabs';
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from "./pages/Portfolio";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Custom theme for mui
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a6017',
    },
    secondary: {
      main: '#5e1760'
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
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Box sx={{ paddingBottom: 8 }}>
          {renderPage()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}