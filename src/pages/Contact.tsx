import { useState, useEffect } from "react";
import telegram from "../images/icons/telegram.png";
import linkedin from "../images/icons/linkedin.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Contact() {
  const [toggle, setToggle] = useState(false);
  let { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 ? setToggle(true) : setToggle(false);
  }, [width]);

  return (
    <div className="bg page all grid grid--1x2">
      <div>
        <h2>Contact me</h2>
        <form
          action="https://formsubmit.co/lyskovmaxym@gmail.com"
          method="POST"
        >
          <div className="">
            <input placeholder="Name" type="text" name="name" required />
          </div>

          <div className="">
            <input placeholder="Email" type="email" name="email" required />
          </div>

          <div className="">
            <input placeholder="Subject" type="text" name="subject" required />
          </div>

          <div className="">
            <input placeholder="Company" type="text" name="company" required />
          </div>

          <div className="">
            <textarea
              rows={toggle ? 9 : 3}
              placeholder="Details"
              name="details"
              required
            />
          </div>

          <button
            className="btn btn--primary btn--outline btn--block btn--large btn--nav"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="about--title-container contact--bottom">
        <h3>Or message me</h3>
        <div>
          <a
            href="https://t.me/mlr00k"
            target="_blank"
            rel="noreferrer"
            className="social-link color "
          >
            <img src={telegram} width="36px" height="36px" alt="info icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/maxym-lyskov-806a54229"
            target="_blank"
            rel="noreferrer"
            className="social-link color "
          >
            <img
              src={linkedin}
              width={toggle ? "40px" : "36px"}
              height={toggle ? "40px" : "36px"}
              alt="info icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
