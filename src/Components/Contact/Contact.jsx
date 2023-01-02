import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import { useRef } from "react"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ypxy4qj', 'template_vy69kfl', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        {/* right side  */}
        <div className="c-right">
            <form action='https://formspree.io/f/mzbwrare' method='POST'>
                <input type="text" name="user_name"  className="user" placeholder="Name" />
                <input type="email" name="user_email"  className="user" placeholder="Email" />
                <textarea type="message"  className="user" placeholder="Message" />
                <input type="submit" value="Send"  className="button" />
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact