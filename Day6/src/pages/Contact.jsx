// ContactUs.js
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../assets/css/contact.css';
import NavBar from '../components/NavBar';
import contact from "../assets/images/contactus.webp"

function ContactUs() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic to handle the form submission, e.g., sending data to a server
    console.log('Form submitted:', { name, mobile, email, description });
  };

  return (
    <div className='contactus'>
    <NavBar/>
    <div className="contact-main">
      <form onSubmit={handleSubmit} className="contact-container">
        <div className="contact-left">
          <div className="form-group">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              id="mobile"
              label="Mobile"
              variant="outlined"
              fullWidth
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <IconButton type="submit" color="primary" className='sendicon'>
              <SendIcon />
            </IconButton>
          </div>
        </div>
        <div className="contact-right">
          <img src={contact} alt="Your Image" className="contact-image" />
        </div>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
