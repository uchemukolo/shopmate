import React from "react";
import "./button.scss";

const Button = ({ name, classes }) => {
  return (
    <button className={classes}>
      {name}
    </button>
  );
};

export default Button;