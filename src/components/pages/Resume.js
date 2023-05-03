import React from 'react';
import myResume from '../../assests/resume/MattsResume.pdf'
function Resume() {
  return (
    <div> 
      <h1 id="about" className="section-title primary-border">
          My Resume
        </h1>
      <iframe title="resume" src={myResume} width='50%' height='1150px' class='resume'></iframe>
    </div>
  );
}

export default Resume;
