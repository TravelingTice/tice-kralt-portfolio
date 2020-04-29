import ContactInput from './ContactInput';

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
    return (
      <form action="https://formspree.io/xeqeewye" method="POST" className="contact-form">

      <ContactInput
        // onChange={this.updateEmail}
        // value={email}
        icon="envelope"
        label="Your email"
        iconClass="grey-text"
        name="email"
        id="form-email"/>

      <ContactInput
        // onChange={this.updateMessage}
        // value={message}
        icon="pencil-alt"
        label="Message"
        iconClass="grey-text"
        type="textarea"
        name="message"
        id="form-text"/>

      <div className="text-center">
        <input type="submit" className="btn btn-light-green" value="Send"/>
      </div>

      </form>
    )
  }
}

export default ContactForm;