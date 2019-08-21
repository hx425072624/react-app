import React, { Component } from "react";
function UserGreeting(props) {
  return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedin = props.isLoggedIn;
  if (isLoggedin) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

export default Greeting;
