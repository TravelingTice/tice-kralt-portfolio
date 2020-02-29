import React from 'react';
import styled from 'styled-components';

const PositionedDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: -73px;
  width: 100%;
  height: ${props => props.height}px;
`;

const ProjectsSvgBg = (props) => (
  <PositionedDiv height={props.height}>
    <svg height={props.height} width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path  fill="#fcfcfc" d="M0 10 L35 0 L100 10 V100 H0 z" />
    </svg>
  </PositionedDiv>
);

export default ProjectsSvgBg;