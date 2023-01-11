import React from 'react';
import avatar from '../../assets/images/frabott-wave-2.gif'

export default function About() {
  return (
    <section className="bio">
      
      <div className='avatarContainer'>
        <img className="avatar" src={avatar} height={150} width={150} alt="Animated graphic of person with glasses in a white hoodie waving."></img>
      </div>
      <h2 className='section-heading'>About Me</h2>
      
      <p>After enjoying a successful career working as a paralegal, I recently decided to embark on a new challenge to become a web developer. While my role and responsibilities in my most recent position continued to expand, I realized that I wanted to spend more time focusing on the aspects of my job that I enjoyed and excelled at the most - working through technical questions and logic problems and expanding on opportunities to be more creative. With a skill set directly transferable from my legal background and the foundation I have worked to build in Ohio State University’s Full-Stack Program, I have already found web  development to be a great personal fit early on in my new career trajectory.</p>
      
      <p>Dealing primarily with oil and gas matters, I have assisted hundreds of landowners in the negotiation of comprehensive leases and easement agreements and helped develop and implement winning strategies in complex litigation in state, federal, and appellate courts. Notably, I oversaw the management of a putative class-action trespass case with over 1,000 members and encompassing roughly 30,000 acres of affected land.</p> 
          
      <p>I look forward to bringing my attention to detail, eagerness to learn, and ability to balance independent work and collaboration to a new environment where I can both push myself and contribute to the development of innovative and useful applications. </p>

      <p>I am currently enrolled in the Ohio State University/2U, Inc. Full-Stack Bootcamp, which I will complete in January 2023. I earned a B.A. in Sociology and Criminology from The Ohio State University in 2011 and a Paralegal Certificate from Capital University Law School in 2014.</p>

      <p>Reach out below - I look forward to discussing how we can build something together!</p>

    </section>
  );
}
