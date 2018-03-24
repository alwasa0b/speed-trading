import Login from "../components/Login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as login from "../actions/login";

const mapStateToProps = ({ login }) => {
  return {
    ...login
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(login, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
