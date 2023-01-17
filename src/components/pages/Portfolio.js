import React from 'react';
import ProjectCard from '../ProjectCard'
import myProjects from '../projectsAPI'

export default function Portfolio() {
  return (
    <section className='projects'>
      <h2 className='section-heading'>Projects</h2>
      <div className="container">
      
      <div className="list-group">

          <ProjectCard ProjectList={myProjects} />

      </div>
    </div>
    </section>
  );
}
