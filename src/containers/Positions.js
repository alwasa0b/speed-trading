import { connect } from "react-redux";
import Positions from "../components/Positions";

const mapStateToProps = ({ messages }) => {
  return {
    positions: messages.positions
  };
};

export default connect(mapStateToProps, null)(Positions);
