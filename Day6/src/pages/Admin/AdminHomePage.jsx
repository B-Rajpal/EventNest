// AdminHomePage.js
import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, InputAdornment } from '@mui/material';
import Admin from './Admin_Panel';
import "../../assets/css/adminHomePage.css"

const AdminHomePage = () => {
  // Sample data for demonstration
  const numberOfEvents = 15;
  const numberOfVenues = 5;

  // Sample data for the table
  const adminTableData = [
    { id: 1, eventName: 'Event A', venue: 'Venue 1', participants: 100 },
    { id: 2, eventName: 'Event B', venue: 'Venue 2', participants: 150 },
    { id: 3, eventName: 'Event C', venue: 'Venue 3', participants: 120 },
    // Add more data as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('eventName'); // Default filter criteria

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const filteredAdminTableData = adminTableData.filter((event) =>
    event[filterCriteria].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='admin-home'>
      <Admin />
      <center>
        <div className="admin-homepage">
          <div className="admin-widgets-container">
            <div className="admin-widget">
              <Typography variant="h6">Number of Events</Typography>
              <Typography variant="h4">{numberOfEvents}</Typography>
            </div>
            <div className="admin-widget">
              <Typography variant="h6">Number of Venues</Typography>
              <Typography variant="h4">{numberOfVenues}</Typography>
            </div>
          </div>

          <div className="admin-content-container">
            <div className="admin-search-filter-container">
              <TextField
                label="Search"
                value={searchQuery}
                onChange={handleSearch}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span role="img" aria-label="Search Icon">🔍</span>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                select
                label="Filter By"
                value={filterCriteria}
                onChange={handleFilterChange}
                variant="outlined"
                size="small"
                style={{ marginLeft: '10px' }}
              >
                <MenuItem value="eventName">Event Name</MenuItem>
                <MenuItem value="venue">Venue</MenuItem>
                {/* Add more filter criteria as needed */}
              </TextField>
            </div>

            <div className="admin-table-container">
              <Typography variant="h5" className="admin-table-heading">
                Event Details
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Event Name</TableCell>
                      <TableCell>Venue</TableCell>
                      <TableCell>Participants</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAdminTableData.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.id}</TableCell>
                        <TableCell>{event.eventName}</TableCell>
                        <TableCell>{event.venue}</TableCell>
                        <TableCell>{event.participants}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AdminHomePage;
