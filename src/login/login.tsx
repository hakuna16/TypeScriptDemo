import React, { Component } from "react";
import { LoginData } from "./interfaces/LoginData";
import { Button } from "./button";

interface LoginProps {
  loginData: LoginData;
}

class Login extends Component {
  render() {
    //const { loginData } = this.props;
    return (
      <>
        <div>
          <label>UserName:</label> <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
          <Button type="submit" value="submit" />
        </div>
      </>
    );
  }
}
export default Login;
