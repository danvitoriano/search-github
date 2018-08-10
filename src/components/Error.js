import React, { Component } from "react";

// render if wrong route
class ErrorPage extends Component {
  render() {
    return <div>Ops! Você digitou um endereço inválido!</div>;
  }
}

export default ErrorPage;
