import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import "../assets/css/home.css";
import { Button } from '@mui/material';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home() {
  // const images = [home1, home2, home3];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex(currentIndex => {
  //       if (currentIndex=== images.length - 1) {
  //         return 0;
  //       } else {
  //         return currentIndex + 1;
  //       }
  //     });
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div class="home">
      <NavBar />
      <div className='quotecontainer'>
      <h1 className='homequote'>Happiness lives inside smallest events</h1>
      <Button>Get Started</Button>
      </div>
      </div>
      );
    }
    
    export default Home;
    // <center>
    // <div className="image-container">
    //   <img src={images[currentIndex]} alt="images" />
    // </div>
    // </center>
