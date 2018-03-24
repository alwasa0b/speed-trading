import OrderAction from "../components/OrderAction";
import { bindActionCreators } from "redux";
import * as messages from "../actions/messages.js";
import * as orders from "../actions/buy.js";
import { connect } from "react-redux";

const mapStateToProps = ({ messages, buy_order }) => {
  return {
    price: messages.price,
    ...buy_order
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...messages, ...orders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderAction);