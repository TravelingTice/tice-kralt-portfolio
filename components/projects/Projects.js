import { useContext } from 'react';
import styled from 'styled-components';
import ProjectsSvgBg from './ProjectsSvgBg';
import ProjectsGrid from './ProjectsGrid';
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

const Projects = () => {
  const { values } = useContext(DimensionsContext);
  const { projectsHeight } = values;

  return (
    <Section id="projects" height={projectsHeight}>
      <H2>My projects</H2>

      <ProjectsGrid/>

      <ProjectsSvgBg height={projectsHeight}/>
    </Section>
  );
}

export default Projects;