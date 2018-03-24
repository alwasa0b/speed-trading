import React from "react";
import OrderAction from "../containers/OrderAction";
import Positions from "../containers/Positions";
import Orders from "../containers/Orders";
import mainLogo from "../images/speed_trader_logo.png";

export default () => (
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
      <Positions />
      <Orders />
    </div>
  </div>
);
