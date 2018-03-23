import React from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

const Orders = ({ orders = [], cancelOrder }) => {
  return (
    <div className={"st-orders-section-wrapper"}>
      <div className={"st-section-title"}>Orders:</div>
      <div className={"st-orders-header-row"}>
        <div className={"symbol-column-header"}>Symbol</div>
        <div className={"qty-column-header"}>Qty</div>
        <div className={"price-column-header"}>Price</div>
        <div className={"stop-price-column-header"}>Stop Price</div>
        <div className={"status-column-header"}>Status</div>
        <div className={"action-column-header"}>Action</div>
      </div>
      <div className={"st-orders"}>
        {orders.map((order, i) => (
          <div className={"orders-row"} key={i}>
            <div className={"symbol-column"}>{order.symbol}</div>
            <div className={"qty-column"}>{order.quantity}</div>
            <div className={"price-column"}>{order.price}</div>
            <div className={"stop-price-column"}>{order.stop_price}</div>
            <div className={"status-column"}>{order.state}</div>
            <div className={"st-action-column"}>
              <button
                onClick={() => cancelOrder(order)}
                disabled={order.state === "cancelled"}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ messagesReducer }) => {
  return {
    orders: messagesReducer.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cancelOrder: order => {
      dispatch({ type: actions.CANCEL_REQUEST, data: order });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
