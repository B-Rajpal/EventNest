import { Button, TextField } from '@mui/material'
import "../assets/css/login.css"
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <center>
    <div class="login">
    <h1 id="logtit">Login</h1>
    <TextField id="standard-basic" label="Name" variant="filled" type="text"/><br/>
    <br/>
    <TextField id="standard-basic" label="Password" variant="filled" type="password"/>
    <br/>
    <Link to="/"><Button variant='contained'>Submit</Button></Link>
    <p>Don't have An Account?<Link to="/SignIn">Sign In</Link></p>
    </div>
    </center>
    </div>
  )
}

export default Login