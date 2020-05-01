import { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Alert } from 'reactstrap';
import { FormGroup, FormControl, InputLabel, Input, TextField, Button } from '@material-ui/core';
import renderHTML from 'react-render-html';

const ContactSvgTop = styled.img`
  position: absolute;
  height: 70px;
  width: 100%;
  top: -69px;
  @media (min-width: 768px) {
    height: 100px;
    top: -99px;
  }
`;

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setMessage('<p>Incoming...</p>');

    const data = await fetch('https://formspree.io/xeqeewye', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    }).then(res => res.json());

    if (data.ok) {
      setMessage('<p>Cool, got it!</p><p>Will get back to you as soon as I can 💪🏼</p>');
    } else {
      setMessage('<p>Whoa, that didn\'t work! Sorry about that. Please try again soon.</p>');
    }
  }

  const showForm = () => (
    <Form 
      onSubmit={handleSubmit} 
      className="mt-4">
       <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" name="email" />
        </FormControl>
      </FormGroup>

      <FormGroup className="mt-3">
        <FormControl>
          <TextField
            id="content"
            label="Content"
            name="message"
            multiline
            rows={4}
          />
        </FormControl>
      </FormGroup>

      <div className="my-4">
        <Button type="submit" style={{color: 'white'}} color="primary" variant="contained">Send</Button>
      </div>

    </Form>
  )

  const showMessage = () => message && <div className="my-5 text-muted font-italic">{renderHTML(message)}</div>

  return (
    <section id="contact" style={{position: 'relative', backgroundColor: '#e5e5e5', paddingBottom: 90}}>
      <ContactSvgTop src="/shapes/contact-top.svg" alt="" />

      <Container>
        <Row>
          <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
            <h2>Contact</h2>
          </Col>

          <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} style={{height: 240}}>
            {!message ? showForm() : showMessage()}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;