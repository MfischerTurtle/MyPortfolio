import React from "react";

function Project(props) {
  return (
    <div>
      <div>
        {props.projects.map((project) => (
          <div class="card-holder">
            <div className="card">
              <div className="card-image">
                <figure>
                  <img src={project.image} style={{width:"35%"}} alt="Placeholder image" />  
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    Languages: {project.languages}
                    <br />
                    NPM Packages: {project.packages}
                  </div>
                  <div className="card">
                    <footer className="card-footer">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;