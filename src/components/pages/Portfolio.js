import React from "react";
import Project from "./Projects";
import imgOne from "../../assests/pics/ItsSoBad.png"
import imgTw0 from "../../assests/pics/MTG.png"
const projects = [
  {
    id: 0,
    title: "So Bad its Good",
    languages: "Sql, Handlebars, css, js",
    packages: " bcrypt, wxpress, express-handlebars, node, sequelize, axios ",
    image: imgOne,
    description: "Allows you to rate movies and leave comments I did the backend and some front end!",
    repo: "https://github.com/Three-SQLteers/MovieApp",
    live: " https://so-bad-its-good.herokuapp.com",
  },
  {
    id: 1,
    title: "MTGDeckBuilder",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: imgTw0,
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
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