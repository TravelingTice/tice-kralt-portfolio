import React, { Component } from 'react';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
  } from "mdbreact";

class Header extends Component {
  state = {
    isOpen: false
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header>

        <MDBNavbar expand="md">

          {/* logo */}
          <MDBNavbarBrand>
            <a href="/">
              <img src="android-chrome-256x256.png" alt="Tice Kralt Logo" width="53px" height="53px"/>
            </a>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse}>
            <i className="fas fa-bars"></i>
          </MDBNavbarToggler>

          <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav>

              <MDBNavItem>
                <a href="#home">Home</a>
              </MDBNavItem>

              <MDBNavItem>
                <a href="#projects">Projects</a>
              </MDBNavItem>

              <MDBNavItem>
                <a href="#about">About</a>
              </MDBNavItem>

              <MDBNavItem>
                <a href="#testimonials">Testimonials</a>
              </MDBNavItem>

              <MDBNavItem>
                <a href="#contact">Contact</a>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>

        </MDBNavbar>

      </header>
    )
  }
}

export default Header;