import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import SideMenu from './SideMenu';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const HamburgerButton = styled.button`
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

class Nav extends Component {
  state = {
    isOpen: false
  }
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      <>
        <StyledNav>
          <a href="/">
            {/* logo */}
            <img id="logo" src="ticekralt-logo.png" alt="Tice Kralt Logo" width="53" height="53"/>
          </a>
        
          <HamburgerButton onClick={this.toggleCollapse}><FontAwesomeIcon icon="bars"/></HamburgerButton>
        </StyledNav>
        <SideMenu isOpen={this.state.isOpen} />
      </>
      );
    }
  }

export default Nav;