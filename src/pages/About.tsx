import AboutSkills from "../components/about/AboutSkills";
import AboutMark from "../components/about/AboutMark";
import AboutEducation from "../components/about/AboutEducation";
import AboutProjects from "../components/about/AboutProjects";
import AboutWelcome from "../components/about/AboutWelcome";
import Button from "../components/common/Button";
import Footer from "../components/Footer";

function About() {
  return (
    <div className=" bg about">
      <AboutWelcome />
      <AboutSkills />
      <AboutMark />
      <AboutEducation />
      <AboutProjects />
      <div className="about-mark about-mark-end ">
        <h4> My passion is make simple, quick and productive code.</h4>
        <h5>
          I enjoy <u>improve</u> my knowledge every project I do.{" "}
        </h5>
      </div>
      <div className="about--end">
        <h3>
          I am <u>so excited</u> to be hired exactly by you.
        </h3>
        <Button title="Contact" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
