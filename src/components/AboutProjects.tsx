import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import AboutTechnologies from "../components/AboutTechnologies";
import AboutProject from "./AboutProject";

function AboutProjects() {
  const [showPast, setShowPast] = useState(false);
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
  const logos = [
    "HTML5",
    "CSS3",
    "TypeScript",
    "JavaScript",
    "ES6+",
    "React",
    "JWT",
    "Google firebase",
    "Redux",
  ];
  const moshified = ["HTML5", "CSS3", "JavaScript", "ES6+"];
  const fastFood = ["JavaScript", "React", "React Native", "React context"];
  const tenzies = ["HTML5", "CSS3", "JavaScript", "ES6+", "React"];
  return (
    <>
      <h1>Projects</h1>
      <h2 className="about--list-title">Recent</h2>
      <AboutProject
        title="Eat Is"
        description="Application, that makes it easier stick to your meal schedule.
          Searching with plenty of filters with ability to save it to your
          account, where you see all your day needs, calculating daily calories,
          day and week plans, adding notes about your recipe and more is all
          about Eat Is mobile app."
        technologies={eatIs}
        children={
          <ReactPlayer
            width="240px"
            style={{ margin: "20px" }}
            loop
            url="https://youtu.be/iKK9Rx-DFI4"
          />
        }
      />
      <AboutProject
        title="Mowee"
        description="With mowee you can search any movie you want, save it to your account,
        find info about it, rate it as well as find a random movie. You can
        also check recent, saved and rated movies."
        technologies={mowee}
        children={
          <ReactPlayer
            width="240px"
            loop
            style={{ margin: "20px" }}
            url="https://youtu.be/5f1jcnyisEY"
          />
        }
      />
      <AboutProject
        title="Vidly"
        description="Vidly is react project, where you can log in, sign up to your account,
        save movie, sort, filter and play with it as with your customers."
        technologies={mowee}
        children={
          <ReactPlayer
            width="720px"
            height="168px"
            loop
            style={{ margin: "20px" }}
            url="https://youtu.be/Mcf1tXGqAgI"
          />
        }
      />

      <h2 className="about--list-title">Coming soon...</h2>
      <AboutProject
        title="Logos"
        description="Application, where you can trade and sell any kind of staff you want.
        According to beautiful design, messaging with clients and easy
        resgistration with your google account Logos makes selling and buying
        easier."
        technologies={logos}
      />

      <button
        onClick={() => setShowPast(!showPast)}
        className="btn btn--primary btn--outline btn--block btn--large btn--nav btn--about"
      >
        {showPast ? "Hide" : "Show"} past projects
      </button>
      {showPast && (
        <>
          <h2 className="about--list-title">Past projects</h2>
          <AboutProject
            title="Moshified"
            description="Moshified is incredibly beautiful website where you can deploy
          your website in less than 60 seconds, host your application with
          user-friendly control panels and more. (Only front-end)"
            technologies={moshified}
          />
          <AboutProject
            title="FastFood App"
            description="Using fast food app you can find any burger you want from the
          given list of food, use delivery, get details about any meal as
          well as save meals to your personal account. (Only front-end)"
            technologies={fastFood}
          />
          <AboutProject
            title="Tenzies"
            description="Simple web game, where you must unlock all tenzies with the same
          number."
            technologies={tenzies}
          />
        </>
      )}
    </>
  );
}

export default AboutProjects;
