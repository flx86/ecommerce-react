import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./components/Home";
function App() {
  return (
    <div>
      <Route path={"/"} exact component={Home} />
    </div>
  );
}

export default App;
