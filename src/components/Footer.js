import React from 'react';
import '../styles/style.css'

export default function Header() {
  return (
    <section className="contact-info" id="contact-info">
      <ul>
        <li><span className="contact-link"><a href="mailto: michael.frabott@gmail.com">Write</a></span> | michael.frabott@gmail.com</li>
        <li><span className="contact-link"><a href="tel:6143063071">Dial</a></span> | (614) 306-3071</li>
        <li><span className="contact-link"><a href="https://www.linkedin.com/in/michael-frabott">Connect</a></span> | LinkedIn</li>
      </ul>
    </section>
  );
}
