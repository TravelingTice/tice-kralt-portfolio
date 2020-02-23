import React, { Component } from 'react';

class Testimonials extends Component {
  state = {
    leftOffset: 32
  }

  render() {
    return (
      <section id="testimonials">

        <div className="title-container">
          <h2 className="title"><span className="grey-text">T</span>estimonials</h2>
        </div>

        <div className="testimonial">
          <div className="testimonial-text">
            <span className="quote">“</span>

            <p><i>Tice is a trustworthy, hard working, no nonsense type of guy. He has been someone I can rely on to get things done and take the extra step to infuse his creativity into whatever project he is working on. He’s helped me with projects ranging from rebuilding my website to acting as a consultant regarding my video production. In the process of doing so, he’s also become a real friend.</i></p>

            <span className="quote">”</span>

          </div>

          <h3 className="author">
            - Matt Galat
          </h3>
        </div>
      </section>
    )
  }
}

export default Testimonials;