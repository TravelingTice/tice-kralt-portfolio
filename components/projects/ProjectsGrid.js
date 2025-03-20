import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 25px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ProjectGrid = () => {
  return (
    <Grid>
      <ProjectCard
        title="Product Database Quote Engine"
        image="/images/pdqeoffi.png"
        link="https://pdqe-demo.herokapp.com"
      >
        An app that will allow you to <strong>quote</strong> your products to
        clients and send them a beautifully designed email in a couple clicks.
      </ProjectCard>

      <ProjectCard
        title="PHAIWA Health Organisation Website"
        image="/images/phaiwa1.jpg"
        link="https://phaiwa.org.au"
      >
        <strong>Public Health Advocacy Institute of Western Australia</strong>'s
        home page is made and designed by Tice Kralt. The site has put their
        online presence on a different level.
      </ProjectCard>

      <ProjectCard
        title="Google Maps Tour Showcase"
        image="/images/googlemaps.jpg"
        link="https://travelingtice.com/tour-map"
      >
        Showcase your roadtrip, bicycle tour or other travels on this awesome{" "}
        <strong>google maps</strong> API and javascript-made map with
        customizable markers and text windows.
      </ProjectCard>

      <ProjectCard
        title="JaYoe Website"
        image="/images/jayoe.jpg"
        link="https://jayoe.com"
      >
        <strong>Matt</strong> is cycling around the world in 10 years and this
        beautifully designed website wraps up his online presence. It contains a
        web store, google maps feature and more.
      </ProjectCard>
    </Grid>
  );
};

export default ProjectGrid;
