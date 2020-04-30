import { useContext, useState } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";

const PhoneBg = () => {
  const { selectedProject, phoneWidth } = useContext(ProjectsContext);
  
  const showLoading = () => (
    <div className="d-flex w-100 justify-content-center align-items-center" style={{height: '80%'}}>
      <img style={{ width: 50 }} src="/shapes/loading.svg" alt="loading"/>
    </div>
  )

  const showImages = () => selectedProject ? selectedProject.images.map(image => (
    <img style={{ width: '100%' }} src={`/images${image}`} alt='' className="mr-4" />
  )) : showLoading();

  return (
    <div style={{position: 'absolute', overflowX: 'hidden', top: 15, left: 0, zIndex: -2, padding: 7, width: '100%', height: '100%'}}>
      <div className="d-flex">
        {showImages()}
      </div>
    </div>
  );
}

export default PhoneBg;
