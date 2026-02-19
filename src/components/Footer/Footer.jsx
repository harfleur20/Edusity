import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; {new Date().getFullYear()} BDC Business School. All rights reserved.</p>
      <ul>
        <li>Terms of services</li>
        <li>Policy</li>
      </ul>
    </div>
  )
}

export default Footer
