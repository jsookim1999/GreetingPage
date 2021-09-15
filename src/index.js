//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
let message;
const customColor = {
  color: ""
};

if (date.getHours() < 12) {
  message = "Good morning";
  customColor.color = "red";
} else if (date.getHours() < 18) {
  message = "Good Afternoon";
  customColor.color = "green";
} else {
  message = "Good Night";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {message}
  </h1>,
  document.getElementById("root")
);
