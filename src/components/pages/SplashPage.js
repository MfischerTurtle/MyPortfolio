import React from 'react';
import TurtleHello from '../../assests/pics/HelloTurtle.png'
function SplashPage() {
    return (
      <section id="about-me" className="my-5 intro">
        
        <div class="turtle-img">
            <img src={TurtleHello} alt="Turtle" />
          </div>
        
        <div className="flex-row">
          
            
            <p class="intro-p">
           Hello to whomever is viewing this. This is a collection of my work and somthings about myself. Hope you like what you see and enjoy the things i have worked on.
            </p>
       </div>
    
      </section>
    );
  }
  
  export default SplashPage;