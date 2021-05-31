import React from "react";

function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero", //makes all the pages which have hero component to have defaulthero styles, except otherwise stated
};
