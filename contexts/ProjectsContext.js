import { createContext, useState, useEffect } from "react";
import allProjects from "../projects";

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const phoneWidth = 250;

  useEffect(() => {
    if (!projects.length) {
      setProjects(allProjects);
      setSelectedProject(allProjects[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      let timeout = setTimeout(setNextSelectedProject, 12000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [selectedProject]);

  const setNextSelectedProject = () => {
    const index = projects.indexOf(selectedProject);
    if (index < projects.length - 1) {
      setSelectedProject(projects[index + 1]);
    } else {
      setSelectedProject(projects[0]);
    }
  };

  const isFirstProject = () => {
    const index = projects.indexOf(selectedProject);
    return index === 0;
  };

  const isLastProject = () => {
    const index = projects.indexOf(selectedProject);
    return index === projects.length - 1;
  };

  const onPreviousProject = () => {
    if (!isFirstProject()) {
      const currentIndex = projects.indexOf(selectedProject);
      setSelectedProject(projects[currentIndex - 1]);
    }
  };

  const onNextProject = () => {
    if (!isLastProject()) {
      const currentIndex = projects.indexOf(selectedProject);
      setSelectedProject(projects[currentIndex + 1]);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        selectedProject,
        isFirstProject,
        isLastProject,
        onPreviousProject,
        onNextProject,
        phoneWidth,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
