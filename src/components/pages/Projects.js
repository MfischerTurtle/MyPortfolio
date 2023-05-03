import React from "react";

function Project(props) {
  return (
    <div>
      <div className="card-flex">
        {props.projects.map((project) => (
          <div className="card-holder" key={project.id}>
            <div className="card">
              <div class="card-image">
                  <img src={project.image} style={{width:"100%"}} alt="Placeholder image" />  
              </div>
              <div className="card-content">
                  <div className="card">
                    <footer class='card-footer' className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        
                      >
                        See the Repo!
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item"
                        
                      >
                        See the Live Site!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Project;