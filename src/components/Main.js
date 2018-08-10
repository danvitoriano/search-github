import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Error from "./Error";

// main router render
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:login" component={User} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default Main;
