import React from "react";
import Classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={Classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
