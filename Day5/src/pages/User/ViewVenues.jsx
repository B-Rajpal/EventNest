import React from 'react';
import User from '../User_Panel';
import "../../assets/css/view-container.css";
import { Button, Rating } from '@mui/material';
import image from "../../assets/images/photo 2.webp"

function ViewVenues() {
  const venues = [
    
    {
      image: "",
      name: "Raj Mahal",
      rating: 4,
      Address: "123, ABC Street, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.",
      Mobile: "8957942089",
      cost:12000
    },
    {
      image: "",
      name: "Raj Mahal",
      rating: 4,
      Address: "123, ABC Street, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.",
      Mobile: "8957942089",
      cost:12000
    },
    {
      image: "",
      name: "Raj Mahal",
      rating: 4,
      Address: "123, ABC Street, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.",
      Mobile: "8957942089",
      cost:12000
    },
    {
      image: "",
      name: "Raj Mahal",
      rating: 4,
      Address: "123, ABC Street, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.",
      Mobile: "8957942089",
      cost:12000
    },
    {
      image: "",
      name: "Raj Mahal",
      rating: 4,
      Address: "123, ABC Street, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.",
      Mobile: "8957942089",
      cost:12000
    },
  ];

  

  return (
    <div className='background'>
    <User />
    <div className="viewvenue">
      {venues.map((venue, index) => (
        <div className='view-container'>
        <div key={index} className='view-container1'>
          <img src={image} alt={venue.name} />
          <div className='desc'>
            <h1 className='des-tit'>{venue.name}</h1>
            <Rating name="read-only" defaultValue={venue.rating}  readOnly/>
            <p>{venue.Mobile}</p>
            </div>
            <div className='Address'>
            <h2>Address:</h2>
            <p>{venue.Address}</p>
            </div><br/>
            </div>
            <div className='button'>
            <Button>Book Venue</Button>
            </div>
            </div>
      ))}
    </div>
    </div>
  );
}

export default ViewVenues;
