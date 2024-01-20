import React from "react";
import ReactDOM from "react-dom/client";

// React Element ->
const heading = (
  <h1 id="heading" className="heading">
    This is React from JSX
  </h1>
);

// React Functional Component -> (Name starts with Capital Letter)
const Heading = () => {
  return (
    <h1 id="heading2" className="heading2">
      This is functional Component
    </h1>
  );
};

// Component Composition -> Nesting one Component into Another
const Page = () => {
  return (
    <div id="page">
      <Heading />
      <p className="desc">This is page description</p>
    </div>
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));

// Render Element
// root.render(heading);

// Render Component
root.render(<Page />);
