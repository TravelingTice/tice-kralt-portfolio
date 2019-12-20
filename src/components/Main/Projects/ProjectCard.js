import React from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const ProjectCard = props => (
  <MDBCard className="project-card">

    <MDBCardImage className="img-fluid" src={props.image} waves />

    <MDBCardBody>
      <MDBCardTitle>{props.title}</MDBCardTitle>

      <MDBCardText>
        {props.children}
      </MDBCardText>
      <MDBBtn color="light-green" href="#">
        View 
        <MDBIcon
        fas="true" icon="angle-right"
        className="arrow"/>
      </MDBBtn>
    </MDBCardBody>
  </MDBCard>
);

export default ProjectCard;