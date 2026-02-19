import { useState } from 'react'
import './Contact.css'
import icon_message from "../../assets/msg-icon.png"
import icon_mail from "../../assets/mail-icon.png"
import icon_phone from "../../assets/phone-icon.png"
import icon_localiz from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/max'

const DEFAULT_COUNTRY = "FR";

const Contact = () => {
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!phone) {
      setPhoneError("Please enter your phone number.");
      setResult("");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number for the selected country.");
      setResult("");
      return;
    }

    setPhoneError("");
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("phone", phone);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setPhone(undefined);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={icon_message} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us.</p>
        <ul>
            <li><img src={icon_mail} alt="" />Contact@bdcbusinessschool.edu</li>
            <li><img src={icon_phone} alt="" />+467 123 25 877 74569</li>
            <li><img src={icon_localiz} alt="" />Deram Lip, Taiping <br /> TW 02214, Taivan</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>

            <label>Phone number</label>

            <PhoneInput
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                if (phoneError && value && isValidPhoneNumber(value)) {
                  setPhoneError("");
                }
              }}
              defaultCountry={DEFAULT_COUNTRY}
              international
              countryCallingCodeEditable={false}
              addInternationalOption={false}
              autoComplete="tel"
              className={`phone-input ${phoneError ? "phone-input-error" : ""}`}
              required
            />
            {phoneError && <small className="phone-error">{phoneError}</small>}

            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

            <button type='submit' className='btn dark-btn'>
              submit now <img src={white_arrow} alt="" />
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
