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

    // TODO: add message 
    //Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'contactName' ? setContactName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setContactName('');
    setEmail('');
  };

  return (
    <div>
      {/* <p> */}
        {/* Hello {firstName} {lastName} */}
      {/* </p> */}
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
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;