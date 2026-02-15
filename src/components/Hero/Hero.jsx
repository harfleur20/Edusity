import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Education is the key to unlocking human potential and building a more equitable society. It empowers individuals with knowledge, critical thinking skills.</p>
        <button className="btn">Get Started <FaArrowRight className='arrow'/></button>
      </div>
    </div>
  )
}

export default Hero
