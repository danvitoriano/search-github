import React from "react";
import Search from "./Search";
import Text from "./Text";

// home render
const Home = () => (
  <div className="App">
    <Text type="title" fontSize="80" />
    <Search />
  </div>
);

export default Home;
