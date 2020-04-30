import { useContext } from 'react';
import styled from 'styled-components';
import ProjectsSvgBg from './ProjectsSvgBg';
// import ProjectsGrid from './ProjectsGrid';
import { DimensionsContext } from '../../contexts/DimensionsContext';
import ProjectsContextProvider from '../../contexts/ProjectsContext';
import Phone from './phone/Phone';

const Section = styled.section`
  height: ${props => props.height}px;
  position: relative;
  top: -20px;
`;

const Projects = () => {
  const { values } = useContext(DimensionsContext);
  const { projectsHeight } = values;

  return (
    <Section id="projects" height={projectsHeight}>
      
      <ProjectsSvgBg height={projectsHeight}/>
      <h2 className="ml-4 mb-5">My projects</h2>

      <ProjectsContextProvider>
        <Phone />
      </ProjectsContextProvider>


    </Section>
  );
}

export default Projects;