import { Link } from "react-router-dom";

function MainTitle() {
  return (
    <div className="main-title--container">
      <h2>I enjoy working with your ideas</h2>
      <h3>
        You come up with something - I do it in the better possible way. React,
        React Native, Node JS, check out what you are intersting on the{" "}
        <Link to="/about">about page</Link>
      </h3>
    </div>
  );
}

export default MainTitle;
