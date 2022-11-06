import AboutList from "./AboutList";

function AboutSkills() {
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
    <>
      <h1>Skills</h1>

      <div className="about--list-container">
        <AboutList title="Front-end" listItems={frontEnd} />
        <AboutList title="Back-end" listItems={backEnd} />
        <AboutList title="SCM" listItems={SCM} />
        <AboutList title="Other" listItems={other} />
      </div>
    </>
  );
}

export default AboutSkills;
