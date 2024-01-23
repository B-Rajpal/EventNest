import { Button, TextField } from '@mui/material'
import "../assets/css/login.css"
import React from 'react'
import { Link } from 'react-router-dom'

function Sign_In() {
  return (
    <div>
    <center>
    <div class="login">
    <h1 id="logtit">Sign Up</h1>
    <TextField id="standard-basic" label="Name" variant="filled" type="text"/><br/>
    <br/>
    <TextField id="standard-basic" label="Email ID" variant="filled" type="email"/>
    <br/><br/>
    <TextField id="standard-basic" label="Password" variant="filled" type="password"/>
    <br/>
    <Link to="/"><Button variant='contained'>Submit</Button></Link>
    </div>
    </center>
    </div>
  )
}

export default Sign_In