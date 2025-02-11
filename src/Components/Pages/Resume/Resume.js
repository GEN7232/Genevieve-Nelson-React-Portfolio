import React from "react";
import resume from "../../../assets/Resume/Genevieve-Nelson-Resume-2025.png";
import "./Resume.css";

function Resume() {
  return (
    <div className="container-container">
      <div className="container">
        <a
          href="Genevieve-Nelson-Resume-2025.pdf"
          download="Genevieve-Nelson-Resume-2025.pdf"
        >
          <h1>Click to download my resume!</h1>
        </a>
        <a
          href="Genevieve-Nelson-Resume-2025.pdf"
          download="Genevieve-Nelson-Resume-2025.pdf"
        >
          <img className="res-img" src={resume} alt="Genevieve Nelson Resume" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
