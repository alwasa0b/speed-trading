import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SellAction from "../components/SellAction";
import * as sell from "../actions/sell.js";
import * as stop from "../actions/stop.js";

const mapStateToProps = ({ sell_order }) => ({
  order_type: sell_order.order_type,
  price: sell_order.price
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...sell, ...stop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SellAction);
