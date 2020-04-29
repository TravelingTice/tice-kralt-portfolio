import styled from 'styled-components';

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
  height: ${props => props.height}px;
  img {
    height: ${props => props.height}px;
    width: 100%;
  }
`;

const SvgBg = ({ height }) => {
  return (
    <AbsoluteDiv height={height}>
      <img src="/shapes/headerbg.svg" alt=""/>
    </AbsoluteDiv>
  );
}

export default SvgBg;