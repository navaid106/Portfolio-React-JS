import React from 'react';
import '../App.css'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'HTML & CSS', level: 'Expert' },
    { name: 'Django', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Expert' },
    { name: 'Bootstrap', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <p className="card-text">{skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
