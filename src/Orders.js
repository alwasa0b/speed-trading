import React from "react";

export default ({
  orders = [{ qty: 80, price: 9.5, status: "placed", action: "cancel" }]
}) => {
  return (
    <div className={"orders-section"}>
      <div className={"orders-header-row"}>
        <div className={"qty-column-header"}>Qty</div>
        <div className={"price-column-header"}>Price</div>
        <div className={"status-column-header"}>Status</div>
        <div className={"action-column-header"}>Action</div>
      </div>
      <div className={"orders"}>
        {orders.map((order, i) => (
          <div className={"orders-row"} key={i}>
            <div className={"qty-column"}>{order.qty}</div>
            <div className={"price-column"}>{order.price}</div>
            <div className={"status-column"}>{order.status}</div>
            <div className={"action-column"}>{order.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
