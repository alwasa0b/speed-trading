import App from "../components/App";
import { connect } from "react-redux";

const mapStateToProps = ({ authentication }) => {
  return {
    loggedIn: authentication.loggedIn
  };
};

export default connect(mapStateToProps, null)(App);
