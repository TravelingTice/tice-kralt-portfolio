import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const StyledHeader = styled.header`
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
`;

const Header = () => (
  <StyledHeader>
    <Nav/>
  </StyledHeader>
);

export default Header;