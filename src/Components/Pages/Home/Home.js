import React from "react";
import Footer from "./Footer/Footer";
import "./Home.css";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://github.com/GEN7232"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/genevieve-nelson96/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm{" "}
                <span className="highlighted-text">Genevieve Nelson</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <span className="profile-role-tagline">
                  Making each application rock in its own way!
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a
                href="Genevieve-Nelson-Resume-2025.pdf"
                download="Genevieve-Nelson-Resume-2025.pdf"
              >
                <Button className="button" variant="dark">
                  Get Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <Footer />
      <p>
      Hello, I'm Genevieve Nelson, and I am a fullstack web and software developer. I have experience programming utilizing HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Vue.js, Python, Visual Basic, .NET, ASP, MongoDB, SQL, Git, and more. I originally went to school to be an audio engineer, and worked in that field for several years before attending a coding bootcamp hosted by Rutgers University in 2022. Since then I have been working in technology as a developer. I like to use the skills I learned in the studio to make myself a better developer. That extends to troubshooting, balancing creativity with technical skills, client relations, and more.
      </p>
    </div>
  );
}

export default Home;
