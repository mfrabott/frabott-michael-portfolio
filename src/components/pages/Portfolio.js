import React from 'react';
import ProjectList from '../Project'
import myProjects from '../projectsAPI'

export default function Portfolio() {
  return (
    <section className='projects'>
      <h2 className='section-heading'>Portfolio</h2>
      <div className="container">
      
      <div className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {/* {myProjects.map((project) => (
          <li className="list-group-item" key={project.id}>
            {project.title}
          </li> */}
        {/* ))} */}
          <p><ProjectList ProjectList={myProjects} /></p>

      </div>
    </div>
    </section>
  );
}
