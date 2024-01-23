// import React from 'react';
// import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import { Button } from "@mui/material";
import "../assets/css/NavBar.css"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
function Admin() {
    return (
        <body>
      <div class="nav">
      <img src={logo} id="logo"/>
      <div class="navcontent">
      <Link to="/" class="text"><Button variant="contained">Home</Button></Link>
      <Link to="/about" class="text"><Button variant="contained">About US</Button></Link>
      <Link to="/" class="text"><Button variant="contained">Conatact</Button></Link>
      <Link to="/login" class="text"><Button variant="contained">Login</Button></Link>
      </div>
      </div>
      </body>
    );
  }
  
  export default Admin;