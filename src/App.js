import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faCartPlus,
  faChevronUp,
  faChevronDown,
  faEye,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHeart,
  faCartPlus,
  faChevronUp,
  faChevronDown,
  faEye,
  faShoppingCart
);

function App() {
  return (
    <div>
      <Navbar />
      <Route path={"/"} exact component={Home} />
    </div>
  );
}

export default App;
