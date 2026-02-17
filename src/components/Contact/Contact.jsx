import React from 'react'
import './Contact.css'
import icon_message from "../../assets/msg-icon.png"
import icon_mail from "../../assets/mail-icon.png"
import icon_phone from "../../assets/phone-icon.png"
import icon_localiz from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={icon_message} alt="" /></h3>
        <p>Fell free to reach out through contact from or find our contact information bellow. our feedback, questions, and suggestions are important to us we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={icon_mail} alt="" />Contact@bdcbusinessschool.edu</li>
            <li><img src={icon_phone} alt="" />+467 123 25 877 74569</li>
            <li><img src={icon_localiz} alt="" />Deram Lip, Taiping <br /> TW 02214, Taiwan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
            <label htmlFor="">your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            
            <label htmlFor="">Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>sending</span>
      </div>
    </div>
  )
}

export default Contact
