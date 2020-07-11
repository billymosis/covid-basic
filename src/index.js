import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

ReactDOM.render(
  <BrowserRouter>
    <Home></Home>
    <Switch>
      <Route path="/:id" children={<App />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
