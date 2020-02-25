import React from 'react';
import styled from 'styled-components';

const StyledSideMenu = styled.div`
  position: absolute;
  top: 0;
  height: 100px;
  background-color: #ff9;
  transition: right 100ms ease-out;
  right: ${props => props.isOpen ? 0 : '-20px'};
`;

const SideMenu = props => (
  <StyledSideMenu isOpen={props.isOpen}>
    <p>Hoi</p>
  </StyledSideMenu>
);

export default SideMenu;