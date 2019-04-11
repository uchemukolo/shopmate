import React from "react";
import "./button.scss";

const Button = ({ name, classes, onclick }) => {
  return (
    <button className={classes} onClick={onclick}>
      {name}
    </button>
  );
};

export default Button;