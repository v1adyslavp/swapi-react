import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <header>
      <div className="Home-title">
        <div className="Home-title-STARWARS">STAR</div>
        <div className="Home-title-middle">A VISUAL GUIDE</div>
        <div className="Home-title-STARWARS">WARS</div>
      </div>
      <nav>
        <div className="Home-Items-Container">
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/planets">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
                alt="Planets"
              />
              <div className="Home-Item-label">Planets</div>
            </Link>
          </div>
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/starships">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/starships.jpg"
                alt="Starships"
              />
              <div className="Home-Item-label">Starships</div>
            </Link>
          </div>
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/vehicles">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg"
                alt="Vehicles"
              />
              <div className="Home-Item-label">Vehicles</div>
            </Link>
          </div>
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/people">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/character.jpg"
                alt="People"
              />
              <div className="Home-Item-label">Characters</div>
            </Link>
          </div>
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/films">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/films.jpg"
                alt="Films"
              />
              <div className="Home-Item-label">Films</div>
            </Link>
          </div>
          <div className="Home-Item-Wrapper">
            <Link className="Home-Item-link" to="/species">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/species.jpg"
                alt="Species"
              />
              <div className="Home-Item-label">Species</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Home;
