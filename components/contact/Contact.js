import { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form } from 'reactstrap';
import { FormGroup, FormControl, InputLabel, Input, TextField, Button } from '@material-ui/core';

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
    setForm({ ...form, [name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(form);
  }
  const showForm = () => (
    <Form onSubmit={handleSubmit} className="mt-4">
       <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" onChange={handleChange('email')} value={email} />
        </FormControl>
      </FormGroup>

      <FormGroup className="mt-3">
        <FormControl>
          <TextField
            id="content"
            label="Content"
            multiline
            rows={4}
            value={content}
            onChange={handleChange('content')}
          />
        </FormControl>
      </FormGroup>

      <div className="my-4">
        <Button type="submit" style={{color: 'white'}} color="primary" variant="contained">Send</Button>
      </div>

    </Form>
  )

  return (
    <section id="contact" style={{position: 'relative', backgroundColor: '#e5e5e5', paddingBottom: 90}}>
      <ContactSvgTop src="/shapes/contact-top.svg" alt="" />

      <Container>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}}>
            <h2>Contact</h2>
          </Col>

          <Col xs="12" md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
            {showForm()}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;