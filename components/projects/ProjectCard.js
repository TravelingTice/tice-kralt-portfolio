import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Card = styled.div`
  background-color: white;
  box-shadow: 1px 1px 7px rgba(0,0,0,.3);
  cursor: pointer;
  transition: transform 200ms cubic-bezier(.5,.07,.42,1.14), box-shadow 200ms ease-out;
  display: grid;
  grid-template-rows: 200px 1fr 40px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 15px rgba(0,0,0,.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const CardText = styled.div`
  display: none;
  padding: 20px;
  @media (min-width: 800px) {
    display: block;
  }
`;

const ProjectCard = ({ image, title, children, link }) => (
  <Card>
    <CardImage src={image} alt="" />

    <CardText>
      <h3>{title}</h3>
      {children}
    </CardText>
    
    <div>
      <Button href={link} color="green" target="_blank">
        View
      </Button>
    </div>

  </Card>
);

export default ProjectCard;