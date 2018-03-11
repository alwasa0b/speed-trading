import React from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

const Ticker = ({ price = {}, updatePrice }) => {
  return (
    <div className={"st-ticker-wrapper"}>
      <div className={"st-ticker-price"}>
        <div className={"st-ticker-price-label"} id="display-ticker">
          Current Price:
        </div>
        <div className={"st-ticker-price-value"} id="display-ticker">
          {price.price}
        </div>
      </div>
      <div className={"st-ticker-live"}>
        <input
          id="ticker"
          onKeyDown={e =>
            e.key == "Enter" ? updatePrice(e.target.value) : null
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ messagesReducer }) => {
  return {
    price: messagesReducer.price
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrice: value => {
      dispatch({ type: "SERVER/UPDATE_PRICE", data: value });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
