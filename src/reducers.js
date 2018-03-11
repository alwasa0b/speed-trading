import { userConstants, actions, messages } from "./constants";
import { combineReducers } from "redux";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

function messagesReducer(state = {}, action) {
  switch (action.type) {
    case messages.POSITIONS:
      return { ...state, positions: action.data };
    case messages.ORDERS:
      return { ...state, orders: action.data };
    case messages.PRICE:
      return { ...state, price: action.data };
    default:
      return state;
  }
}

function actionsReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  authentication,
  messagesReducer,
  actionsReducer
});

export default rootReducer;
