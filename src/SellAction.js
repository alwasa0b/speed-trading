import React, { Component } from "react";
import { userConstants, actions, messages } from "./constants";
import { connect } from "react-redux";

class SellAction extends Component {
  state = { price: 0, customPrice: false };
  render() {
    return (
      <div className={"st-sell-action"}>
        <label>Limit Price: </label>
        <input
          type={"checkbox"}
          value={this.state.customPrice}
          onMouseDown={() =>
            this.setState({ customPrice: !this.state.customPrice })
          }
        />
        <input
          type={"number"}
          value={this.state.price}
          disabled={!this.state.customPrice}
          onChange={({ target }) => this.setState({ price: target.value })}
        />
        <button
          disabled={this.state.customPrice && !this.state.price}
          onClick={() =>
            this.props.sellOrder({
              ...this.props.position,
              price: this.state.customPrice ? this.state.price : null
            })
          }
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellAction);
