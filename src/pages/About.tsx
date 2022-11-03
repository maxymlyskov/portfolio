import React from "react";
import AboutList from "../components/AboutList";
import AboutMark from "../components/AboutMark";

function About() {
  const frontEnd = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "React",
    "React Native",
    "Redux",
  ];
  const backEnd = ["Node JS", "Express", "MongoDB"];
  const SCM = ["Git"];
  const other = [
    "OOP usage",
    "Fast Learner",
    "Strong Analytical Skills",
    "Fluent in English",
  ];
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
      <h1>Skills</h1>
      <AboutList title="Front-end" listItems={frontEnd} />
      <AboutList title="Back-end" listItems={backEnd} />
      <AboutList title="SCM" listItems={SCM} />
      <AboutList title="Other" listItems={other} />
      <AboutMark />
    </div>
  );
}

export default About;
