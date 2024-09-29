import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Font Awesome icons for social media

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* About Me Section */}
          <div className="col-md-4">
            <h5>About Me</h5>
            <p>
              I'm a passionate Full Stack Developer with experience in building web applications using the latest technologies. I love solving complex problems and learning new things every day.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#projects" className="text-white">Projects</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <div>
              <a href="https://github.com/your-github" className="text-white me-3">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" className="text-white me-3">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com/your-twitter" className="text-white">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Mohd Navaid. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
