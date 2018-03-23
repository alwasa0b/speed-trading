import { delay } from "redux-saga";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { userConstants, actions } from "./constants";
import { authentication } from "./reducers";

let callLogin = ({ username, password }) =>
  fetch("http://localhost:3001/login", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({ username, password }),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });

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
      quantity: data.quantity,
      price: data.price
    }),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });

let callBuy = ({ data }) => {
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

let stopLoss = ({ data }) =>
  fetch("http://localhost:3001/place_stop_loss_order", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({
      instrument: data.instrument,
      quantity: data.quantity,
      symbol: data.symbol,
      stop_price: data.stop_price
    }),
    datatype: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Security-Policy": "default-src self"
    })
  });

function* cancelOrderRequest(action) {
  yield call(callCancel, action);
}

function* sellOrderRequest(action) {
  yield call(callSell, action);
}

function* stopLossOrderRequest(action) {
  yield call(stopLoss, action);
}

function* buyOrderRequest(action) {
  yield call(callBuy, action);
}

function* loginRequest(action) {
  yield call(callLogin, action);
  yield put({ type: userConstants.LOGIN_SUCCESS });
}
function* cancelOrder() {
  yield takeEvery(actions.CANCEL_REQUEST, cancelOrderRequest);
}

function* sellOrder() {
  yield takeEvery(actions.SELL_REQUEST, sellOrderRequest);
}

function* stopLossOrder() {
  yield takeEvery(actions.STOP_LOSS_REQUEST, stopLossOrderRequest);
}

function* buyOrder() {
  yield takeEvery(actions.BUY_REQUEST, buyOrderRequest);
}

function* login() {
  yield takeEvery(userConstants.LOGIN_REQUEST, loginRequest);
}

export default function* main() {
  yield all([cancelOrder(), sellOrder(), buyOrder(), login(), stopLossOrder()]);
}
