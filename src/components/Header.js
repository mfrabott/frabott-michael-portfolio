import React from 'react';
import headerImage from '../assets/images/frabott-wave-2.gif'


export default function Header() {
  return (
    <section className="name-avatar">
      <h1 className="gradient-text first-name">Michael</h1>
      <img className="avatar" src={headerImage} height={150} width={150} alt="Animated graphic of person with glasses in a white hoodie waving."></img>
      <h1 className="gradient-text last-name">Frabott</h1>
    </section>
  );
}
