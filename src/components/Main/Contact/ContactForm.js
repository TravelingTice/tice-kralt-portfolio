import React, { Component } from 'react';
import { MDBIcon, MDBBtn, MDBInput } from 'mdbreact';

class ContactForm extends Component {
  state = {
    email: '',
    message: ''
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  updateMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  send = () => {
    console.log('send');
  }

  render() {
    const { email, message } = this.state;
    return (
      <div className="contact-form">

      <MDBInput
        onChange={this.updateEmail}
        value={email}
        icon="envelope"
        label="Your email"
        type="text"
        iconClass="grey-text"
        id="form-email"/>

      <MDBInput
        onChange={this.updateMessage}
        value={message}
        icon="pencil-alt"
        label="Message"
        iconClass="grey-text"
        type="textarea"
        id="form-text"/>

      <div className="text-center">
        <MDBBtn 
        color="light-green"
        onClick={this.send}>Submit</MDBBtn>
      </div>

      </div>
    )
  }
}

export default ContactForm;