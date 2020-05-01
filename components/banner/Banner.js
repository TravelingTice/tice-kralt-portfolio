import React, { useContext } from 'react';
import styled from 'styled-components';
import BannerBg from './BannerBg';
import { DimensionsContext } from '../../contexts/DimensionsContext';

const PositionedDiv = styled.div`
  position: absolute;
  bottom: 103px;
  left: 18px;
  h1, h2 {
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    background-color: rgba(255,255,255,.4);
    font-size: 1.5em;
  }
`;

const Banner = () => {
  const { values } = useContext(DimensionsContext);
  const { bannerHeight, navHeight } = values;

  return (
    <>
      <section style={{position: 'relative', height: bannerHeight}}>
        <PositionedDiv>
          <div>
            <h1>Tice Kralt</h1>
          </div>
          <div>
            <h2>Full-stack web developer</h2>
          </div>
        </PositionedDiv>
      </section>
      <BannerBg navHeight={navHeight} height={bannerHeight}/>
    </>
  );
}

export default Banner;