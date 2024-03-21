import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const AboutSvgTop = styled.img`
  position: absolute;
  top: -69px;
  height: 70px;
  width: 100%;
  z-index: 0;
  @media (min-width: 768px) {
    height: 100px;
    top: -99px;
  }
`;

const About = () => (
  <section
    id="about"
    style={{
      backgroundColor: "#0c111a",
      color: "#fcfcfc",
      padding: "10px 0 100px",
      position: "relative",
    }}
  >
    <AboutSvgTop src="/legacy-1/shapes/aboutme-top.svg" alt="" />

    <Container>
      <Row>
        <Col xs="12" lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <h2 className="mt-4 mb-5 mb-md-3 text-center text-md-left">
            About Me
          </h2>
        </Col>

        <Col
          xs="12"
          md="4"
          lg={{ size: 3, offset: 1 }}
          xl={{ size: 2, offset: 2 }}
          className="d-flex justify-content-center align-items-center mt-3"
        >
          <Avatar src="/legacy-1/images/avatar.jpg" alt="TravelingTice" />
        </Col>

        <Col xs="12" md="8" lg="7" xl="6" className="text-center text-md-right">
          <h4 className="my-3">Matthijs Kralt</h4>
          <p>
            Driven full-stack web developer with 3 years experience as a
            freelancer in the field. Have worked with many international clients
            on various projects and was always able to meet their expectations.{" "}
          </p>

          <p className="d-none d-md-block">
            My strength lies in strong communication with my client during the
            workflow. I always make sure me and my client are on the same page
            about the project, to make sure that the end project is of the best
            quality and service.
          </p>

          <p>
            Prefer working with ReactJs and Rails API but my skills also include
            NodeJS, NextJS, Express, PostgreSQL and Ruby on Rails.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
