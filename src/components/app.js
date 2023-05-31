// src/components/App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Login from "./login";
import NavBar from "./navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;