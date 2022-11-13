import telegram from "../images/icons/telegram.png";
import github from "../images/icons/github.png";
import linkedin from "../images/icons/linkedin.png";
function InfoIcons() {
  const size = "36px";

  const social = [
    { img: telegram, url: "https://t.me/mlr00k" },
    { img: github, url: "https://github.com/maxymlyskov" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/maxym-lyskov-806a54229",
    },
  ];
  return (
    <div data-aos="fade-down" className="social-links">
      {((index) => {
        let post = [];

        for (var i = 0; i < social.length; i++) {
          post.push(
            <a
              key={index}
              href={social[i].url}
              target="_blank"
              rel="noreferrer"
              className="social-link color"
            >
              <img
                src={social[i].img}
                width={size}
                height={size}
                alt="info icon "
              />
            </a>
          );
        }

        return post;
      })()}
    </div>
  );
}

export default InfoIcons;
