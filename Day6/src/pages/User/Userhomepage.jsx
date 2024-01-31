// UserHomePage.js
import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../assets/css/userHomePage.css';
import User from '../User_Panel';

const UserHomePage = () => {
  // Sample data for demonstration
  const attendedEvents = 5;
  const upcomingEvents = 10;
  const registeredEvents = 8;

  // Sample data for the upcoming events table
  const upcomingEventsData = [
    { id: 1, name: 'Event 1', date: '2024-02-10' },
    { id: 2, name: 'Event 2', date: '2024-02-15' },
    { id: 3, name: 'Event 3', date: '2024-02-20' },
    // Add more events as needed
  ];

  // Sample data for the registered events calendar
  const registeredEventsDates = ['2024-02-10', '2024-02-15', '2024-02-20'];

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='userhome'>
    <User/>
    <center>
    <div className="user-homepage">
      <div className="widgets-container">
        <div className="widget">
          <Typography variant="h6">Attended Events</Typography>
          <Typography variant="h4">{attendedEvents}</Typography>
        </div>
        <div className="widget">
          <Typography variant="h6">Upcoming Events</Typography>
          <Typography variant="h4">{upcomingEvents}</Typography>
        </div>
        <div className="widget">
          <Typography variant="h6">Events Registered</Typography>
          <Typography variant="h4">{registeredEvents}</Typography>
        </div>
      </div>

      <div className="content-container">
        <div className="table-container">
          <Typography variant="h5" className="table-heading">
            Upcoming Events
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Event Name</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {upcomingEventsData.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.id}</TableCell>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="calendar-container">
          <Typography variant="h5">Event Calendar</Typography>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date, view }) =>
              view === 'month' &&
              registeredEventsDates.find((d) => d === date.toISOString().split('T')[0]) && (
                <div className="calendar-dot"></div>
              )
            }
          />
        </div>
      </div>
    </div>
    </center>
    </div>
  );
};

export default UserHomePage;
