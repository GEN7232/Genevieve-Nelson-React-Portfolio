import React from "react";
import "./Portfolio.css";
import kate from "../../../assets/Portfolio/Kate-Ortiz.png";
import tracklete from "../../../assets/Portfolio/TRACKLETE.png";
import IMDMe from "../../../assets/Portfolio/IMDMe.png";
import password from "../../../assets/Portfolio/password-generator.png";

function Portfolio() {
  return (
    <div className="container-container">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="portfolio">
          <div className="example">
            <br></br>
            <a
              href="https://www.kateortiz.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Kate Ortiz Songwriter/Producer Website</h2>
            </a>
            <br></br>
            <a
              href="https://www.kateortiz.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="port-img"
                src={kate}
                alt="Kate Ortiz Songwriter/Producer website"
              />
            </a>
            <p>
              A professional website for musician, songwriter, and music
              producer Kate Ortiz made using React.js.
              <br></br>
              <br></br>
              <a
                href="https://github.com/GEN7232/KateOrtiz"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
              <br></br>
              <a
                href="https://www.kateortiz.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Website
              </a>
            </p>
          </div>
          <div className="example">
            <br></br>
            <a
              href="https://github.com/GEN7232/fitness-website"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Tracklete</h2>
            </a>
            <br></br>
            <a
              href="https://github.com/GEN7232/fitness-website"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="port-img"
                src={tracklete}
                alt="Tracklete fitness tracker website"
              />
            </a>
            <p>
              Made for my final project from my coding bootcamp through Rutgers.
              It is a fitness tracking website where the user can find and save
              exercises, track calories, and chat with other fitness fans. Made using React.js.
              <br></br>
              <br></br>
              <a
                href="https://github.com/GEN7232/fitness-website"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
          <div className="example">
            <br></br>
            <a
              href="https://github.com/GEN7232/movie-review-site"
              target="_blank"
              rel="noreferrer"
            >
              <h2>IMDMe</h2>
            </a>
            <br></br>
            <a
              href="https://github.com/GEN7232/movie-review-site"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="port-img"
                src={IMDMe}
                alt="IMDMe movie review website"
              />
            </a>
            <p>
              My second project for my coding bootcamp. With this website the
              user sees the top ten trending movies on the homepage. They can
              then log in, review movies, see other reviews, and comment on said
              reviews. Made using HTML, CSS, and Javascript.
              <br></br>
              <br></br>
              <a
                href="https://github.com/GEN7232/movie-review-site"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
          <div className="example">
            <br></br>
            <a
              href="https://gen7232.github.io/Password-Generator-homework2/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Password Generator</h2>
            </a>
            <br></br>
            <a
              href="hhttps://gen7232.github.io/Password-Generator-homework2/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="port-img"
                src={password}
                alt="Password generator"
              />
            </a>
            <p>
              A javascript run password generator made as a homework assignment
              for my coding bootcamp. The user picks how many characters their
              password would be, and what type of characters are used for it,
              then a random password using those answers is generated. Made using HTML, CSS, and Javascript.
              <br></br>
              <br></br>
              <a
                href="https://github.com/GEN7232/Password-Generator-homework2"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
              <br></br>
              <a
                href="https://gen7232.github.io/Password-Generator-homework2/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Application
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
