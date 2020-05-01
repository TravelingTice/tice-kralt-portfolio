import styled from 'styled-components';
import Link from 'next/link';
import useViewportWidth from '../../hooks/useViewportWidth';

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  @media (min-width: 778px) {
    width: 60px;
    height: 60px;
  }
  border-radius: 50%;
  margin-bottom: 2px;
`;

const SvgBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.height}px;
`;

const Header = () => {
  const { vw } = useViewportWidth();
  const isBigScreen = vw > 778;

  const navHeight = isBigScreen ? 100 : 70;

  return (
    <header style={{position: 'absolute', top: 0, height: navHeight, width: '100%'}}>
      <SvgBg height={navHeight} src="/shapes/headerbg.svg" alt="" />

      <div style={{position: 'relative', width: '100%', height: '100%'}} className="d-flex align-items-center">
        <Link href="/"><Avatar id="logo" src="/android-icon-192x192.png" alt="Tice Kralt Logo" className="ml-3 ml-md-4 ml-lg-5" /></Link>
      </div>
      
    </header>
  )
}


export default Header;