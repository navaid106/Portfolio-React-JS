import React from 'react';
import { ReactTyped } from 'react-typed'; // Correct import
import '../App.css';

const Home = () => {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center justify-content-center position-relative"
    >
      {/* Background container */}
      <div
        className="background-image position-absolute w-100 h-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1678055703308-42e919de802c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)', // Subtle blur for a cleaner effect
          zIndex: '-1',
        }}
      ></div>

      {/* Content container */}
      <div className="text-center text-white" style={{ zIndex: '2' }}>
        {/* Name */}
        <h1 className="display-4 fw-bold mb-3" style={{fontSize:'80px'}}>Hello, I'm Mohd Navaid</h1>
        <hr style={{ borderColor: '#fff', width: '50%', margin: '0 auto 20px' }} />

        {/* Typing animation */}
        <div className="bg-dark px-3 py-2 rounded shadow-lg" style={{ display: 'inline-block' }}>
          <ReactTyped
            className="lead fw-bold text-warning display-6"
            strings={[
              'Full Stack Developer',
              'Designer',
              'Problem Solver',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>

        {/* Call-to-action button */}
        <div className="mt-4">
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
