import React from "react";
import Greeting from "./Greet";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  haddleClick(e) {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoginButton onClick={e => this.haddleClick(e)} />;
    } else {
      button = <LogoutButton onClick={e => this.haddleClick(e)} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
