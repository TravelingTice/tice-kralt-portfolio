import { useContext, useState, useEffect } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import renderHTML from "react-render-html";
import PhoneBg from "./PhoneBg";
import { Motion, spring } from "react-motion";
import GitHubIcon from "@material-ui/icons/GitHub";

const ArrowDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 6;
`;

const Detail = ({ appear, project }) => {
  const [isHover, setHover] = useState(false);
  const [isGh, setGh] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    let timeout;
    if (!isHover) {
      timeout = setTimeout(() => setGh(false), 3000);
    } else {
      setGh(true);
    }
    return () => {
      if (isHover) {
        if (timeout) clearTimeout(timeout);
      }
    };
  }, [isHover]);
  // depending on what appear is
  const states = {
    left: {
      leftOffset: -100,
      opacity: 0,
      zIndex: 1,
    },
    right: {
      leftOffset: 100,
      opacity: 0,
      zIndex: 1,
    },
    center: {
      leftOffset: 0,
      opacity: 1,
      zIndex: 4,
    },
  };

  const { leftOffset, opacity, zIndex } = states[appear];

  const ghLeft = isGh ? 65 : 45;
  const ghOpacity = isGh ? 1 : 0;
  const ghZIndex = isGh ? 1 : -1;

  return (
    <Motion
      style={{
        ghLeft: spring(ghLeft),
        ghOpacity: spring(ghOpacity),
        leftOffset: spring(leftOffset),
        opacity: spring(opacity),
      }}
    >
      {({ ghLeft, ghOpacity, leftOffset, opacity }) => (
        <div
          style={{
            position: "absolute",
            left: leftOffset,
            opacity,
            zIndex,
            height: 225,
          }}
        >
          <h5 className="my-3">{project.title}</h5>
          <p className="px-4">{renderHTML(project.description)}</p>
          <div className="d-flex justify-content-center">
            <div style={{ position: "relative" }}>
              <Button
                style={{ backgroundColor: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.open(project.link)}
                color="primary"
                variant="outlined"
              >
                View
              </Button>
              <div
                style={{
                  position: "absolute",
                  top: -7,
                  left: ghLeft,
                  opacity: ghOpacity,
                  zIndex: ghZIndex,
                }}
              >
                <IconButton
                  color="primary"
                  role="link"
                  onClick={() => window.open(project.githubLink)}
                >
                  <GitHubIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </Motion>
  );
};

const Phone = () => {
  const {
    selectedProject,
    projects,
    isFirstProject,
    isLastProject,
    onPreviousProject,
    onNextProject,
    phoneWidth,
  } = useContext(ProjectsContext);

  const leftArrow = () => (
    <ArrowDiv onClick={onPreviousProject}>
      {!isFirstProject() && <ArrowBackIosRoundedIcon />}
    </ArrowDiv>
  );

  const rightArrow = () => (
    <ArrowDiv onClick={onNextProject}>
      {!isLastProject() && <ArrowForwardIosRoundedIcon />}
    </ArrowDiv>
  );

  const showDetails = () => {
    return (
      <div
        style={{
          position: "relative",
          maxWidth: 400,
          width: "100%",
          height: 250,
        }}
      >
        {/* map over and show details for each and every project */}
        {selectedProject &&
          projects.map((project, i) => {
            const index = projects.indexOf(selectedProject);

            let pos;
            if (i === index) {
              pos = "center";
            } else if (
              index === i + 1 ||
              (i === projects.length - 1 && index === 0)
            ) {
              pos = "left";
            } else {
              pos = "right";
            }
            return (
              <Detail key={project.title} appear={pos} project={project} />
            );
          })}
      </div>
    );
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}>
        {leftArrow()}

        <div style={{ width: phoneWidth, position: "relative", height: 500 }}>
          <img
            style={{ width: "100%", position: "absolute", top: 0, zIndex: 5 }}
            src="/legacy-1/shapes/iphonex.svg"
            alt="smartphone"
          />

          {projects.map((project, i) => {
            const index = projects.indexOf(selectedProject);
            let pos;

            if (i === index) {
              pos = "center";
            } else if (
              index === i + 1 ||
              (i === projects.length - 1 && index === 0)
            ) {
              pos = "left";
            } else {
              pos = "right";
            }

            return <PhoneBg key={project.title} project={project} pos={pos} />;
          })}
        </div>

        {rightArrow()}
      </div>

      <div className="d-flex justify-content-center text-center">
        {showDetails()}
      </div>
    </>
  );
};

export default Phone;
