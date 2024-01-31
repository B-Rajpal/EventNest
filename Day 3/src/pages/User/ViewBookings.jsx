// ViewBookings.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/ViewBookings.css"

const staticBookings = [
  { id: 1, eventName: 'EventA', fullName: 'John Doe', email: 'john@example.com' },
  { id: 2, eventName: 'EventB', fullName: 'Jane Smith', email: 'jane@example.com' },
  // Add more static bookings as needed
];

function ViewBookings() {
  return (
    <div>
      <h2>View Bookings</h2>
      {staticBookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul>
          {staticBookings.map((booking) => (
            <li key={booking.id}>
              <strong>{booking.eventName}</strong> - {booking.fullName}, {booking.email}
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default ViewBookings;
