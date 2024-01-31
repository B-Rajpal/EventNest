// BookingForm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/bookvenue.css'; // Import the CSS file for styling

function BookingForm() {
  const { eventName } = useParams(); // Access the event name from the URL parameters
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleBooking = () => {
    // Implement booking logic here (e.g., send data to a server)
    console.log(`Booking details for ${eventName}: ${fullName}, ${email}, Guests: ${guestCount}, Special Requests: ${specialRequests}`);
    // You may also want to redirect to a confirmation page or take other actions.
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form for {eventName}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="guestCount">Number of Guests:</label>
          <input
            type="number"
            id="guestCount"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            min="1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleBooking}>
          Book Now for {eventName}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
