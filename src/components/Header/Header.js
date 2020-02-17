import React, { Component } from 'react';

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
      
      <nav className="navbar navbar-expand-md">
        <a href="/" className="navbar-brand">
          {/* logo */}
          <img src="android-chrome-256x256.png" alt="Tice Kralt Logo" width="53" height="53"/>
        </a>
      
        <button onClick={this.toggleCollapse} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">

          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <a href="#home">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>

          </ul>

        </div>

      </nav>
{/*       
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
      
      </MDBNavbar> */}
      
      </header>
      )
    }
  }
  
  export default Header;