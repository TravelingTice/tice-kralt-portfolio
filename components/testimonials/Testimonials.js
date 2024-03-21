import { useState, useEffect } from "react";
import allTestimonials from "../../testimonials";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const TestimonialSvgTop = styled.img`
  width: 100%;
  height: 60px;
  position: absolute;
  top: -59px;
  @media (min-width: 768px) {
    height: 100px;
    top: -99px;
  }
`;

const Testimonial = ({ pos, testimonial }) => {
  const states = {
    left: {
      leftOffset: -100,
      opacity: 0,
    },
    center: {
      leftOffset: 0,
      opacity: 1,
    },
    right: {
      leftOffset: 100,
      opacity: 0,
    },
  };

  const quotes = () => (
    <div
      className="d-flex justify-content-between"
      style={{ position: "relative", top: 20 }}
    >
      <h3 className="d-inline" style={{ position: "relative", right: 5 }}>
        “
      </h3>
      <h3 className="d-inline" style={{ position: "relative", left: 5 }}>
        ”
      </h3>
    </div>
  );

  const { leftOffset, opacity } = states[pos];
  return (
    <Motion
      style={{ leftOffset: spring(leftOffset), opacity: spring(opacity) }}
    >
      {({ leftOffset, opacity }) => (
        <div
          style={{
            position: "absolute",
            left: leftOffset,
            opacity,
            textAlign: "center",
            width: "100%",
          }}
          className="px-3"
        >
          {quotes()}
          <p>{testimonial.content}</p>
          <a href={testimonial.authorLink}>
            <h4 className="text-right">- {testimonial.author}</h4>
          </a>
        </div>
      )}
    </Motion>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTestimonials(allTestimonials);
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      let timeout = setTimeout(nextImage, 7000);
    }
  }, [index, testimonials]);

  const nextImage = () => {
    if (index < testimonials.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const showTestimonials = () =>
    testimonials.map((test, i) => {
      let pos;

      if (i === index) {
        pos = "center";
      } else if (
        index === i + 1 ||
        (i === testimonials.length - 1 && index === 0)
      ) {
        pos = "left";
      } else {
        pos = "right";
      }

      return <Testimonial key={test.author} pos={pos} testimonial={test} />;
    });

  return (
    <section
      id="testimonials"
      style={{ position: "relative", paddingBottom: 100 }}
    >
      <TestimonialSvgTop src="/legacy-1/shapes/testimonial-top.svg" />
      <Container>
        <Row>
          <Col xs="12" sm={{ size: 10, offset: 1 }}>
            <h2 className="mb-5" style={{ maxWidth: 750, margin: "0 auto" }}>
              Testimonials
            </h2>

            <div className="d-flex justify-content-center">
              <div
                style={{
                  position: "relative",
                  height: 300,
                  maxWidth: 500,
                  width: "100%",
                }}
              >
                {showTestimonials()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
