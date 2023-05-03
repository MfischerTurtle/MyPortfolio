import React from 'react';
import profilePic from '../../assests/pics/profilePic.jpg'
import '../../style.css'

 function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profilePic} className="img-circle"  style={{ width: "50%" }} alt="profile" />
          </div>
          <p>
          Somethings you might want to know about me. First, is that I am an avid gamer who loves looter shooters and RPG style games. I am a father and husband. My daughter is 4 years old and I have been with my wife for 8 years now. Also, I play a trading card game called Magic the Gathering. I have been playing it since 6th grade. I own two turtles named Mikey and Leo. As you guessed they are named after the Ninja Turtles. I am a very big fan of the Teenage Muntant Ninja Turtles. For most of my life, I lived in IL but moved back and forth from AZ about 4 times now.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;