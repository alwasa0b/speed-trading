import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as buy from "./actions/buy.js";

const mapStateToProps = ({ buy_order }) => ({
  type: buy_order.sell_order_type,
  price: buy_order.sellPrice
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(buy, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ type, price, update_sell_order_type, update_sell_price }) => {
    return (
      <div>
        <label>Place Sell Order</label>
        <div className={"st-input-div"}>
          <select
            value={type}
            onChange={({ target }) =>
              update_sell_order_type({ sell_order_type: target.value })
            }
          >
            <option value="none">None</option>
            <option value="limit">Limit</option>
            <option value="stop">Stop</option>
          </select>
        </div>
        <div className={"st-input-div"}>
          <input
            type="text"
            disabled={type === "none"}
            onChange={({ target }) =>
              update_sell_price({ sell_price: target.value })
            }
          />
        </div>
      </div>
    );
  }
);
