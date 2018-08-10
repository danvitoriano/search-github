import React from "react";
import Main from "./Main";
import { css } from "glamor";

// global styles
css.global("html, body", {
  padding: 0,
  margin: "0 auto",
  background: "transparent",
  overflowX: "hidden",
  fontFamily: "Raleway"
});
css.global("h1, h2", {
  padding: 0,
  margin: 0
});

// app render
const App = () => (
  <div>
    <Main />
  </div>
);

export default App;
