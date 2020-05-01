import { useContext, useState } from 'react';
import styled from 'styled-components';
import SvgBg from './SvgBg';
import { DimensionsContext } from '../../contexts/DimensionsContext';
import Link from 'next/link';

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 20px;
  margin-bottom: 2px;
`;

const Header = () => {
  const { values } = useContext(DimensionsContext);
  const { navHeight } = values;

  return (
    <>
      <header style={{position: 'absolute', top: 0, height: navHeight, width: '100%'}} className="d-flex align-items-center">
        <Link href="/"><Avatar id="logo" src="/android-icon-192x192.png" alt="Tice Kralt Logo" /></Link>

        <SvgBg height={navHeight} src="/shapes/headerbg.svg" alt="" />
      </header>
    </>
  )
}


export default Header;