import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z8k5988',
        'template_kldkfu7',
        form.current,
        'user_X8LWO291XauTmr8oabYZo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="contact" id="contact">
      <div class="section-inner">
        <h2> Contact</h2>
        Feel free to use the form below to contact me. I am also avaiable at
        MathewCSeal@gmail.com.
      </div>
      <div class="contact_form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your name" />

          <input type="text" name="from_email" placeholder="Your email" />

          <textarea name="message" placeholder="Your Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
