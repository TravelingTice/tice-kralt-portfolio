import React from 'react';
import ContactForm from './ContactForm';

const Contact = props => (
  <section id="contact">
    <div className="title-container">
      <h2 className="title">
        <span className="grey-text">C</span>ontact
      </h2>
    </div>

    <ContactForm/>
  </section>
);

export default Contact;