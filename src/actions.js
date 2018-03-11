import { userConstants } from "./constants";
export const login = ({ username, password }) => ({
  type: userConstants.LOGIN_REQUEST,
  username,
  password
});
