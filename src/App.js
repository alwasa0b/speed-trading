import React from "react";
import "./styles/App.css";
import OrderAction from "./OrderAction";

import Position from "./Position";
import Orders from "./Orders";
import Login from "./Login";
import mainLogo from "./images/speed_trader_logo.png";
import { connect } from "react-redux";

const App = ({ loggedIn }) => {
  return (
    <div>
      {loggedIn ? (
        <div>
          <div className={"st-app-header"}>
            <div className={"st-app-logo"}>
              <img src={mainLogo} alt="ST" />
            </div>
            <div className={"st-app-title"}>Speed Tracker</div>
          </div>
          <div className={"st-app-main"}>
            <div className={"st-level1-wrapper"}>
              <OrderAction />
            </div>
            <Position />
            <Orders />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return {
    loggedIn: authentication.loggedIn
  };
};

export default connect(mapStateToProps, null)(App);
