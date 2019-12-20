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
    const { bigScreen } = this.state;
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
          image="images/pdqeoffi.png"
          link="https://pdqe-demo.herokapp.com">
            An app that will allow you to <strong>quote</strong> your products to clients and send them a beautifully designed email in a couple clicks.
          </ProjectCard>

          <ProjectCard
          title="PHAIWA Health Organisation Website"
          image="images/phaiwa1.jpg"
          link="https://phaiwa.org.au">
            <strong>Public Health Advocacy Institute of Western Australia</strong>'s home page is made and designed by Tice Kralt. The site has put their online presence on a different level.
          </ProjectCard>

          <ProjectCard
          title="Google Maps Tour Showcase"
          image="images/googlemaps.jpg"
          link="https://travelingtice.com/tour-map">
            Showcase your roadtrip, bicycle tour or other travels on this awesome <strong>google maps</strong> API and javascript-made map with customizable markers and text windows.
          </ProjectCard>

          <ProjectCard
          title="JaYoe Website"
          image="images/jayoe.jpg"
          link="https://jayoe.com">
            <strong>Matt</strong> is cycling around the world in 10 years and this beautifully designed website wraps up his online presence. It contains a web store, google maps feature and more.
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