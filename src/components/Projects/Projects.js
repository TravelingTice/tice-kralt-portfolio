import React from 'react';
import styled from 'styled-components';
import ProjectsSvgBg from './ProjectsSvgBg';
import ProjectCarousel from './ProjectCarousel';
import { DimensionsContext } from '../../contexts/DimensionsContext';

const Section = styled.section`
  height: ${props => props.height}px;
  position: relative;
`;

const Projects = () => (
  <DimensionsContext.Consumer>{context => (
    <>
      <Section id="projects" height={context.projectsHeight}>
        <h2>My projects</h2>
        <ProjectCarousel/>

      <ProjectsSvgBg height={context.projectsHeight}/>
      </Section>
    </>
  )}
  </DimensionsContext.Consumer>
);

export default Projects;