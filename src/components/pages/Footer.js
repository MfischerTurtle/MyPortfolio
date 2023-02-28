import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/MfischerTurtle?tab=repositories" target="_blank" rel="noreferrer">
            Matthew Fischer
          </a>
          {" "}
         <a
            href="https://www.linkedin.com/in/kungfu-turtle-147740267/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;