import React from "react";
import InputField from "./InputField";
import "../../styles/InputFields/Inputs.css";

function Inputs() {
  return (
    <article>
      <h2>Inputs</h2>
      <div className="inputs-class">
        <div className="row-1">
          <span>
            <InputField />
          </span>
        </div>
        <div className="row-2">
          <span>
            <InputField error />
          </span>
        </div>
        <div className="row-3">
          <span>
            <InputField disabled />
          </span>
        </div>
        <div className="row-4">
          <span>
            <InputField helperText="Some Interesting Text" />
          </span>
          <span>
            <InputField helperText="Some Interesting Text" error />
          </span>
        </div>
        <div className="row-5">
          <span>
            <InputField startIcon />
          </span>
          <span>
            <InputField endIcon />
          </span>
        </div>
        <div>
          <span>
            <InputField value="text" />
          </span>
        </div>
        <div className="row-7">
          <InputField fullWidth />
          <InputField multiline row="4" />
        </div>
      </div>
    </article>
  );
}

export default Inputs;
