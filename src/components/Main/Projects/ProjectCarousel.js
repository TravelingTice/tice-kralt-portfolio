import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class ProjectCarousel extends Component {
  state = {
    leftOffset: 32
  }

  componentDidMount() {
    const vw = window.innerWidth;
    if (vw >= 1130) {
      this.setState({ leftOffset: 72 });
    }

    window.addEventListener('resize', e => {
      console.log('resize');
      const vw = window.innerWidth;
      if (vw >= 1130) {
        this.setState({ leftOffset: 72 });
      } else {
        this.setState({ leftOffset: 32 });
      }
    });
  }

  tab = (option) => {
    const { leftOffset } = this.state;
    // only move left is left offset is not 30
    if (leftOffset !== 32 || option !== 'left') {
      // calc how much to move
      // get width
      // TODO: change to innerWidth when not on devtools
      const vw = window.innerWidth;
      // check if width is bigger, for different amount of columns
      let cardWidth;
      if (vw <= 720) {
        cardWidth = vw / 2 - 54 + 20;
      } else if (vw <= 1200) {
        cardWidth = vw / 3 - 43 + 20;
      } else {

      }
      
      if (option === 'left') {
        this.setState(prevState => ({
          leftOffset: prevState.leftOffset + cardWidth
        }));
      } else {
        // check how many cards have already been shifted
        const projectLength = document.querySelectorAll('.project-card').length;
        if (!(leftOffset <= (32 - (cardWidth * (projectLength - 1))))) {
          this.setState(prevState => ({
            leftOffset: prevState.leftOffset - cardWidth
          }));
        }
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