import React, { Component } from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

class OrderActions extends Component {
  state = { placeStopLoss: false, placeSellOrder: false };
  render() {
    let { price = {}, buyOrder } = this.props;

    return (
      <div className={"order-action-wrapper"}>
        <div className={"row"}>
          <div className={"st-label-div"}>Quantity:</div>
          <div className={"st-input-div"}>
            <input
              type="text"
              id="qty"
              ref={node => (this.quantity = node)}
              className={"input-qty"}
              // onKeyDown={e =>
              //   e.key == "Enter" ? updateQuantity(e.target.value) : null
              // }
            />
          </div>
          <div className={"st-text-div"}>@</div>
          <div className={"st-label-div"}>Price:</div>
          <div className={"st-input-div"}>
            <input
              type="text"
              id="price"
              value={price.price}
              className={"input-price"}
              //onKeyDown={e => (e.key == "Enter" ? updatePrice(e.target.value) : null)}
            />
          </div>
          <div className={"st-btn-div"}>
            <button
              className={"btn-buy"}
              onClick={() =>
                buyOrder({
                  instrument: price.instrument,
                  quantity: this.quantity.value,
                  symbol: price.symbol,
                  placeSellOrder: this.state.placeSellOrder,
                  placestopLoss: this.state.placeStopLoss,
                  sellPrice: this.sellOrderPrice.value,
                  stopLossPrice: this.stopLossPrice.value
                })
              }
            >
              Buy
            </button>
          </div>
        </div>
        <div className={"row"}>
          <div className={"st-label-div"}>Place StopLoss: </div>
          <div className={"st-input-div"}>
            <input
              type="checkbox"
              onChange={({ target }) =>
                this.setState({ placeStopLoss: !this.state.placeStopLoss })
              }
            />
          </div>
          <div className={"st-input-div"}>
            <input
              type="text"
              ref={node => (this.stopLossPrice = node)}
              disabled={!this.state.placeStopLoss}
            />
          </div>

          <div className={"st-label-div"}>Place Sell Order: </div>
          <div className={"st-input-div"}>
            <input
              type="checkbox"
              onChange={({ target }) =>
                this.setState({ placeSellOrder: !this.state.placeSellOrder })
              }
            />
          </div>
          <div className={"st-input-div"}>
            <input
              type="text"
              ref={node => (this.sellOrderPrice = node)}
              disabled={!this.state.placeSellOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messagesReducer }) => {
  return {
    price: messagesReducer.price
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyOrder: instrument => {
      dispatch({ type: actions.BUY_REQUEST, data: instrument });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderActions);
