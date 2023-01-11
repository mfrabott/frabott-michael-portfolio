import React from 'react';
import resumePDF from '../../assets/Frabott-Michael-Resume-2023.01.02.pdf';


export default function Resume() {
  return (
    <section className='resume'>
      <h2 className='section-heading'>Resume</h2>
      <p>Download <a className='pdf' href={resumePDF} download><span>PDF</span></a></p>
      <p><span className='topic'>Languages </span> | JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GraphQL </p>
      <p><span className='topic'>Applications </span> | GitHub, MongoDB, MySQL, Apollo</p>
      <p><span className='topic'>Tools </span> | React, Express, Node, Handlebars, Bootstrap</p>   
    </section>
  );
}
