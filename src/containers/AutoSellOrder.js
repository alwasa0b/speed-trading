import AutoSellOrder from "../components/AutoSellOrder"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as buy from "../actions/buy.js";

const mapStateToProps = ({ buy_order }) => ({
  type: buy_order.sell_order_type,
  price: buy_order.sellPrice
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(buy, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoSellOrder)