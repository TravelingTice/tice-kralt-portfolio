import React, { useContext } from 'react';
import styled from 'styled-components';
import BannerBg from './BannerBg';
import { DimensionsContext } from '../../contexts/DimensionsContext';

// height of the banner
const Section = styled.section`
  height: ${props => props.height}px;
  position: relative;
`;

const PositionedDiv = styled.div`
  position: absolute;
  bottom: 79px;
  left: 18px;
  h1, h2 {
    display: inline-block;
    padding: 3px 10px;
    background-color: rgba(255,255,255,.4);
    font-size: 1.5em;
  }
`;

const Banner = () => {
  const { values } = useContext(DimensionsContext);
  const { bannerHeight, navHeight } = values;

  return (
    <>
      <Section height={bannerHeight}>
        <PositionedDiv>
          <div>
            <h1>Tice Kralt</h1>
          </div>
          <div>
            <h2>Full-stack web developer</h2>
          </div>
        </PositionedDiv>
      </Section>
      <BannerBg navHeight={navHeight} height={bannerHeight}/>
    </>
  );
}

export default Banner;