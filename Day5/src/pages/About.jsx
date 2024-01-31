import React from 'react'
import NavBar from '../components/NavBar'
import "../assets/css/about.css"
import about from "../assets/images/about.webp"

function About() {
  return (
    <div className='about'>
      <NavBar/>
      <div className='aboutcontainer'>
      <div className='abouttext'>
        <h1 className='abouttitle'>About Us</h1>
        <p className='aboutcontent'>Welcome to Event Fest, where we specialize in transforming every event into an unforgettable celebration! At Event Fest, we take pride in our commitment to crafting unique and seamless experiences that leave a lasting impression. Whether it's a corporate gathering, a wedding, or a community fest, our dedicated team combines creativity and meticulous attention to detail. We bring a touch of magic to every occasion, ensuring that your vision becomes a reality. Choose Event Fest for innovation, personalized service, and the expertise to make your next event truly extraordinary.</p>
      </div>
      <div className='imagecontainer'>
      <img src={about} className='aboutimage'/>
      </div>
      </div>
    </div>
  )
}

export default About