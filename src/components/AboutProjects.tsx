import React from "react";
import ReactPlayer from "react-player/youtube";
import AboutTechnologies from "../components/AboutTechnologies";

function AboutProjects() {
  const eatIs = [
    "JavaScript",
    "ES6+",
    "React",
    "React Native",
    "Redux",
    "JWT",
    "Node JS",
    "MongoDB",
  ];
  const mowee = [
    "JavaScript",
    "ES6+",
    "React",
    "React Native",
    "React context",
    "JWT",
    "Node JS",
    "MongoDB",
  ];
  const vidly = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "ES6+",
    "React",
    "JWT",
    "Node JS",
    "MongoDB",
  ];
  return (
    <>
      <h1>Projects</h1>
      <h2 className="about--list-title">Recent</h2>
      <div className="about--project">
        <h3>Eat Is</h3>
        <AboutTechnologies technologies={eatIs} />
        <div className="about--project-video">
          <ReactPlayer
            width="240px"
            style={{ margin: "20px" }}
            loop
            url="https://youtu.be/iKK9Rx-DFI4"
          />
        </div>
        <h5>
          Application, that makes it easier stick to your meal schedule.
          Searching with plenty of filters with ability to save it to your
          account, where you see all your day needs, calculating daily calories,
          day and week plans, adding notes about your recipe and more is all
          about Eat Is mobile app.{" "}
        </h5>
      </div>
      <div className="about--project">
        <h3>Mowee</h3>
        <AboutTechnologies technologies={mowee} />
        <div className="about--project-video">
          <ReactPlayer
            width="240px"
            loop
            style={{ margin: "20px" }}
            url="https://youtu.be/5f1jcnyisEY"
          />
        </div>
        <h5>
          With mowee you can search any movie you want, save it to your account,
          find info about it, rate it as well as find a random movie. You can
          also check recent, saved and rated movies.{" "}
        </h5>
      </div>
      <div className="about--project">
        <h3>Vidly</h3>
        <AboutTechnologies technologies={vidly} />
        <div className="about--project-video">
          <ReactPlayer
            width="640px"
            loop
            style={{ margin: "20px" }}
            url="https://youtu.be/Mcf1tXGqAgI"
          />
        </div>
        <h5>
          Vidly is react project, where you can log in, sign up to your account,
          save movie, sort, filter and play with it as with your customers.{" "}
        </h5>
      </div>
    </>
  );
}

export default AboutProjects;
