import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [messaged, setMessaged] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    setErrorMessage('');

    emailjs
      .sendForm(
        'service_z8k5988',
        'template_kldkfu7',
        form.current,
        'user_X8LWO291XauTmr8oabYZo'
      )
      .then(
        () => {
          setMessaged(true);
          form.current.reset();
        },
        () => {
          setErrorMessage('The form did not send. Please email me directly instead.');
        }
      );
  };

  return (
    <section className="contact-section section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-grid">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-heading" id="contact-title">Let’s connect about web development work.</h2>
          <p className="section-lede">
            Use the form below or reach me directly by email or GitHub. I’m open to web development roles and project conversations.
          </p>
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:MathewCSeal@gmail.com">MathewCSeal@gmail.com</a>
            <a href="https://www.linkedin.com/in/mathewseal/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/MCSeal" target="_blank" rel="noreferrer">GitHub profile</a>
          </div>
        </div>

        <div className="contact-card card">
          {messaged ? (
            <p className="form-status" role="status">Thanks for the message. I’ll get back to you soon.</p>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="from_name">Your name</label>
                <input id="from_name" type="text" name="from_name" autoComplete="name" required />
              </div>

              <div className="form-field">
                <label htmlFor="from_email">Your email</label>
                <input id="from_email" type="email" name="from_email" autoComplete="email" required />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required />
              </div>

              {errorMessage && <p className="form-error" role="alert">{errorMessage}</p>}
              <button className="button" type="submit">Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
