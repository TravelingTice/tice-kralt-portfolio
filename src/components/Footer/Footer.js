import React from 'react';
import { MDBIcon } from 'mdbreact';

const Footer = props => (
  <footer>
    <div className="social-icons">
      <a href="https://github.com/TravelingTice">
        <MDBIcon fab icon="github"/>
      </a>
      <a href="https://www.linkedin.com/in/matthijs-kralt/">
        <MDBIcon fab icon="linkedin"/>
      </a>
      <a href="https://www.facebook.com/matthijs.kralt1">
        <MDBIcon fab icon="facebook"/>
      </a>
      <a href="https://twitter.com/travelingtice">
        <MDBIcon fab icon="twitter"/>
      </a>

    </div>

    <div className="copyright">
      <p>2019 (c) Matthijs Kralt</p>
    </div>
  </footer>
);

export default Footer;