import { delay } from "redux-saga";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { userConstants, actions } from "./constants";

let callCancel = ({ data }) =>
  fetch("http://localhost:3001/cancel_orders", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });

let callSell = ({ data }) =>
  fetch("http://localhost:3001/place_sell_order", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({
      instrument: data.instrument,
      quantity: data.quantity
    }),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });

let callBuy = ({ data }) => {
  console.log(data);
  return fetch("http://localhost:3001/place_buy_order", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({
      instrument: data.instrument,
      quantity: data.quantity,
      symbol: data.symbol,
      ...data
    }),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });
};

function* cancelOrderRequest(action) {
  yield call(callCancel, action);
}

function* buyOrder() {
  //yield takeEvery(userConstants.LOGIN_REQUEST, logging_in);
}

function* sellOrderRequest(action) {
  yield call(callSell, action);
}

function* buyOrderRequest(action) {
  yield call(callBuy, action);
}

function* cancelOrder() {
  yield takeEvery(actions.CANCEL_REQUEST, cancelOrderRequest);
}

function* sellOrder() {
  yield takeEvery(actions.SELL_REQUEST, sellOrderRequest);
}

function* buyOrder() {
  yield takeEvery(actions.BUY_REQUEST, buyOrderRequest);
}

export default function* main() {
  yield all([cancelOrder(), sellOrder(), buyOrder()]);
}
