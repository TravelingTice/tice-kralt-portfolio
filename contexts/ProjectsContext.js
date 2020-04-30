import { createContext, useState, useEffect } from 'react';
import { DOMAIN } from '../config';

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${DOMAIN}/projects.json`);
      const data = await res.json();
      if (data.error) return console.log(data.error);

      setProjects(data);
      setSelectedProject(data[0]);
    }
    fetchData();
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