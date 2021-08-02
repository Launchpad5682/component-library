import React from "react";
import "../../styles/InputFields/InputField.css";

function InputField(props) {
  const labelText = "Label";
  const placeholderText = "Placeholder";
  let classes = "default-input";
  const error = props.error ? props.error : null;
  const disabled = props.disabled ? props.disabled : null;
  const helperText = props.helperText ? props.helperText : false;
  const startIcon = props.startIcon ? props.startIcon : false;
  const endIcon = props.endIcon ? props.endIcon : false;
  const fullWidth = props.fullWidth ? props.fullWidth : null;
  const multiline = props.multiline ? props.multiline : false;
  const row = props.row ? props.row : null;
  const value = props.value ? props.value : null;
  let style;

  if (error) {
    classes = "error-input";
  }

  if (disabled) {
    classes = "disabled-input";
  }

  if (startIcon) {
    classes = "startIcon";
  }

  if (endIcon) {
    classes = "endIcon";
  }

  if (fullWidth) {
    classes = "full-width-input";
  }

  if (multiline) {
    const rowSize = String(row * 4);
    style = { height: `${rowSize}rem` };
    classes = "multiline-input";
  }

  return (
    <div>
      <form className={classes}>
        {row ? (
          <textarea style={style} placeholder="Placeholder"></textarea>
        ) : (
          <input
            type="text"
            placeholder={placeholderText}
            disabled={disabled}
            value={value}
          ></input>
        )}
        <label>{labelText}</label>
      </form>
      {helperText ? <p>{helperText}</p> : null}
    </div>
  );
}

export default InputField;
