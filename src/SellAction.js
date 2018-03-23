import React, { PureComponent } from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

class SellAction extends PureComponent {
  state = { price: 0, type: "bid" };
  handleOrderPlaced = () => {
    if (this.state.type === "stop") {
      this.props.stopLossOrder({
        ...this.props.position,
        stop_price: this.state.price
      });
      return;
    }
    this.props.sellOrder({
      ...this.props.position,
      price: this.state.type === "limit" ? this.state.price : null
    });
  };
  render() {
    return (
      <div className={"st-sell-action"}>
        <input
          type="radio"
          name="stop"
          value={"stop"}
          checked={this.state.type === "stop"}
          onClick={() => this.setState({ type: "stop" })}
        />
        <label>stop</label>
        <input
          type="radio"
          name="limit"
          value={"limit"}
          checked={this.state.type === "limit"}
          onClick={() => this.setState({ type: "limit" })}
        />
        <label>limit</label>
        <input
          type="radio"
          name="bid"
          value={"bid"}
          checked={this.state.type === "bid"}
          onClick={() => this.setState({ type: "bid" })}
        />
        <label>bid</label>
        <input
          type={"number"}
          value={this.state.price}
          disabled={this.state.type === "bid"}
          onChange={({ target }) => this.setState({ price: target.value })}
        />
        <button
          disabled={this.state.customPrice && !this.state.price}
          onClick={this.handleOrderPlaced}
        >
          Sell All
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    sellOrder: position => {
      dispatch({ type: actions.SELL_REQUEST, data: position });
    },
    stopLossOrder: position => {
      dispatch({ type: actions.STOP_LOSS_REQUEST, data: position });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellAction);
