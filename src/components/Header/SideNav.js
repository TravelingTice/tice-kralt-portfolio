import React from 'react';
import styled from 'styled-components';

const StyledSideNav = styled.nav`
  position: absolute;
  top: 0;
  height: 100px;
  background-color: #ff9;
  transition: right 100ms ease-out;
  right: ${props => props.isOpen ? 0 : '-20px'};
`;

const SideNav = props => (
  <StyledSideNav isOpen={props.isOpen}>
    <p>Hoi</p>
  </StyledSideNav>
);

export default SideNav;