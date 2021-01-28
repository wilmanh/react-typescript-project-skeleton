import React from "react";
import HeroProps from "./hero.interface";

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { title, subTitle } = props;
  return (
    <section className="hero is-large is-bold is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
        </div>
      </div>
    </section>
  );
};
export default Hero;
