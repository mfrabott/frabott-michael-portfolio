import React, {useRef} from 'react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [contactName, setContactName] = useState('');
  const [reply_to, setReply_To] = useState('');
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'contactName'){
      return setContactName(value)
    } else if (name === 'reply_to') {
      return setReply_To(value)
    } else if (name === 'message'){
      return setMessage(value)
    };
  };
  
  const form = useRef();
  
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)

    e.preventDefault();
    if (!contactName.length) {
      setSentMessage(`Please leave your name so that I may respond to your message`) 
    } else if (!validateEmail(reply_to)){
      setSentMessage(`Please enter a valid email address so I may respond to your message`)
    } else if (!message.length) {
      setSentMessage(`Don't forget to write a message!`) 
      console.log(validateEmail(message.length))
    } else {
      emailjs.sendForm(`service_2f10bzu`, `template_b7ko3nt`, form.current, `8kkGqVO4U3fyEVn4P`)
      .then(function() {
        setSentMessage(`Your message was sent! I'll be in touch soon!`);
      }, function(error) {
        setSentMessage(`There was a problem sending your message - please contact me via one of the methods below!`);
      });
   }
  };

  return (
      <section className='contactPage'>
      <h2 className='section-heading'>Contact</h2>
      <section className='contactForm'>
        <form className="form" ref={form}>
          <input
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={reply_to}
            name="reply_to"
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
        <h3 className='sentMessage'>{sentMessage}</h3>
    </section>
  );
}

export default Contact;