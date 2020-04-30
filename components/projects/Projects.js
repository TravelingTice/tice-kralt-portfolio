import { useContext } from 'react';
import styled from 'styled-components';
import ProjectsSvgBg from './ProjectsSvgBg';
import ProjectsGrid from './ProjectsGrid';
import { DimensionsContext } from '../../contexts/DimensionsContext';
import ProjectsContextProvider from '../../contexts/ProjectsContext';
import Phone from './phone/Phone';

const Section = styled.section`
  height: ${props => props.height}px;
  position: relative;
  top: -20px;
`;

const H2 = styled.h2`
  position: relative;
  margin-bottom: 20px;
`;

const Projects = () => {
  const { values } = useContext(DimensionsContext);
  const { projectsHeight } = values;

  return (
    <Section id="projects" height={projectsHeight}>
      
      <ProjectsSvgBg height={projectsHeight}/>
      <H2>My projects</H2>

      <ProjectsGrid/>

      <ProjectsContextProvider>
        <Phone />
      </ProjectsContextProvider>


    </Section>
  );
}

export default Projects;