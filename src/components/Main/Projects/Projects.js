import React from 'react';

import ProjectCarousel from './ProjectCarousel';

const Projects = props => (
  <section id="projects">
    
    <div className="title-container">
      <h2 className="title">My <span className="grey-text">P</span>rojects</h2>
    </div>

    <ProjectCarousel/>
  </section>
);

export default Projects;