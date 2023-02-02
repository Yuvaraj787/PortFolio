import { useState } from 'react';
import { Box, Button } from '@mui/material';
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
  const [exit,setExit] = useState("");
  const [fullScreen,SetFull] = useState(true);
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar' style={{backgroundColor:"rgb(77,77,77)",fontFamily:"'Ubuntu Mono', monospace"}}>
        <Toolbar variant="dense">
          <Typography  variant="h6"  component="div">
           <span className='top-head'> PortFolio</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {fullScreen ? 
      <>
    <Box className="head-container" alignItems="center" justifyContent="center" >
      <h1 className='text-head'>Yuvaraj Vetrivel</h1>
      <div className="App">
          <Typed className="animate-text" strings={["Programmer","Programmer","Front-End Developer"]} typeSpeed={120} loop />
      </div>
    </Box>
    <div className='parent-box'>
      <div className='c-box'>
      {(exit=="") ?
        <CBox  fvalue={fullScreen} evalue={exit} toggleButton={setExit} minimize={SetFull} />
       : <Button onClick={()=>setExit("")} style={{color:"white",backgroundColor:"rgb(77,77,77)"}} >Open Terminal</Button>
       }
      </div> 
    </div>
    </> : <div style={{border:"2px solid white",borderRadius:"10px 10px 0 0"}}><CBox fvalue={fullScreen} toggleButton={setExit} minimize={SetFull} /></div>}
    </div>
  )
}

export default App
