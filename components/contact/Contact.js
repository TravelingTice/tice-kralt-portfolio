import { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form } from 'reactstrap';
import { FormGroup, FormControl, InputLabel, Input, TextField } from '@material-ui/core';

const ContactSvgTop = styled.img`
  position: absolute;
  height: 70px;
  width: 100%;
  top: -69px;
`;

const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    content: ''
  });

  const { email, content } = form;

  const handleChange = name => e => {
    console.log(name);
  }

  const handleSubmit = e => {
    e.preventDefault();

  }
  const showForm = () => (
    <Form onSubmit={handleSubmit}>
       <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" onChange={handleChange('email')} value={email} />
        </FormControl>
      </FormGroup>

      <FormGroup>

        <FormControl>
        <InputLabel htmlFor="content">Content</InputLabel>
        <TextField
          id="content"
          multiline
          rows={2}
          rowsMax={4}
        />
        </FormControl>
      </FormGroup>


      {/* <FormGroup>
          <TextField id="content" onChange={handleChange('content')} value={content} />
      </FormGroup> */}
    </Form>
  )

  return (
    <section id="contact" style={{position: 'relative', backgroundColor: '#e5e5e5'}}>
      <ContactSvgTop src="/shapes/contact-top.svg" />

      <Container fluid>
        <Row>
          <Col xs="12">
            <h2>Contact</h2>

            {showForm()}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;