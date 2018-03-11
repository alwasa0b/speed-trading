import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions";

class Login extends Component {
  static defaultProps = { login: () => {} };
  render() {
    let { username, password } = this;
    return (
      <div>
        <input type={"text"} ref={node => (this.username = node)}/>
        <input type={"text"} ref={node => (this.password = node)}/>
        <button onClick={() => this.props.login({ username: this.username.value, password: this.password.value })}>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    login: ({ username, password }) => {
      dispatch(login({ username, password }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
