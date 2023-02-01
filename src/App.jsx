import { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CBox from './contentBox';
import Typed from "react-typed";
function App() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"rgb(77,77,77)"}}>
        <Toolbar variant="dense">
          <Typography variant="h6"  component="div">
            PortFolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className="head-container" alignItems="center" justifyContent="center" >
      <h1 className='text-head'>Yuvaraj Vetrivel</h1>
      <div className="App">
          <Typed className="animate-text" strings={["Programmer","Front-End Developer"]} typeSpeed={120} loop />
      </div>
    </Box>
    <div className='parent-box'>
      <div className='c-box'>
        <CBox />
      </div>
    </div>
    </div>
  )
}

export default App
