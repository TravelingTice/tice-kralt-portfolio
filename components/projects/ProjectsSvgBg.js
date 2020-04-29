import styled from 'styled-components';

const PositionedDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: -53px;
  width: 100%;
  height: ${props => props.height}px;
`;

const ProjectsSvgBg = (props) => (
  <PositionedDiv height={props.height}>
    <img src="/shapes/banner-project.svg" alt=""/>
  </PositionedDiv>
);

export default ProjectsSvgBg;