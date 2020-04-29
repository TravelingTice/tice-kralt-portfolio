import styled from 'styled-components';

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
`;

const SvgBg = ({ height }) => {
  
  return (
    <AbsoluteDiv>
      <img src="/shapes/headerbg.svg" alt="header bg"/>
    </AbsoluteDiv>
  );
}

export default SvgBg;