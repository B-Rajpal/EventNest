// import React from 'react';
// import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Button } from "@mui/material";
import "../assets/css/NavBar.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
// import Sidebar from '../components/Sidebar';
import "../assets/css/Sidebar.css"
import UserSidebar from '../components/UserSidebar';
import "../assets/css/userpanel.css"
import logo12 from "../assets/images/logofinal.png"


function User() {

  const[sidebar,SetSidebar]=useState(true);
  const SideBarActive=()=>{SetSidebar(!sidebar)};
    return (
      <body>
      <div class="nav">
      <img src={logo12} id="logo"/>
      <div class="navcontent">
      <Link to="/User" class="text"><Button variant="contained">Home</Button></Link>
      <Link to="/about" class="text"><Button variant="contained">About US</Button></Link>
      <Link to="/contact" class="text"><Button variant="contained">Contact</Button></Link>
      <Button onClick={SideBarActive}><ViewHeadlineIcon /></Button>
      <div className={sidebar?"side-active":"side"}>
      <UserSidebar/>
      </div>
      </div>
      </div>
      
      </body>
    );
  }
  
  export default User;