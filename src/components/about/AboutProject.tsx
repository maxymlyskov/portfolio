import AboutTechnologies from "./AboutTechnologies";
import github from "../../images/icons/github.png";

interface AboutProjectProps {
  title: string;
  technologies: string[];
  description: string;
  link: string;
  children?: JSX.Element;
}

function AboutProject({
  title,
  technologies,
  description,
  link,
  children,
}: AboutProjectProps) {
  return (
    <div className="about--project">
      <div className="about--title-container">
        <h3>{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="social-link color "
        >
          <img src={github} width="36px" height="36px" alt="info icon" />
        </a>
      </div>
      <AboutTechnologies technologies={technologies} />
      <div className="about--project-video">{children}</div>
      <h5>{description}</h5>
    </div>
  );
}

export default AboutProject;
