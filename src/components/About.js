import React from 'react';

const About = () => {
  return (
    
    <section id="about" className="py-5 bg-light" style={{ minHeight: '100vh' }}>
            <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img 
              src='https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg'
              alt="Profile" 
              className="img-fluid shadow-lg border border-5 border-info" 
              style={{ maxWidth: '300px' }} 
            />
          </div>
          
          {/* About Text */}
          <div className="col-lg-7">
            <h2 className="display-5 mb-3">About Me</h2>
            <p className="lead">
              I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
            </p>
            <p className="mb-4">
              With a strong background in both frontend and backend development, I strive to create seamless user experiences while writing clean, efficient, and maintainable code. I’m always eager to learn new technologies and improve my skills.
            </p>
            
            {/* Contact and Download CV buttons */}
            <div className="mt-4">

              <a href="#contact" className="btn btn-primary m-3">Get In Touch</a>
              <a href="/CV.pdf" download className="btn btn-outline-secondary">
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
