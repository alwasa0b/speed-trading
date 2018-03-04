import React from "react";

export default ({
  bids = [{ bid: 3.98, bs: 400 }],
  asks = [{ ask: 3.9, as: 200 }]
}) => {
  return (
    <div>
      <div className={"bid-header-row"}>
        <div className={"bid-column"}>Bid</div>
        <div className={"bs-column"}>BS</div>
      </div>
      <div className={"bids"}>
        {bids.map((bid, i) => (
          <div className={"bid-row"} key={i}>
            <div className={"bid-column"}>{bid.bid}</div>
            <div className={"bs-column"}>{bid.bs}</div>
          </div>
        ))}
      </div>
      <div />
      <div className={"ask-header-row"}>
        <div className={"ask-column-header"}>Ask</div>
        <div className={"as-column-header"}>AS</div>
      </div>
      <div className={"asks"}>
        {asks.map((ask, i) => (
          <div className={"ask-row"} key={i}>
            <div className={"ask-column"}>{ask.ask}</div>
            <div className={"as-column"}>{ask.as}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
