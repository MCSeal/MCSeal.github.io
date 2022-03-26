import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [messaged, setMessaged] = useState(false);

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
          setMessaged(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let contactForm = (
    <div class="contact_form">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your name" />

        <input type="text" name="from_email" placeholder="Your email" />

        <textarea name="message" placeholder="Your Message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );

  if (messaged) {
    contactForm = (
      <div class="section-inner__contact">Thanks for the message.</div>
    );
  }

  return (
    <div class="contact" id="contact">
      <div class="section-inner__contact">
        <h2> Contact</h2>
        Feel free to use the form below to contact me, although it may not work
        over a firewall. I am also avaiable at MathewCSeal@gmail.com or through
        my Github account.
      </div>
      {contactForm}
    </div>
  );
};

export default Contact;
