import { useState, useEffect } from "react";
import allTestimonials from '../../testimonials';
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const TestimonialSvgTop = styled.img`
  width: 100%;
  height: 60px;
  position: absolute;
  top: -59px;
`;

const Testimonial = ({ pos }) => {
  const states = {
    left: {
      leftOffset: -100,
      opacity: 0
    },
    center: {
      leftOffset: 0,
      opacity: 1
    },
    right: {
      leftOffset: 100,
      opacity: 0
    }
  }

  const { leftOffset, opacity } = states[pos];
  return (
    <Motion style={{leftOffset: spring(leftOffset), opacity: spring(opacity)}}>{({leftOffset, opacity}) => 
      <div style={{position: 'absolute', left: leftOffset, opacity }}>
        <p>Hello</p>
      </div>
    }</Motion>
  )
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(allTestimonials);
  }, []);

  const showTestimonials = () => testimonials.map(test => {
    const pos = 'center';

    return <Testimonial pos={pos} />
  });

  return (
    <section id="testimonials" style={{position: 'relative', paddingBottom: 100}}>
      <TestimonialSvgTop src="/shapes/testimonial-top.svg" />
      <Container fluid>
        <Row>
          <Col xs="12">
            <h2 className="mb-4">Testimonials</h2>

            <div className="d-flex justify-content-center">
              <div style={{position: 'relative', height: 300, backgroundColor: 'red', maxWidth: 500, width: '100%' }}>
                {showTestimonials()}
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials;
