import styled from "styled-components";
import ProjectsContextProvider from "../../contexts/ProjectsContext";
import Phone from "./phone/Phone";
import { Container, Row, Col } from "reactstrap";

const ProjectsSvgTop = styled.img`
  width: 100%;
  height: 70px;
  top: -69px;
  position: absolute;
  @media (min-width: 768px) {
    height: 100px;
    top: -99px;
  }
`;

const Projects = () => {
  return (
    <section id="projects" style={{ position: "relative", paddingBottom: 80 }}>
      <ProjectsSvgTop src="/shapes/project-top.svg" alt="" />

      <Container>
        <Row>
          <Col xs="12">
            <h2 className="my-5 text-center">What I'm working on</h2>

            <ProjectsContextProvider>
              <Phone />
            </ProjectsContextProvider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
