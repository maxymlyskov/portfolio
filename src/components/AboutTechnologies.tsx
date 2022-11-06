interface AboutTechnologiesProps {
  technologies: string[];
}

function AboutTechnologies({ technologies }: AboutTechnologiesProps) {
  return (
    <div className="about--technologies">
      {technologies.map((tech) => (
        <div className="about--technologie">{tech}</div>
      ))}
    </div>
  );
}

export default AboutTechnologies;
