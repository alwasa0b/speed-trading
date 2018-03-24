import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as login from "./actions/login";

class Login extends PureComponent {
  static defaultProps = { login: () => { } };
  render() {
    let { username, password } = this;
    return (
      <form onSubmit={e => e.preventDefault()}>
        <label>Username: </label>
        <input type={"text"} ref={node => (this.username = node)} />
        <label>Password: </label>
        <input type={"password"} ref={node => (this.password = node)} />
        <button
          onClick={() =>
            this.props.login({
              login: {
                username: this.username.value,
                password: this.password.value
              }
            })
          }
        >
          Login
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(login, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
