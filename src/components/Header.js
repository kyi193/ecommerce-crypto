import React from "react";
import moon from "../img/moon-hero.png";

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src={moon} alt="Logo" class="header__logo"></img>
      </div>

      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Moon</span>
          <span class="heading-primary--sub">is where we're headed</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
