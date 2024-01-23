import React from "react";
import ReactDOM from "react-dom";
import Counter from 'reactpro/Counter'
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: nextpro</div>
    <Counter />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
