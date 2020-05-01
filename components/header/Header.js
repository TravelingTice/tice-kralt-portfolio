import styled from 'styled-components';
import Link from 'next/link';

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 20px;
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
  const navHeight = 70;

  return (
    <header style={{position: 'absolute', top: 0, height: navHeight, width: '100%'}}>
      <SvgBg height={navHeight} src="/shapes/headerbg.svg" alt="" />

      <div style={{position: 'relative', width: '100%', height: '100%'}} className="d-flex align-items-center">
        <Link href="/"><Avatar id="logo" src="/android-icon-192x192.png" alt="Tice Kralt Logo" /></Link>
      </div>
      
    </header>
  )
}


export default Header;