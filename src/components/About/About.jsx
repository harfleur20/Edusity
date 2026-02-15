import React from 'react'
import about_img1 from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css'

const About = () => {
  return (
    <div className='about container'>
      <div className="about-left">
        <img src={about_img1} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow Leaders Today</h2>
        <p>Our university is dedicated to providing high-quality education and fostering innovation. We aim to develop leaders who are not only skilled in their fields but also committed to making a positive impact on society.</p>
        <p>
        With a diverse range of programs and a supportive community, we empower our students to achieve their full potential and contribute to a better future. Join us in our mission to nurture tomorrow's leaders today.     
        </p>    
      </div>
    </div>
  )
}

export default About
