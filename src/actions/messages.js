import {
  UPDATE_POSITIONS,
  UPDATE_ORDERS,
  UPDATE_PRICE
} from "../constants/messages";

export const update_positions = () => ({
  type: UPDATE_POSITIONS
});

export const update_orders = () => ({
  type: UPDATE_ORDERS
});

export const update_price = ({ symbol }) => ({
  type: UPDATE_PRICE,
  symbol
});
