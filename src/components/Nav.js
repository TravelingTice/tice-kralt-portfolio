import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <nav>
          <a href="/">
            {/* logo */}
            <img id="logo" src="ticekralt-logo.png" alt="Tice Kralt Logo" width="53" height="53"/>
          </a>
        
          <button className="hamburger-icon" onClick={this.toggleCollapse}><FontAwesomeIcon icon="bars"/></button>
        </nav>
      </>
      );
    }
  }

export default Nav;