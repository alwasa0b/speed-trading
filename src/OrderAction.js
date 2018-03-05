import React from "react";

export default ({
  qty= "",
  price = "",
  updateQuantity = () => {},
  updatePrice = () => {},
  placeBuyOrder = () => {}
}) => {
  return (
    <div className={"order-action-wrapper"}>

      <div className={"st-label-div"}>
        Quantity:
      </div>
      <div className={"st-input-div"}>
        <input
          type="text"
          id="qty"
          value={qty}
          className={"input-qty"}
          onKeyDown={e =>
            e.key == "Enter" ? updateQuantity(e.target.value) : null
          }
        />
      </div>
      <div className={"st-text-div"}>
      @
    </div>
      <div className={"st-label-div"}>
        Price:
      </div>
      <div className={"st-input-div"}>
        <input
          type="text"
          id="price"
          value={price}
          className={"input-price"}
          onKeyDown={e => (e.key == "Enter" ? updatePrice(e.target.value) : null)}
        />
      </div>
      <div className={"st-btn-div"}>
      <button className={"btn-buy"} onClick={() => placeBuyOrder()}>Buy</button>
    </div>
    </div>
  );
};
