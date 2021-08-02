import React from "react";
import "../styles/ButtonHeading.css";

function ButtonHeading(props) {
  const text = props.text;
  return <p>{text}</p>;
}

export default ButtonHeading;
