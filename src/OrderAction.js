import React from "react";

export default ({
  qty= "",
  price = "",
  updateQuantity = () => {},
  updatePrice = () => {},
  placeBuyOrder = () => {}
}) => {
  return (
    <div>
      <label className={"qty-label"}>
        Qty:{" "}
      </label>
      <input
        type="text"
        id="qty"
        value={qty}
        className={"qty-value"}
        onKeyDown={e =>
          e.key == "Enter" ? updateQuantity(e.target.value) : null
        }
      />
      <label className={"price-label"}>
        Price:{" "}
      </label>
      <input
        type="text"
        id="price"
        value={price}
        className={"price-value"}
        onKeyDown={e => (e.key == "Enter" ? updatePrice(e.target.value) : null)}
      />
      <button onClick={() => placeBuyOrder()}>Buy</button>
    </div>
  );
};
