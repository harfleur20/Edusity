import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navabar = () => {

  const [sticky, setSticky] = useState(false)
  
  useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll() 
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navabar
