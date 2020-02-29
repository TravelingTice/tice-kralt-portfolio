import React from 'react';
import styled from 'styled-components';
import LinkBtn from '../Buttons/LinkBtn';

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

const ProjectCard = props => (
  <Card>
    <CardImage src={props.image} alt="" />

    <CardText>
      <h3>{props.title}</h3>
      {props.children}
    </CardText>
    
    <div>
      <LinkBtn href={props.link} color="green" target="_blank">
        View<i className="fas fa-angle-right angle-right"></i>
      </LinkBtn>
    </div>

  </Card>
);

export default ProjectCard;