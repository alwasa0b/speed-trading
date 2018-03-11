import React from "react";
import "./App.css";
import OrderAction from "./OrderAction";
import Ticker from "./Ticker";
import Postion from "./Postion";
import Orders from "./Orders";
import Login from "./Login";
import mainLogo from "./images/speed_trader_logo.png";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

const App = ({ loggingIn }) => {
  return (
    <div>
      {loggingIn ? (
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
              <Ticker />
            </div>
            <Postion />
            <Orders />
          </div>{" "}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return {
    loggingIn: authentication.loggingIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrice: value => {
      dispatch({ type: "SERVER/UPDATE_PRICE", data: value });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
