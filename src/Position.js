import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SellAction from "./SellAction";
import NumberParser from "./NumberParser";
import * as orders from "./actions/sell.js";

const gain = position =>
  (position.cur_price - position.average_buy_price) /
  position.average_buy_price;

const Orders = ({ positions = [] }) => {
  return (
    <div className={"st-orders-section-wrapper"}>
      <div className={"st-section-title"}>Positions:</div>
      <div className={"st-orders-header-row"}>
        <div className={"symbol-column-header"}>Symbol</div>
        <div className={"qty-column-header"}>Qty</div>
        <div className={"price-column-header"}>Average Price</div>
        <div className={"gain-column-header"}>Gain %</div>
        <div className={"gain-dollar-column-header"}>Gain $</div>
        <div className={"action-column-header"}>Action</div>
      </div>
      <div className={"st-orders"}>
        {positions.map((position, i) => (
          <div className={"orders-row"} key={i}>
            <div className={"symbol-column"}>{position.symbol}</div>
            <div className={"qty-column"}>
              <NumberParser value={position.quantity} fix={0} />
            </div>
            <div className={"price-column"}>
              <NumberParser value={position.average_buy_price} />
            </div>
            <div className={"gain-column"}>
              <NumberParser value={gain(position) * 100} />
            </div>
            <div className={"gain-dollar-column"}>
              <NumberParser
                value={
                  gain(position) *
                  position.average_buy_price *
                  position.quantity
                }
              />
            </div>
            <div className={"st-action-column"}>
              <SellAction position={position} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ messages }) => {
  return {
    positions: messages.positions
  };
};

export default connect(mapStateToProps, null)(Orders);
