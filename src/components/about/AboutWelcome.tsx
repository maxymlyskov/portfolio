import React from "react";

function AboutWelcome() {
  return (
    <>
      <h4 className="about--email">lyskovmaxym@gmail.com</h4>
      <h3 data-aos="fade-up" className="about--title">
        Hi, my name is Maxym
      </h3>
      <div data-aos="zoom-in" className="img__container">
        <img
          src={require("../../images/about.jpg")}
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
    </>
  );
}

export default AboutWelcome;
