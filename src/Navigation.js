import React from "react";

const Navigation = (props) => {
  return (
    <nav>
      <h1>{props.name}</h1>
      <ul>
        {props.menu.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
