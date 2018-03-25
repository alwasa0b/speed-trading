import Home from "../components/Home";
import { bindActionCreators } from "redux";
import * as messages from "../actions/messages.js";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messages, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
