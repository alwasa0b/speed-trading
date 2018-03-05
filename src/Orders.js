import React from "react";

export default ({
  orders = [{ qty: 80, price: 9.5, status: "placed", action: "cancel" }]
}) => {
  return (
    <div className={"st-orders-section-wrapper"}>
    <div className={"st-section-title"}>Orders:</div>
      <div className={"st-orders-header-row"}>
        <div className={"qty-column-header"}>Qty</div>
        <div className={"price-column-header"}>Price</div>
        <div className={"status-column-header"}>Status</div>
        <div className={"action-column-header"}>Action</div>
      </div>
      <div className={"st-orders"}>
        {orders.map((order, i) => (
          <div className={"orders-row"} key={i}>
            <div className={"qty-column"}>{order.qty}</div>
            <div className={"price-column"}>{order.price}</div>
            <div className={"status-column"}>{order.status}</div>
            <div className={"st-action-column"}>
              <button >{order.action}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
