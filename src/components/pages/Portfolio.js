import React from "react";
import Project from "./Projects";
import imgZero from "../../assests/pics/TimeWellSpent.png";
import imgOne from "../../assests/pics/ItsSoBad.png"
import imgTw0 from "../../assests/pics/MTG.png"
import imgThree from "../../assests/pics/NoteTaker.png"
import imgFour from "../../assests/pics/WeatherTracker.png"
import imgFive from "../../assests/pics/DayPlaner.png"
import imgSix from "../../assests/pics/JavaQuiz.png"
import imgSeven from "../../assests/pics/PasswordGen.png"


const projects = [
  {
    id: 0,
    image: imgZero,
    repo: "https://github.com/TotallyReactingNodeTurtles/timewellspent",
    live: "http://www.time-well-spent.com/",
  },
  {
    id: 1,
    image: imgOne,
    repo: "https://github.com/Three-SQLteers/MovieApp",
    live: " https://so-bad-its-good.herokuapp.com",
  },
  {
    id: 2,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
  },
  {
    id: 3,
  
    image: imgThree, 
    repo: "https://github.com/MfischerTurtle/Notehomework",
    live: "https://notehomework5235.herokuapp.com/",
  }, 
  {
    id: 4,
  
    image: imgFour, 
    repo: "https://github.com/MfischerTurtle/WeatherTracker",
    live: "https://mfischerturtle.github.io/WeatherTracker/",
  },
  {
    id: 5,
  
    image: imgFive, 
    repo: "https://github.com/MfischerTurtle/DayPlanner",
    live: "https://mfischerturtle.github.io/DayPlanner/",
  }, 
  {
    id: 6,
  
    image: imgSix, 
    repo: "https://github.com/MfischerTurtle/JavaScriptQuiz",
    live: "https://mfischerturtle.github.io/JavaScriptQuiz/",
  },
  {
    id: 7,
  
    image: imgSeven, 
    repo: "https://github.com/MfischerTurtle/PasswordGenerator",
    live: "https://mfischerturtle.github.io/PasswordGenerator/",
  },
];



function Portfolio() {
  return (
    <div>
       <h1 id="about" className="section-title primary-border">
          Portfolio
        </h1>
      <hr />

      <Project projects={projects}/>
    </div>
  );
}

export default Portfolio;