import React from "react";
import { connect } from "react-redux";
import App from "./App";
import Login from "./Login";

let InitState = ({ authentication }) => {
  let { loggedIn } = authentication;
  return <div>{loggedIn ? <App /> : <Login />}</div>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InitState);
