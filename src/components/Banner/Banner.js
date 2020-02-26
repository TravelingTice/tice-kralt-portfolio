import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 500px;
  margin: 0;
  background-image: url('big-tice-background-1920.jpg');
  background-position: 50% 50%;
  background-size: cover;
  z-index: -2;
  top: 0;
`;

const BannerContainer = styled.div`
  display: flex;
  height: 300px;
`;

const Banner = () => (
  <Section className="banner-container">
    <BannerContainer>
      <div className="banner-title">
        <h1>Tice Kralt</h1>
      </div>
      <div className="banner-subtitle">
        <h2>Full-Stack Web Developer</h2>
      </div>
    </BannerContainer>
  </Section>
);

export default Banner;