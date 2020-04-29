import { useContext, useState } from 'react';
import styled from 'styled-components';
import SvgBg from './SvgBg';
import HamburgerButton from '../Buttons/HamburgerButton';
import { DimensionsContext } from '../../contexts/DimensionsContext';
import Link from 'next/link';

const StyledHeader = styled.header`
  /* box-shadow: 1px 1px 10px rgba(0,0,0,.3); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => `${props.height}px`};
  padding: 0 30px;
`;

const Header = () => {
  const { navHeight } = useContext(DimensionsContext);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <StyledHeader height={navHeight}>
        {/* logo */}
        <Link href="/"><img id="logo" src="/android-icon-192x192.png" alt="Tice Kralt Logo" width="53" height="53"/></Link>
        <HamburgerButton onClick={toggleNav}/>
      </StyledHeader>
      <SvgBg height={navHeight}/>
    </>
  )
}


export default Header;