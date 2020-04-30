import { useContext } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Button } from '@material-ui/core';

const Phone = () => {
  const { selectedProject } = useContext(ProjectsContext);

  const showDetails = () => selectedProject && (
    <div>
      <h4>{selectedProject.title}</h4>
      <p>{selectedProject.description}</p>
      <Button color="primary" variant="outlined">View</Button>
    </div>
  )

  return (
    <>
    <div className="d-flex justify-content-center">
      <img style={{width: '250px'}} src="/shapes/iphonex.svg" alt="smartphone"/>
    </div>
    <div className="d-flex justify-content-center text-center">
      {showDetails()}
    </div>
    </>
  )
}

export default Phone;
