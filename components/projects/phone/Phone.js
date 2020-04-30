import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import renderHTML from 'react-render-html';
import PhoneBg from './PhoneBg';

const ArrowDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Phone = () => {
  const { selectedProject, projects, isFirstProject, isLastProject, onPreviousProject, onNextProject, phoneWidth } = useContext(ProjectsContext);

  const leftArrow = () => (
    <ArrowDiv onClick={onPreviousProject}>
      { !isFirstProject() && <ArrowBackIosRoundedIcon />}
    </ArrowDiv>
  )

  const rightArrow = () => (
    <ArrowDiv onClick={onNextProject}>
      {!isLastProject() && <ArrowForwardIosRoundedIcon />}
    </ArrowDiv>
  )

  const showDetails = () => selectedProject && (
    <div className="px-3">
      <h4>{selectedProject.title}</h4>
      <p>{renderHTML(selectedProject.description)}</p>
      <Button color="primary" variant="outlined">View</Button>
    </div>
  )

  const showImages = (project, url) => project.images.map(imgUrl => {
    const className = imgUrl === url ? 'd-block' : 'd-none';

    return (
      <img className={className} style={{width: '100%'}} src={`/images${imgUrl}`}  alt={selectedProject.title} />
    )
  })

  const showPhoneBg = ({ leftOffset, opacity, url }) =>  (
    <Motion style={{leftOffset: spring(leftOffset), opacity: spring(opacity)}}>
      {({leftOffset, opacity }) =>

        <div style={{position: 'absolute', top: 15, left: leftOffset, opacity, zIndex: -2, padding: 7, width: '100%', height: '100%'}}>
          {selectedProject ? (
            <>{projects.map(project => showImages(project, url))}</>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{height: '80%'}}>
              <img style={{ width: 50 }} src="/shapes/loading.svg" alt="loading"/>
            </div>
          )}
        </div>
      }
    </Motion>
  )

  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>
      {leftArrow()}

      <div style={{width: phoneWidth, position: 'relative', height: 500}}>

        <img style={{width: '100%', position: 'absolute', top: 0}} src="/shapes/iphonex.svg" alt="smartphone"/>

        <PhoneBg/>

      </div>

      {rightArrow()}
    </div>

    <div className="d-flex justify-content-center text-center">
      {showDetails()}
    </div>
    </>
  )
}

export default Phone;
