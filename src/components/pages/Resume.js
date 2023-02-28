import React from 'react';
import myResume from '../../assests/resume/MattsResume.pdf'
function Resume() {
  return (
    <div> 
      <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
        <p class='resTop'>
           this my old resume for now new updated vision comming soon</p>
      <iframe title="resume" src={myResume} width='100%' height='1150px'></iframe>
    </div>
  );
}

export default Resume;
