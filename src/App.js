import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import OrderAction from "./OrderAction";
import Ticker from "./Ticker";
import LevelTwo from "./LevelTwo";
import Orders from "./Orders";

class App extends Component {
  render() {
    return (
      <div>
        <OrderAction />
        <Ticker />
        <LevelTwo />
        <Orders />
      </div>
    );
  }
}

export default App;
