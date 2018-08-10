import React from "react";
import { css } from "glamor";
import Globals from "./Globals";

// styles
const styles = {
  UserName: css({
    fontFamily: "Raleway",
    fontSize: 35,
    fontWeight: "300",
    color: Globals.colors.black,
    verticalAlign: "middle"
  }),
  repos: css({
    fontFamily: "Raleway",
    lineHeight: 1,
    fontSize: 35,
    color: Globals.colors.lighterPurple,
    verticalAlign: "middle",
    textDecoration: "none"
  }),
  details: css({
    fontFamily: "Raleway",
    lineHeight: 1.25,
    fontSize: 20,
    fontWeight: "300",
    color: Globals.colors.brownishGrey,
    verticalAlign: "middle",
    "> img": {
      display: "inline-block",
      lineHeight: 0.5,
      width: 24,
      height: 24,
      verticalAlign: "middle"
    },
    "> span": {
      lineHeight: 0.5,
      display: "inline-block",
      marginLeft: 7,
      verticalAlign: "middle"
    }
  }),
  Github: css({
    fontFamily: Globals.fonts.Monaco,
    textDecoration: "none",
    color: Globals.colors.black
  }),
  NotFound: css({
    fontFamily: Globals.fonts.Raleway,
    fontSize: 40,
    color: Globals.colors.lighterPurple
  }),
  Search: css({
    fontFamily: Globals.fonts.Raleway,
    textDecoration: "none",
    color: Globals.colors.black,
    fontWeight: 200,
    fontStyle: "italic"
  })
};

// text component
export default class Text extends React.Component {
  render() {
    switch (this.props.type) {
      case "UserName":
        return (
          <div className="container">
            <span {...styles.UserName} id={this.props.id}>
              {this.props.label}
            </span>
          </div>
        );
      case "details":
        return (
          <div className="container">
            <span {...styles.details} id={this.props.id}>
              {this.props.label}
            </span>
          </div>
        );
      case "profile":
        return (
          <div className="container">
            <span {...styles.details} id={this.props.id}>
              <img src={this.props.icon} alt={this.props.label} />
              <span>{this.props.label}</span>
            </span>
          </div>
        );
      case "notfound":
        return (
          <div className="container">
            <span {...styles.NotFound} id={this.props.id}>
              {this.props.label}
            </span>
          </div>
        );
      case "repos":
        return (
          <div className="container">
            <a
              id={this.props.id}
              href={this.props.href}
              target="_blank"
              {...styles.repos}
            >
              {this.props.label}
            </a>
          </div>
        );
      case "title":
        return (
          <header className="container">
            <h1 id={this.props.id}>
              <span
                {...styles.Github}
                {...css({
                  fontSize: `${this.props.fontSize}`
                })}
              >
                Github
              </span>
              <span
                {...styles.Search}
                {...css({
                  fontSize: `${this.props.fontSize}`
                })}
              >
                {" "}
                Search
              </span>
            </h1>
          </header>
        );
      default:
        return (
          <div className="container">
            <h2>{this.props.label}</h2>
          </div>
        );
    }
  }
}
