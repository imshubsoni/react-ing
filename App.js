import React from "react";
import ReactDOM from "react-dom/client";

var heading = React.createElement("h1", {}, "Hello World from ReactJS");

var parentChild = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World from ReactJS"),
    React.createElement("h2", {}, "H2 from ReactJS"),
  ])
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentChild);
