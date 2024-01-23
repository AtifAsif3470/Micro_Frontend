import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: reactpro</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
