import React from "react";
import Project from "./Projects";
import imgOne from "../../assests/pics/ItsSoBad.png"
import imgTw0 from "../../assests/pics/MTG.png"
const projects = [
  {
    id: 0,

    image: imgOne,
    repo: "https://github.com/Three-SQLteers/MovieApp",
    live: " https://so-bad-its-good.herokuapp.com",
  },
  {
    id: 1,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
  },
  {
    id: 2,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
  }, 
  {
    id: 3,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
  },
  {
    id: 4,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
  }, 
  {
    id: 5,
  
    image: imgTw0, 
    repo: "https://github.com/MtgGroupProject/DeckBuilders",
    live: "https://mtggroupproject.github.io/DeckBuilders/",
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