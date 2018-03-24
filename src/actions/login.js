import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/login";
import * as service from "../service";

const login_success = () => ({ type: LOGIN_SUCCESS });
const login_failed = () => ({ type: LOGIN_FAILURE });
export const login = ({ login }) => async dispatch => {
  const login_request = await service.login({ login });
  dispatch(login_success());
};
