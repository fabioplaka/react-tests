import React from "react";
import "./styles.scss";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div data-test="wrap">
        <div data-test="logo">
          <img data-test="logoImg" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
