import React, { Component } from "react";
import "./App.css";
import OrderAction from "./OrderAction";
import Ticker from "./Ticker";
import LevelTwo from "./LevelTwo";
import Orders from "./Orders";
import mainLogo from'./images/speed_trader_logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className={"st-app-header"}>
            <div className={"st-app-logo"}>
              <img  src={mainLogo} alt="ST"/>
            </div>
            <div className={"st-app-title"}>Speed Tracker</div>
        </div>
        <div className={"st-app-main"}>
        <div className={"st-level1-wrapper"}>
            <OrderAction />
            <Ticker />
        </div>
            <LevelTwo />
            <Orders />
        </div>
      </div>
    );
  }
}

export default App;
