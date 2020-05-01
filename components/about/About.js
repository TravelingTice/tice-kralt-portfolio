const About = () => (
  <section id="about" style={{backgroundColor: '#121a2b', color: '#fcfcfc', padding: '10px 0'}}>
    
    <h2 className="my-4">About Me</h2>

    <div className="about-me">

      <img src="images/profileSQ.jpg" alt="" className="avatar img-fluid rounded-circle hoverable"/>

      <div className="me-description">
        <h3>Matthijs Kralt</h3>
        <p>Driven full-stack web developer with 3 years experience as a freelancer in the field. Have worked with many international clients on various projects and was always able to meet their expectations. </p>

        <p>My strength lies in strong communication with my client during the workflow. I always make sure me and my client are on the same page about the project, to make sure that the end project is of the best quality and service.</p>

        <p>Prefer working with ReactJs and Rails API but my skills also include NodeJS, NextJS, Express, PostgreSQL and Ruby on Rails.</p>

      </div>

    </div>

  </section>
);

export default About;