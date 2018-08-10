import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";

// main router render
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default Main;
