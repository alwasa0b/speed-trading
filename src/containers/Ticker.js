import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Ticker from "../components/Ticker";
import * as messages from "../actions/messages.js";

const mapStateToProps = ({ messages }) => ({
  price: messages.price
});

const mapDispatchToProps = dispatch => bindActionCreators(messages, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
