import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const ProjectCard = props => (
  <MDBCard className="project-card">

    <MDBCardImage className="img-fluid" src={props.image} waves />

    <MDBCardBody>
      <MDBCardTitle>{props.title}</MDBCardTitle>

      <MDBCardText>
        {props.children}
      </MDBCardText>
      <MDBBtn href="#">View</MDBBtn>
    </MDBCardBody>
  </MDBCard>
);

export default ProjectCard;