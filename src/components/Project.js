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
export default function ProjectList({ProjectList}) {
  return (
    <div className="container projects-container creations">
      
      <div className="row">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {ProjectList.map((project) => (
          <div className=" project-image project col-6" key={project.id}>
            <img className=" project-image " src={images[`${project.image_file}`]}></img>
            {/* {project.title} */}
            {/* {project.github} */}
            {/* {project.deployed} */}

          </div>
        ))}
      </div>
    </div>
  );
}
