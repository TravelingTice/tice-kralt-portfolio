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
      <svg height={height} width="100%" viewBox={`0 0 100 100`} preserveAspectRatio="none">
        <path  fill="#fcfcfc" d="M0 0 V100 l55 -40 L100 100 V0 z" />
      </svg>
    </AbsoluteDiv>
  );
}

export default SvgBg;