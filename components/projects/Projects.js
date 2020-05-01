import styled from 'styled-components';
import ProjectsContextProvider from '../../contexts/ProjectsContext';
import Phone from './phone/Phone';

const ProjectsSvgTop = styled.img`
  width: 100%;
  height: 70px;
  top: -69px;
  position: absolute;
`;

const Projects = () => {
  return (
    <section id="projects" style={{position: 'relative'}}>
      
      <ProjectsSvgTop src="/shapes/banner-project.svg" alt="" />

      <h2 className="ml-4 mb-5">My projects</h2>

      <ProjectsContextProvider>
        <Phone />
      </ProjectsContextProvider>


    </section>
  );
}

export default Projects;