import React, { Component } from "react";
import styles from "./login.css";

import { Login } from "ant-design-pro";
import { connect } from "dva";

const { UserName, Password, Submit } = Login;

@connect()
export default class extends Component {
  onSubmit = (err, values) => {
    console.log(values);
    if (!err) {
      this.props.dispatch({ type: "user/login", payload: values });
    }
  };
  render() {
    return (
      <div className={styles.loginForm}>
          <h1>Login</h1><br/>

        {/* login form */}
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="username"
            rules={[{ required: true, message: "Please input your username" }]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[{ required: true, message: "Please input your password" }]}
          />
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}
