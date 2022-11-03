interface AboutListProps {
  title: string;
  listItems: string[];
}

function AboutList({ title, listItems }: AboutListProps) {
  return (
    <div>
      <h2 className="about--list-title">{title}</h2>
      <ul className="about--list">
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutList;
