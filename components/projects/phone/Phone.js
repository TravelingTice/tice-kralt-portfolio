import { useContext } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Button } from '@material-ui/core';

const Phone = () => {
  const { selectedProject } = useContext(ProjectsContext);

  const showDetails = () => selectedProject && (
    <div className="px-3">
      <h4>{selectedProject.title}</h4>
      <p>{selectedProject.description}</p>
      <Button color="primary" variant="outlined">View</Button>
    </div>
  )

  const showPhoneBg = () =>  (
    <div style={{position: 'absolute', top: 11, left: 0, zIndex: -2, padding: 7, width: '100%', height: '100%'}}>
      {selectedProject ? (
        <img style={{width: '100%'}} src={`/images${selectedProject.images[0]}`} alt={selectedProject.title} />
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{height: '80%'}}>
          <img style={{width: 50}} src="/shapes/loading.svg" alt="loading"/>
        </div>
      )}
    </div>
  )

  return (
    <>
    <div className="d-flex justify-content-center">
      <div style={{width: '250px', position: 'relative'}}>
        <a href={selectedProject && selectedProject.url} target="_blank">
          <img style={{width: '100%'}} src="/shapes/iphonex.svg" alt="smartphone"/>
          {showPhoneBg()}
        </a>
      </div>
    </div>
    <div className="d-flex justify-content-center text-center">
      {showDetails()}
    </div>
    </>
  )
}

export default Phone;
