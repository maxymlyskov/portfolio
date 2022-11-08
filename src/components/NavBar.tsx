import Button from "./common/Button";
import Navigation from "./common/Navigation";
import { Link } from "react-router-dom";

function NavBar() {
  const children = (
    <ul>
      <Link to="/contact">
        <Button title="Contact" />
      </Link>
    </ul>
  );
  return <Navigation children={children} />;
}

export default NavBar;
