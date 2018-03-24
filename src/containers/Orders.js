import Orders from "../components/Orders";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cancel from "../actions/cancel.js";

const mapStateToProps = ({ messages }) => ({
  orders: messages.orders
});

const mapDispatchToProps = dispatch => bindActionCreators(cancel, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
