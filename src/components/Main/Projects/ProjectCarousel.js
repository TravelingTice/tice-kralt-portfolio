import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

const arrowWidth = 32;
const bigScreenArrowWidth = 72;

class ProjectCarousel extends Component {
  state = {
    leftOffset: arrowWidth,
    bigScreen: false
  }

  componentDidMount() {
    const vw = window.innerWidth;
    if (vw >= 1130) {
      this.setState({ leftOffset: bigScreenArrowWidth, bigScreen: true });
    }

    window.addEventListener('resize', e => {
      const vw = window.innerWidth;
      if (vw >= 1130) {
        this.setState({ leftOffset: bigScreenArrowWidth, bigScreen: true });
      } else {
        this.setState({ leftOffset: arrowWidth, bigScreen: false });
      }
    });
  }

  tab = (option) => {
    const { leftOffset, bigScreen } = this.state;
    
    // calc how much to move
    // get width
    // TODO: change to innerWidth when not on devtools
    const vw = window.innerWidth;
    // check if width is bigger, for different amount of columns
    let cardWidth;
    if (vw <= 720) {
      cardWidth = vw / 2 - 54 + 20;
    } else if (vw <= 1130) {
      cardWidth = vw / 3 - 43 + 20;
    } else {
      cardWidth = vw / 4 - 57 + 20;
    }
    
    if (option === 'left') {
      // only move left is left offset is not too little
      console.log(leftOffset, (bigScreen ? bigScreenArrowWidth : arrowWidth));
      if (leftOffset < (bigScreen ? bigScreenArrowWidth : arrowWidth)) {
        this.setState(prevState => ({
          leftOffset: prevState.leftOffset + cardWidth
        }));
      }
    } else {
      // check how many cards have already been shifted
      const projectLength = document.querySelectorAll('.project-card').length;
      if (!(leftOffset <= ((bigScreen ? bigScreenArrowWidth : arrowWidth) - (cardWidth * (projectLength - 1))))) {
        this.setState(prevState => ({
          leftOffset: prevState.leftOffset - cardWidth
        }));
      }
    }
  }

  render() {
    return (
      <div className="carousel-container">

        <div 
        className="arrow-left"
        onClick={() => this.tab('left')}>
          <i className="fas fa-angle-left"></i>
        </div>

        <div 
        className="carousel"
        style={{left: this.state.leftOffset + 'px'}}>

          <ProjectCard
          title="Product Database Quote Engine"
          image="images/pdqe-screenshot.JPG">
            This is the <strong>test</strong> text.
          </ProjectCard>

          <ProjectCard>
            Test test
          </ProjectCard>

          <ProjectCard>
            Test test
          </ProjectCard>

          <ProjectCard>
            Test test
          </ProjectCard>

        </div>

        <div 
        className="arrow-right"
        onClick={() => this.tab('right')}>
          <i className="fas fa-angle-right"></i>
        </div>

      </div>
    )
  }
}

export default ProjectCarousel;