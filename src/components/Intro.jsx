import React from "react";
import Resume from "./subcomponents/Resume_L_Kevin_Resendiz.pdf"
import ResumeIcon from "./images/resume-icon.png"

function Intro() {
  return (
    <>
      <section>
        <div className="introContainer">
          <div className="intro">
            <h2>Hello, my name is</h2>
            <h1 className="page-title">Kevin Resendiz</h1>
            <p>I started my web development journey in 2024 and have been passionate about creating and designing digital experiences. I'm looking for opportunities to contribute to my skills and growth as a developer. Stay tuned for more updates!</p>
          </div>
          <div className="resume">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <h2>View My Resume</h2>
              <img src={ResumeIcon} alt="Resume Icon" className="resume-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro
