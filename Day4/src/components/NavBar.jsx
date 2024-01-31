// import React from 'react';
// import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import { Button } from "@mui/material";
import "../assets/css/NavBar.css"
import logo12 from "../assets/images/logofinal.png"
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <body>
      <div class="nav">
      <img src={logo12} id="logo"/>
      <div class="navcontent">
      <Link to="/" class="text"><Button variant="contained">Home</Button></Link>
      <Link to="/about" class="text"><Button variant="contained">About US</Button></Link>
      <Link to="/contact" class="text"><Button variant="contained">Contact</Button></Link>
      <Link to="/login" class="text"><Button variant="contained">Login</Button></Link>
      </div>
      </div>
      </body>
    );
  }
  
  export default NavBar;