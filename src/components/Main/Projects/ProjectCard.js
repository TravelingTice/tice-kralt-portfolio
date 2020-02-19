import React from 'react';

const ProjectCard = props => (
  <div className="card project-card">
    <img src={props.image} alt="" className="card-img-top"/>
    <div className="card-body">
      <div className="card-title">{props.title}</div>

      <div className="card-text">{props.children}</div>

      <a href={props.link} target="_blank" className="btn btn-success">
        View<i className="fas fa-angle-right angle-right"></i>
      </a>
    </div>
  </div>
);

export default ProjectCard;