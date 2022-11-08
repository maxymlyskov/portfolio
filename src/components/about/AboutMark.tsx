import React from "react";
interface AboutMarkProps {
  title: string;
  subTitle: string;
  blue?: boolean;
}
function AboutMark({ title, subTitle, blue }: AboutMarkProps) {
  return (
    <div className={blue ? "about-mark about-mark-end" : "about-mark"}>
      <h4>{title} </h4>
      <h5>{subTitle}</h5>
    </div>
  );
}

export default AboutMark;
