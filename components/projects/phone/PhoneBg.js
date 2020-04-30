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

const PhoneBg = () => {
  const { selectedProject, phoneWidth } = useContext(ProjectsContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      setTimeout(nextImage, 2000);
    }
  }, [selectedProject, index]);

  const nextImage = () => {
    if (index < selectedProject.images.length - 1) {
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

  return (
    <div style={{ position: 'absolute', overflowX: 'hidden', top: 15, left: 0, zIndex: -2, padding: 7, width: '100%', height: '100%' }}>
      <div style={{ position: 'relative' }}>
        {!selectedProject ? (
          showLoading()
        ) : selectedProject.images.map((img, i) => {
          let pos;
          if (i === index) {
            pos = 'center';
          } else if (index === i + 1 || (i === selectedProject.images.length - 1 && index === 0)) {
            pos = 'left'
          } else {
            pos = 'right'
          }

          console.log({ pos, img });

          return (
            <PhoneImage key={img} appear={pos} url={img} />
          )
        })}
      </div>
    </div>
  );
}

export default PhoneBg;
