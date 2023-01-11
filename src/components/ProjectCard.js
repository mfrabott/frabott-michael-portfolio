import React from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg|gif)$/));
  
//   <img src={images['doggy.png']} />


// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function ProjectCard({ProjectList}) {
  return (
    <div className="container projects-container creations">

      <div className="row">
            {ProjectList.map((project) => (
              <div className= "col-6">
                <div className='card-body'>
                  <div className=" project-image project " key={project.id}>
                  <a href={project.deployed} target='_blank'><img className=" project-image " src={images[`${project.image_file}`]}></img></a>
                <div className='card-text'>
                  <h3>{project.title}</h3>
                  <a href={project.deployed} target='_blank'>Deployed Application</a>
                  <h5> | </h5>
                  <a href={project.github} target='_blank'>GitHub Repository</a>
                </div>
                </div>
              </div> 
            </div>
            ))}
      </div>
    </div>
  );
}
