import React from "react";
import AboutList from "../components/AboutList";
import AboutSkills from "../components/AboutSkills";
import AboutMark from "../components/AboutMark";
import AboutEducation from "../components/AboutEducation";

function About() {
  const univ = ["Taras Shevchenko National University of Kyiv"];
  return (
    <div className=" bg about">
      <h3 className="about--title">Hi, my name is Maxym</h3>
      <div className="img__container">
        <img
          src={require("../images/nav.jpg")}
          alt="Maxym`s image"
          className="img__round img__about"
        />
      </div>
      <div className="about--bio">
        <h3>
          I`m a <u>passionate</u> and <u>pragmatic</u> software engineer,
          specializing in mobile and web development.
        </h3>
        <h3>
          I can deliver <u>clean code</u> assisting your project in all stages
          of software development lifecycle.
        </h3>
        <h3>
          I feel open <u>to discover new ways</u> how to achieve tasks better
          and better every single project. Using the same technologies I enjoy{" "}
          <u>write code cleaner</u> every time I get to work.
        </h3>
      </div>
      <AboutSkills />
      <AboutMark />
      <AboutEducation />
    </div>
  );
}

export default About;
