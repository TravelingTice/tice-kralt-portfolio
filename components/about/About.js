import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Avatar = styled.img`
  width: 100px;
  height: 100px;

`;

const AboutSvgTop = styled.img`
  position: absolute;
  top: -50px;
  height: 50px;
  width: 100%;
  z-index: 0;
`;

const About = () => (
  <section id="about" style={{backgroundColor: '#0c111a', color: '#fcfcfc', padding: '10px 0', position: 'relative'}}>
    
    <AboutSvgTop src="/shapes/aboutme-top.svg" alt="" />

    <Container fluid>
      <Row>
        <Col xs="12">
          <h2 className="text-right">About Me</h2>

          <Avatar src="images/avatar.jpg" alt="TravelingTice" />
        </Col>

      </Row>
    </Container>



      <div>
        <h3>Matthijs Kralt</h3>
        <p>Driven full-stack web developer with 3 years experience as a freelancer in the field. Have worked with many international clients on various projects and was always able to meet their expectations. </p>

        <p>My strength lies in strong communication with my client during the workflow. I always make sure me and my client are on the same page about the project, to make sure that the end project is of the best quality and service.</p>

        <p>Prefer working with ReactJs and Rails API but my skills also include NodeJS, NextJS, Express, PostgreSQL and Ruby on Rails.</p>
      </div>


  </section>
);

export default About;