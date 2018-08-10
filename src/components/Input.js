import React from "react";
import { css } from "glamor";
import Globals from "./Globals";

// styles
const styles = {
  input: css({
    display: "inline-block",
    width: 500,
    height: 50,
    MozBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    WebkitBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    border: "none",
    outline: "none",
    padding: 0,
    textIndent: 10,
    backgroundColor: Globals.colors.white,
    fontFamily: "Raleway",
    lineHeight: 1.25,
    fontSize: 20,
    fontWeight: "300",
    color: Globals.colors.brownishGrey,
    verticalAlign: "middle"
  })
};

// input component
export default class Input extends React.Component {
  render() {
    return (
      <input
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        className={this.props.className}
        {...styles.input}
      />
    );
  }
}
