import AboutTechnologies from "./AboutTechnologies";

interface AboutProjectProps {
  title: string;
  technologies: string[];
  description: string;
  children?: JSX.Element;
}

function AboutProject({
  title,
  technologies,
  description,
  children,
}: AboutProjectProps) {
  return (
    <div className="about--project">
      <h3>{title}</h3>
      <AboutTechnologies technologies={technologies} />
      <div className="about--project-video">{children}</div>
      <h5>{description}</h5>
    </div>
  );
}

export default AboutProject;
