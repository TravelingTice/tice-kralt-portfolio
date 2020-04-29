import { useContext, useState } from 'react';
import styled from 'styled-components';
import SvgBg from './SvgBg';
import { DimensionsContext } from '../../contexts/DimensionsContext';
import Link from 'next/link';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { NoButton } from '../Button';

const StyledHeader = styled.header`
  /* box-shadow: 1px 1px 10px rgba(0,0,0,.3); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => `${props.height}px`};
  padding: 0 20px 10px;
`;

const HamburgerButton = () => (
  <NoButton>
    <MenuRoundedIcon />
  </NoButton>
)

const Header = () => {
  const { values } = useContext(DimensionsContext);
  const { navHeight } = values;
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <StyledHeader height={navHeight}>
        <Link href="/"><img id="logo" src="/android-icon-192x192.png" alt="Tice Kralt Logo" width="45" height="45"/></Link>
        <HamburgerButton onClick={toggleNav}/>
      </StyledHeader>
      <SvgBg height={navHeight}/>
    </>
  )
}


export default Header;