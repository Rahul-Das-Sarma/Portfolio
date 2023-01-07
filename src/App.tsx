import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
    </React.Fragment>
  );
};

export default App;
