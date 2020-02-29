import React from 'react';
import styled from 'styled-components';
import ProjectsSvgBg from './ProjectsSvgBg';
import ProjectGrid from './ProjectGrid';
import { DimensionsContext } from '../../contexts/DimensionsContext';

const Section = styled.section`
  height: ${props => props.height}px;
  position: relative;
  top: -20px;
`;

const H2 = styled.h2`
  position: relative;
  left: calc(35% - 75px);
  margin-bottom: 20px;
`;

const Projects = () => (
  <DimensionsContext.Consumer>{context => (
    <>
      <Section id="projects" height={context.projectsHeight}>
        <H2>My projects</H2>

        <ProjectGrid/>

      <ProjectsSvgBg height={context.projectsHeight}/>
      </Section>
    </>
  )}
  </DimensionsContext.Consumer>
);

export default Projects;