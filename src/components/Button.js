import React from "react";
import "../styles/Button.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Button(props) {
  let classes = "btn";
  let disabled = props.disabled ? true : false;
  let buttonText = props.buttonText ? props.buttonText : "Default";
  let variant = props.variant ? props.variant : false;
  let size = props.size ? props.size : null;
  let color = props.color ? props.color : null;
  let startIcon = props.startIcon ? props.startIcon : false;
  let endIcon = props.endIcon ? props.endIcon : false;

  if (size) {
    switch (size) {
      case "sm":
        classes += " primary-btn";
        classes += " sm-btn";
        break;
      case "md":
        classes += " primary-btn";
        classes += " md-btn";
        break;
      case "lg":
        classes += " primary-btn";
        classes += " lg-btn";
        break;
      default:
        break;
    }
  }

  if (color) {
    switch (color) {
      case "default":
        break;
      case "primary":
        classes += " primary-btn";
        break;
      case "secondary":
        classes += " secondary-btn";
        break;
      case "danger":
        classes += " danger-btn";
        break;
      default:
        break;
    }
  }

  if (variant === "text" && disabled === true) {
    classes += " text-disabled-btn";
  } else {
    if (variant === "outline") {
      classes += " outline-btn";
    }

    if (variant === "text") {
      classes += " text-btn";
    }
  }

  return (
    <button disabled={disabled} className={classes}>
      {startIcon ? <AddShoppingCartIcon style={{ fontSize: 12 }} /> : null}{" "}
      {buttonText}{" "}
      {endIcon ? <AddShoppingCartIcon style={{ fontSize: 12 }} /> : null}
    </button>
  );
}

export default Button;
