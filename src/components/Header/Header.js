import React, { Component } from 'react';
import styled from 'styled-components';
import SvgBg from './SvgBg';
import HamburgerButton from '../Buttons/HamburgerButton';
import { DimensionsContext } from '../../contexts/DimensionsContext';

const StyledHeader = styled.header`
  /* box-shadow: 1px 1px 10px rgba(0,0,0,.3); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => `${props.height}px`};
  padding: 0 30px;
`;

class Header extends Component {
  static contextType = DimensionsContext;
  state = {
    isNavOpen: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }));
  }

  render() {
    return (
      <>
        <StyledHeader height={this.context.navHeight}>
          {/* logo */}
          <a href="/"><img id="logo" src="ticekralt-logo.png" alt="Tice Kralt Logo" width="53" height="53"/></a>
          <HamburgerButton onClick={this.toggleNav}/>
        </StyledHeader>
        <SvgBg height={this.context.navHeight}/>
      </>
    )
  }
}

export default Header;