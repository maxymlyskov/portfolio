import Button from "./common/Button";
import Navigation from "./common/Navigation";

function NavBar() {
  const children = (
    <ul>
      <li className="nav__item">
        <Button title="Contact" />
      </li>
    </ul>
  );
  return <Navigation children={children} />;
}

export default NavBar;
