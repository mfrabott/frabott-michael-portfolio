import React from 'react';
import avatar from '../../assets/images/frabott-wave-2.gif'

export default function About() {
  return (
    <section className="bio container">
      
      <div className='avatarContainer'>
        <img className="avatar" src={avatar} height={150} width={150} alt="Animated graphic of person with glasses in a white hoodie waving."></img>
      </div>
      <div className='contentBorder'>
      <h2 className='section-heading'>About</h2>
        <p>I've taken the winding road to get where I am today, but the growth from that journey has prepared me for anything and everything that lies ahead. </p>
          
        <p>Forever needing to be challenged, I left a comfortable career as a paralegal in order to spend more time doing what I enjoy most - working through complex problems and building creative solutions. As a puzzle enthusiast and life-long learner, it has taken no time at all to find web development to be a natural fit.</p>
                
        <p>I look forward to bringing my attention to detail, eagerness to learn, and ability to balance independent work and collaboration to an environment where I can both push myself and contribute to the development of innovative and useful applications. </p>

        <p>Reach out below - I look forward to discussing how we can build something together!</p>
      </div>
    </section>
  );
}
