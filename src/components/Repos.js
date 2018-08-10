import React from "react";
import { css } from "glamor";
import Globals from "./Globals";
import Text from "./Text";
import star from "./media/star.png";

// vars
var apiUser; // which API to fetch depending on env
var repoList = []; // store repositories list

// if env is production fetch from github api, otherwise, mock api
Globals.api.env === "production"
  ? (apiUser = Globals.api.apiGithubUser)
  : (apiUser = Globals.api.apiMockUser);

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
  }),
  list: css({
    listStyleType: "none",
    padding: 0,
    margin: 0,
    "> li ": {
      flex: 1,
      padding: 0,
      margin: "10px 0 25px"
    }
  })
};

// repositories list component
export default class Repos extends React.Component {
  // initial bootstrap props and state
  constructor(props) {
    super(props);
    this.state = { user: this.props.list, repos: repoList, noRepos: false };
    this.setState = this.setState.bind(this);
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  // fetch user repositories
  fetchRepos() {
    fetch(apiUser + this.props.list + "/repos?per_page=100")
      .then(response => {
        if (!response.ok) {
          this.setState({ noRepos: true }); // if user has no repos
        } else {
          return response.json();
        }
      })
      .then(repositories => {
        this.setState({ repos: repositories }); // set repos state
        return repositories;
      });
  }

  // fetch repos at mount
  componentDidMount() {
    this.setState({ user: this.props.list });
    this.fetchRepos();
  }

  // if props or state change, fetch again
  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      this.fetchRepos();
    }
    if (this.props.list !== prevProps.list) {
      this.fetchRepos();
    }
  }

  // render DOM
  render() {
    if (!this.props.list) {
      return null;
    }
    return (
      <ul {...styles.list} id="user-repos">
        {this.state.repos
          .sort(function(a, b) {
            // sort repositories by stars desc
            return b.stargazers_count - a.stargazers_count; // calc stars desc
          })
          .map(repo => (
            <li
              key={
                repo.id // map repositories
              }
            >
              <Text href={repo.html_url} type="repos" label={repo.name} />
              <Text type="details" label={repo.description} />
              <Text type="profile" label={repo.stargazers_count} icon={star} />
            </li>
          ))}
      </ul>
    );
  }
}
