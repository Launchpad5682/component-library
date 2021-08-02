import React from "react";
import "../styles/SideBar.css";

const SideOptions = ["Colors", "Typography", "Spaces", "Buttons", "Grid"];
const SideOptionClass = "list-items";

function SideBar() {
  return (
    <aside>
      <h3>Components</h3>
      <div className="list">
        {SideOptions.map((option) => {
          return <li className={SideOptionClass}>{option}</li>;
        })}
      </div>
    </aside>
  );
}

export default SideBar;
