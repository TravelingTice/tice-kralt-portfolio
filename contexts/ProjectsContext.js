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

  const isFirstProject = () => {
    const index = projects.indexOf(selectedProject);
    return index === 0;
  }
  
  const isLastProject = () => {
    const index = projects.indexOf(selectedProject);
    return index === projects.length - 1;
  }

  const onPreviousProject = () => {
    if (!isFirstProject()) {
      
    }
  }

  const onNextProject = () => {
    const currentIndex = projects.indexOf(selectedProject);
    console.log(currentIndex);
  }

  return (
    <ProjectsContext.Provider value={{
      projects,
      selectedProject,
      isFirstProject,
      isLastProject,
      onPreviousProject,
      onNextProject
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContextProvider;