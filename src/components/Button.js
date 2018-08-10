import React from "react";
import { css } from "glamor";
import Globals from "./Globals";
import iconSearch from "./media/search.svg";

// styles
const styles = {
  button: css({
    display: "inline-block",
    width: 100,
    height: 50,
    MozBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    WebkitBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    border: "none",
    borderRadius: 2,
    outline: "none",
    backgroundColor: Globals.colors.lighterPurple,
    verticalAlign: "middle",
    "> img": {
      width: 32,
      height: 32
    }
  })
};

// button component
export default class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        title={this.props.title}
        {...styles.button}
      >
        <img src={iconSearch} alt={this.props.title} />
      </button>
    );
  }
}
