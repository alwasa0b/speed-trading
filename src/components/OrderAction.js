import React, { PureComponent } from "react";
import Ticker from "../containers/Ticker";
import AutoSellOrder from "../containers/AutoSellOrder.js";

export default class OrderActions extends PureComponent {
  componentDidMount() {
    this.props.update_positions();
    this.props.update_orders();
  }

  render() {
    let { price = {}, buy_order } = this.props;

    return (
      <div className={"order-action-wrapper"}>
        <div className={"row"}>
          <Ticker />
        </div>
        <div className={"row"}>
          <div className={"st-label-div"}>Quantity:</div>
          <div className={"st-input-div"}>
            <input
              type="text"
              id="qty"
              className={"input-qty"}
              onChange={({ target }) =>
                this.props.update_quantity({ quantity: target.value })
              }
            />
          </div>
          <div className={"st-text-div"}>@</div>
          <div className={"st-label-div"}>Price:</div>
          <div className={"st-input-div"}>
            <select
              value={this.props.buy_order_type}
              onChange={({ target }) =>
                this.props.update_buy_order_type({
                  buy_order_type: target.value
                })
              }
            >
              <option value="bid">Bid</option>
              <option value="limit">Limit</option>
            </select>
          </div>
          <div className={"st-input-div"}>
            <input
              type="text"
              id="price"
              disabled={this.props.buy_order_type != "limit"}
              className={"input-price"}
              onChange={({ target }) =>
                this.props.update_buy_price({
                  buy_price: target.value
                })
              }
            />
          </div>
          <div className={"st-btn-div"}>
            <button
              className={"btn-buy"}
              disabled={
                this.props.quantity < 1 ||
                (this.props.buy_order_type === "limit" &&
                  !this.props.buy_price) ||
                !price.price
              }
              onClick={this.props.place_buy_order}
            >
              Buy
            </button>
          </div>
        </div>
        <div className={"row"}>
          <AutoSellOrder />
        </div>
      </div>
    );
  }
}
