import styled from 'styled-components';

const FooterSvgTop = styled.img`
  position: absolute;
  top: -69px;
  height: 70px;
  width: 100%;
`;

const Footer = () => (
  <footer id="footer" style={{position: 'relative', backgroundColor: '#0C111A', color: '#fdfdfd', paddingBottom: 20}}>
    <FooterSvgTop src="/shapes/footer-top.svg" alt="" />

    <div className="social-icons">
      <a href="https://github.com/TravelingTice">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/matthijs-kralt/">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/matthijs.kralt1">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/travelingtice">
        <i className="fab fa-twitter"></i>
      </a>

    </div>

    <div className="copyright">
      <p>2019 (c) Matthijs Kralt</p>
    </div>
  </footer>
);

export default Footer;