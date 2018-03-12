import React from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

const Orders = ({ positions = [], sellOrder }) => {
  return (
    <div className={"st-orders-section-wrapper"}>
      <div className={"st-section-title"}>Positions:</div>
      <div className={"st-orders-header-row"}>
        <div className={"qty-column-header"}>Symbol</div>
        <div className={"qty-column-header"}>Qty</div>
        <div className={"price-column-header"}>Average Price</div>
        <div className={"action-column-header"}>Action</div>
      </div>
      <div className={"st-orders"}>
        {positions.map((position, i) => (
          <div className={"orders-row"} key={i}>
            <div className={"qty-column"}>{position.symbol}</div>
            <div className={"qty-column"}>{position.quantity}</div>
            <div className={"price-column"}>{position.average_buy_price}</div>
            <div className={"st-action-column"}>
              <button onClick={() => sellOrder(position)}>Sell All</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ messagesReducer }) => {
  return {
    positions: messagesReducer.positions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sellOrder: position => {
      dispatch({ type: actions.SELL_REQUEST, data: position });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);