import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const FooterSvgTop = styled.img`
  position: absolute;
  top: -69px;
  height: 70px;
  width: 100%;
  @media (min-width: 768px) {
    height: 100px;
    top: -99px;
  }
`;

const Footer = () => {
  const fontColor = '#aaa';
  const listIcons = () => (
    <ul className="d-flex">
      <a href="https://github.com/TravelingTice"><li className="mr-3"><GitHubIcon style={{color: fontColor}}/></li></a>
      <a href="https://www.linkedin.com/in/matthijs-kralt"><li className="mr-3"><LinkedInIcon style={{color: fontColor}}/></li></a>
      <a href="https://www.facebook.com/matthijs.kralt1"><li className="mr-3"><FacebookIcon style={{color: fontColor}}/></li></a>
      <a href="https://twitter.com/travelingtice"><li className="mr-3"><TwitterIcon style={{color: fontColor}}/></li></a>
    </ul>
  )

  return (
    <footer id="footer" style={{position: 'relative', backgroundColor: '#0C111A', color: fontColor, paddingBottom: 20}}>
      <FooterSvgTop src="/shapes/footer-top.svg" alt="" />

      <div className="d-flex justify-content-center pt-4">
        {listIcons()}
      </div>

      <div className="d-flex justify-content-center">
        <p><small>{new Date().getFullYear()} © Matthijs Kralt</small></p>
      </div>  

    </footer>
  );
}

export default Footer;