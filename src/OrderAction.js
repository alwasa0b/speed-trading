import React, { Component } from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

class OrderActions extends Component {
  componentDidMount() {
    this.props.dispatch({ type: messages.UPDATE_POSITIONS });
    this.props.dispatch({ type: messages.UPDATE_ORDERS });
  }

  state = { placeStopLoss: false, placeSellOrder: false, quantity: 0 };
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
              onChange={({ target }) =>
                this.setState({ quantity: target.value })
              }
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
            />
          </div>
          <div className={"st-btn-div"}>
            <button
              className={"btn-buy"}
              disabled={this.state.quantity < 1 || !price.price}
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
    },
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderActions);
