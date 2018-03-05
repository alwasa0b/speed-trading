import React from "react";

export default ({ ticker = "9.50", updateTicker = () => {} }) => {
  return (
    <div className={"st-ticker-wrapper"}>
    <div className={"st-ticker-price"}>
    <div className={"st-ticker-price-label"} id="display-ticker">Current Price:</div>
    <div className={"st-ticker-price-value"} id="display-ticker">{ticker}</div>
    </div>
    <div className={"st-ticker-live"} >
        <input
          id="ticker"
          onKeyDown={e => (e.key == "Enter" ? updateTicker(e.target.value) : null)}
          value={ticker}
        />
      </div>
    </div>
  );
};
