import { createContext, useState, useEffect } from 'react';
import { DOMAIN } from '../config';

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(`${DOMAIN}/projects.json`).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProjects(data);
      }
    })
  }, []);

  return (
    <ProjectsContext.Provider value={{
      projects,
      selectedProject
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContextProvider;