import React from 'react';
import { useState, useEffect } from 'react';


function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'contactName'){
      return setContactName(value)
    } else if (name === 'email') {
      return setEmail(value)
    } else if (name === 'message'){
      return setMessage(value)
    };
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

  };

  return (
      <section className='contactPage'>
      <h2 className='section-heading'>Contact</h2>
      <section className='contactForm'>
        <form className="form">
          <input
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea
            className='messageBox'
            value={message}
            name="message"
            onChange={handleInputChange}
            // type="textarea"
            placeholder="Send me a message!"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}

export default Contact;