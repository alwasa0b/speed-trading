import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sell from "./actions/sell.js";
import * as stop from "./actions/stop.js";

const mapStateToProps = ({ sell_order }) => ({
  order_type: sell_order.order_type,
  price: sell_order.price
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...sell, ...stop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    price,
    position,
    order_type,
    place_stop_loss_order,
    place_sell_order,
    update_sell_order_type,
    update_sell_order_price
  }) => (
    <div className={"st-sell-action"}>
      <select
        value={order_type}
        onChange={({ target }) =>
          update_sell_order_type({ order_type: target.value })
        }
      >
        <option value="bid">Bid</option>
        <option value="limit">Limit</option>
        <option value="stop">Stop</option>
      </select>
      <input
        type={"number"}
        value={price}
        disabled={order_type === "bid"}
        onChange={({ target }) =>
          update_sell_order_price({ price: target.value })
        }
      />

      <button
        disabled={order_type !== "bid" && price === 0}
        onClick={() =>
          order_type === "stop"
            ? place_stop_loss_order({ stop_order: position })
            : place_sell_order({ sell_order: position })
        }
      >
        Sell All
      </button>
    </div>
  )
);
