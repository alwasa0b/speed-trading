import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "./constants/login";

import {
  UPDATE_INSTRUMENT,
  UPDATE_QUANTITY,
  UPDATE_SYMBOL,
  UPDATE_SELL_ORDER_TYPE,
  UPDATE_BUY_ORDER_TYPE,
  UPDATE_BUY_PRICE,
  UPDATE_SELL_PRICE
} from "./constants/buy";

import {
  UPDATE_SELL_ORDER_TYPE_TYPE,
  UPDATE_SELL_ORDER_PRICE_PRICE
} from "./constants/sell";

import {
  POSITIONS_UPDATED,
  ORDERS_UPDATED,
  PRICE_UPDATED
} from "./constants/messages";

import { UPDATE_USERNAME, UPDATE_PASSWORD } from "./constants/login";

import { combineReducers } from "redux";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: false, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

function messages(state = {}, action) {
  switch (action.type) {
    case POSITIONS_UPDATED:
      return { ...state, positions: action.data };
    case ORDERS_UPDATED:
      return { ...state, orders: action.data };
    case PRICE_UPDATED:
      return { ...state, price: action.data };
    default:
      return state;
  }
}

function buy_order(
  state = {
    quantity: "",
    sell_order_type: "none",
    sell_price: "",
    buy_order_type: "bid",
    buy_price: ""
  },
  action
) {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.quantity };
    case UPDATE_SELL_ORDER_TYPE:
      return { ...state, sell_order_type: action.sell_order_type };
    case UPDATE_BUY_ORDER_TYPE:
      return { ...state, buy_order_type: action.buy_order_type };
    case UPDATE_BUY_PRICE:
      return { ...state, buy_price: action.buy_price };
    case UPDATE_SELL_PRICE:
      return { ...state, sell_price: action.sell_price };
    default:
      return state;
  }
}

function sell_order(
  state = {
    order_type: "bid",
    price: 0
  },
  action
) {
  switch (action.type) {
    case UPDATE_SELL_ORDER_TYPE_TYPE:
      return { ...state, order_type: action.order_type };
    case UPDATE_SELL_ORDER_PRICE_PRICE:
      return { ...state, price: action.price };
    default:
      return state;
  }
}

function login(
  state = {
    username: "",
    password: ""
  },
  action
) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.username };
    case UPDATE_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  authentication,
  messages,
  buy_order,
  sell_order,
  login
});

export default rootReducer;
