import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HumanGreetingProximityIcon from "mdi-react/HumanGreetingProximityIcon";
import Button from "./Button";

interface NavigationProps {
  children: JSX.Element[] | JSX.Element;
}

const Navigation: React.FC<NavigationProps> = ({
  children,
}: NavigationProps) => {
  const [toggle, setToggle] = useState(false);
  let { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 ? setToggle(true) : setToggle(false);
  }, [width]);

  return (
    <nav className="nav nav--border collapsible ">
      <div className="nav__left">
        <a href="/">
          <div className="img__container">
            <img
              src={require("../../images/nav.jpg")}
              alt="nav image"
              className="img__round img__nav"
            />
          </div>
        </a>
        <div className="line"></div>
        <button className="btn btn--primary btn--outline btn--block btn--large btn--nav">
          About
        </button>
      </div>
      {width <= 768 && (
        <HumanGreetingProximityIcon
          onClick={() => setToggle(!toggle)}
          color="#6461bf"
          size="5rem"
        />
      )}
      {toggle && <>{children}</>}
    </nav>
  );
};

export default Navigation;
