import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./box.css";
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
export default function App() {
    const [value,setValue] = useState(0);
    const changeToZero = () => {
        setValue(0);
   }
   const changeToOne = () => {
       setValue(1);
   }
   const changeToTwo = () => {
       setValue(2);
   }
   const changeToThree = () => {
       setValue(3);
   }
    const createElement = (sideText,lineText) => {   
    return (
    <Stack direction="row"spacing={1}>
     <Typography className="c-text" style={{fontFamily:"'Ubuntu Mono', monospace",fontSize:"25px"}} sx={{color:"text.primary"}}>{sideText}</Typography>
     <Typography className="c-text" style={{fontFamily:"'Ubuntu Mono', monospace",fontSize:"25px"}} sx={{color:"inherit"}}>{lineText}</Typography>
    </Stack>
    )
  };
  return (
    <div className="t-box" style={{textAlign:"left"}}>
      <Tabs selectedIndex={value}>
    <TabList style={{backgroundColor:"rgb(77,77,77)",borderRadius:"10px 10px 0 0"}}>
      <Tab style={{fontFamily:"'Ubuntu Mono', monospace"}} onClick={changeToZero}>About</Tab>
      <Tab style={{fontFamily:"'Ubuntu Mono', monospace"}} onClick={changeToOne}>Skills</Tab>
      <Tab style={{fontFamily:"'Ubuntu Mono', monospace"}} onClick={changeToTwo} >Projects</Tab>
      <Tab style={{fontFamily:"'Ubuntu Mono', monospace"}} onClick={changeToThree}>Contact</Tab>
    </TabList>
    <TabPanel className="t-panel">
      <Typography>
        {createElement("PortFolio/About> $","Hi! I am Yuvaraj Vetrivel")}
        {createElement("PortFolio/About> $","Currently pursuing B.Tech IT in CEG, Anna university")}
        {createElement("PortFolio/About> $","Interested in Programming and Web Development")}
        {createElement("PortFolio/About> $",<button onClick={changeToOne}>cd ../Skills</button>)}
        {createElement("PortFolio/About> $",<button onClick={changeToTwo}>cd ../Projects</button>)}
        {createElement("PortFolio/About> $",<button onClick={changeToThree}>cd ../Contact</button>)}
      </Typography>
    </TabPanel>
    <TabPanel className="t-panel">
        {createElement("PortFolio/Skills> $","Programming Languages")}
        {createElement("PortFolio/Skills/Programming> $","# C/C++")}
        {createElement("PortFolio/Skills/Programming> $","# Python")}
        {createElement("PortFolio/Skills> $","Web Development | Front End")}
        {createElement("PortFolio/Skills/frontEnd> $","# HTML/CSS/JS")}
        {createElement("PortFolio/Skills/frontEnd> $","# React JS")}
        {createElement("PortFolio/Skills> $","Web Development | Back End")}
        {createElement("PortFolio/Skills/back-End> $","# Node JS")}
        {createElement("PortFolio/Skills/back-End> $","# MongoDB | PostgresSQL")}
        {createElement("PortFolio/Skills> $",<button onClick={changeToTwo}>cd ../Projects</button>)}
    </TabPanel>
    <TabPanel className="t-panel">
        <Stack>
        {createElement("PortFolio/Projects> $","ls")}
        {createElement("","1.Farmenience 2.College Review Site")}
        {createElement("PortFolio/Projects> $","vim Farmenience")}
        {createElement("~","TITLE : FARMENIENCE")}
        {createElement("~","DESCRIPTION : The Farmenience project aims toconnect farmers directly tomarkets, businesses,andoon-governmental organizations(NGOs) without the use of amiddleman.")}
        {createElement("~","ROLE : Front end Developer")}
        {createElement("PortFolio/Projects> $","vim College\\ Review\\ Site")}
        {createElement("~","TITLE : COllege Review App")}
        {createElement("~","DESCRIPTION : Web App to share comments and clarify doubts about colleges")}
        {createElement("PortFolio/Projects> $",<button onClick={changeToThree}>cd ../Contacts</button>)}
        
        </Stack>
    </TabPanel>
    <TabPanel className="t-panel">
        <Stack>
        {createElement("PortFolio/Contact> $",<span>Instagram : <a href='https://www.instagram.com/yuvaraj77877/'>@it_is_yuvi</a></span>)}
        {createElement("PortFolio/Contact> $",<span>Gmail : <a href='mailto:yuvarajv787@gmail.com'>yuvarajv787@gmail.com</a></span>)}
        {createElement("PortFolio/Contact> $",<><a href=''><TwitterIcon /></a><a href=''><LinkedInIcon /></a></>)}
        {createElement("PortFolio/Contact> $","Stay in touch 😊")}
        {createElement("PortFolio/Contact> $","Thanks for visiting here.")}

        </Stack>
    </TabPanel>
  </Tabs>
    </div>
  );
}