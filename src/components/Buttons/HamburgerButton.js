import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledHamburgerButton = styled.button`
  padding: 5px;
  background-color: transparent;
  font-size: 25px;
  opacity: 0.6;
  cursor: pointer;
  border: none;
  transition: opacity 100ms ease-out;
  &:hover {
    opacity: 1;
  }
`;

const HamburgerButton = (props) => (
  <StyledHamburgerButton onClick={props.onClick}>
    <FontAwesomeIcon icon="bars"/>
  </StyledHamburgerButton>
);

export default HamburgerButton;