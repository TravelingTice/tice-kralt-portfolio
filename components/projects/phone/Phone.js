import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import renderHTML from 'react-render-html';
import PhoneBg from './PhoneBg';
import { Motion, spring } from 'react-motion';

const ArrowDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Detail = ({ appear, project }) => {
  // depending on what appear is
  const states = {
    left: {
      leftOffset: -100,
      opacity: 0
    },
    right: {
      leftOffset: 100,
      opacity: 0
    },
    center: {
      leftOffset: 0,
      opacity: 1
    }
  }

  const { leftOffset, opacity } = states[appear];

  return (
    <Motion style={{leftOffset: spring(leftOffset), opacity: spring(opacity) }}>{({leftOffset, opacity}) => 
      <div style={{position: 'absolute', left: leftOffset, opacity, height: 225 }}>
        <h5>{project.title}</h5>
        <p className="px-4">{renderHTML(project.description)}</p>
        <Button color='primary' variant='outlined'>View</Button>
      </div>
    }
    </Motion>
  )
}

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

  const showDetails = () => {
    return (
      <div style={{ position: 'relative', maxWidth: 400, width: '100%', height: 250 }}>
        {/* map over and show details for each and every project */}
        {selectedProject && projects.map((project, i) => {
          const index = projects.indexOf(selectedProject);

          let pos;
          if (i === index) {
            pos = 'center';
          } else if (index === i + 1 || (i === projects.length - 1 && index === 0)) {
            pos = 'left'
          } else {
            pos = 'right'
          }
          return <Detail key={project.title} appear={pos} project={project} />
        })}
      </div>
    )
  }

  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>
      {leftArrow()}

      <div style={{width: phoneWidth, position: 'relative', height: 500}}>

        <img style={{width: '100%', position: 'absolute', top: 0}} src="/shapes/iphonex.svg" alt="smartphone"/>

        {projects.map((project, i) => {
          const index = projects.indexOf(selectedProject);
          let pos;

          if (i === index) {
            pos = 'center';
          } else if (index === i + 1 || (i === projects.length - 1 && index === 0)) {
            pos = 'left'
          } else {
            pos = 'right'
          }

          return (
            <PhoneBg key={project.title} project={project} pos={pos} />
          )
        })}

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
