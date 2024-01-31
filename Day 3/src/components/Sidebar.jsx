import React from 'react'
import "../assets/css/Sidebar.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidepanel'>
    <Link to="/adminviewevents">
    <Button className='sidebutton'>View Events</Button></Link><br/>
    <Link to="/viewbookings">
    <Button className='sidebutton'>View Bookings</Button>
    </Link>
    <Link to="/profile">
    <Button className='sidebutton'>Profile</Button></Link>
    <Link to="/login">
    <Button className='sidebutton'>Logout</Button></Link>
    </div>
  )
}

export default Sidebar