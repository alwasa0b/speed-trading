import React from "react";

export default ({ ticker = "", updateTicker = () => {} }) => {
  return (
    <div>
      <input
        id="ticker"
        onKeyDown={e => (e.key == "Enter" ? updateTicker(e.target.value) : null)}
        value={ticker}
      />
      <div id="display-ticker">{ticker}</div>
    </div>
  );
};
