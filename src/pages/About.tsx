import AboutSkills from "../components/about/AboutSkills";
import AboutMark from "../components/about/AboutMark";
import AboutEducation from "../components/about/AboutEducation";
import AboutProjects from "../components/about/AboutProjects";
import AboutWelcome from "../components/about/AboutWelcome";
import Button from "../components/common/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" bg page">
      <AboutWelcome />
      <AboutSkills />
      <AboutMark
        title="My passion is make simple, quick and productive code."
        subTitle="I enjoy improve my knowledge every project I do."
      />

      <AboutEducation />
      <AboutProjects />
      <AboutMark
        title="“Nature is pleased with simplicity.”"
        subTitle="Isaac Newton"
        blue
      />

      <div className="about--end">
        <h3>
          I am <u>so excited</u> to be hired exactly by you.
        </h3>
        <Link to="/contact">
          <Button title="Contact" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default About;
