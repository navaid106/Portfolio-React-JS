import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-2 bg-dark text-white">
      <div className="container">
        <h2 className="mb-4">My Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" 
                className="card-img-top" 
                alt="Project 1"
                style={{ objectFit: 'cover', height: '200px' }} // Set a fixed height for the image
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" 
                className="card-img-top" 
                alt="Project 2"
                style={{ objectFit: 'cover', height: '200px' }} // Set a fixed height for the image
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Add more project cards here if needed */}
            {/* Project 3 */}
            <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" 
                className="card-img-top" 
                alt="Project 2"
                style={{ objectFit: 'cover', height: '200px' }} // Set a fixed height for the image
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
