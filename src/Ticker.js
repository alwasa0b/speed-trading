import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messages from "./actions/messages";

const Ticker = ({ price = {}, update_price }) => {
  return (
    <div className={"st-ticker-wrapper"}>
      <div className={"st-ticker-price"}>
        <div className={"st-ticker-live"}>
          <input
            id="ticker"
            onKeyDown={e =>
              e.key == "Enter" ? update_price({ symbol: e.target.value }) : null
            }
          />
        </div>
        <div className={"st-ticker-price-label"} id="display-ticker">
          Current Price:
        </div>
        <div className={"st-ticker-price-value"} id="display-ticker">
          {price.price}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ messages }) => ({
  price: messages.price
});

const mapDispatchToProps = dispatch => bindActionCreators(messages, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
