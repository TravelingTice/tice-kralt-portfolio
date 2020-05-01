import { useContext, useState, useEffect } from "react";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { Motion, spring } from "react-motion";

const PhoneImage = ({ appear, url }) => {
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
    <Motion style={{leftOffset: spring(leftOffset), opacity: spring(opacity)}}>{({leftOffset, opacity }) => 
      <img style={{ position: 'absolute', width: '100%', left: leftOffset, opacity }} src={`/images${url}`} alt=""/>
    }
    </Motion>
  )
}

const PhoneBg = ({ project, pos }) => {
  const { selectedProject } = useContext(ProjectsContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let nextImageTimeout;
    if (project === selectedProject) {
      nextImageTimeout = setTimeout(nextImage, 2000);
    }
    return () => {
      if (project !== selectedProject) {
        clearTimeout(nextImageTimeout);
        setIndex(0);
      }
    }
  }, [project, index, selectedProject]);

  const nextImage = () => {
    if (index < project.images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  
  const showLoading = () => (
    <div className="d-flex w-100 justify-content-center align-items-center" style={{height: '80%'}}>
      <img style={{ width: 50 }} src="/shapes/loading.svg" alt="loading"/>
    </div>
  )

  // depending on what appear is
  const states = {
    left: {
      leftOffset: -50,
      opacity: 0
    },
    right: {
      leftOffset: 50,
      opacity: 0
    },
    center: {
      leftOffset: 0,
      opacity: 1
    }
  }

  const { leftOffset, opacity } = states[pos]

  return (
    <Motion style={{leftOffset: spring(leftOffset), opacity: spring(opacity) }}>{({leftOffset, opacity}) => 

      <div style={{ position: 'absolute', overflowX: 'hidden', top: 15, left: leftOffset, opacity, zIndex: 2, padding: 7, width: '100%', height: '100%' }}>
        <div style={{ position: 'relative', height: '100%' }}>
          {!project ? (
            showLoading()
          ) : project.images.map((img, i) => {
            let pos;
            if (i === index) {
              pos = 'center';
            } else if (index === i + 1 || (i === project.images.length - 1 && index === 0)) {
              pos = 'left'
            } else {
              pos = 'right'
            }

            return (
              <PhoneImage key={img} appear={pos} url={img} />
            )
          })}
        </div>
      </div>
      
    }
    </Motion>
  );
}

export default PhoneBg;
