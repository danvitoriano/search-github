import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Text from "./Text";
import Results from "./Results";
import Globals from "./Globals";
import { css } from "glamor";

// vars
var apiUser,
  login = "";

var myUser = [];

// if env is production fetch from github api, otherwise, mock api
Globals.api.env === "production"
  ? (apiUser = Globals.api.apiGithubUser)
  : (apiUser = Globals.api.apiMockUser);

// user component
export default class User extends React.Component {
  // initial bootstrap props and state
  constructor(props) {
    super(props);
    this.state = { user: null, hasError: false };
    this.setState = this.setState.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
  }

  // fetch user data
  fetchUser() {
    login = `${this.props.match.params.login}`;
    fetch(`${apiUser + this.props.match.params.login}`)
      .then(response => {
        if (!response.ok) {
          // if request is not ok, set error to state
          this.setState({ hasError: true });
          return response;
        }
        return response.json();
      })
      .then(response => {
        this.setState({ user: response }); // set user state
      });
  }

  // if component updates compare states and force render
  componentDidUpdate(prevProps) {
    if (this.props.match.params.login !== prevProps.match.params.login) {
      this.setState({ hasError: false });
      this.fetchUser();
    }
  }

  // fetch when component first mount
  componentDidMount() {
    this.setState({ hasError: false });
    this.fetchUser();
  }

  // render DOM
  render() {
    if (this.state.user === null) {
      return (
        <div className="container">
          <p>Carregando...</p>
        </div>
      );
    }
    myUser = this.state.user; // fill user with full object

    return (
      <div className="user-container">
        <div className="container templateColumns2 user-header">
          <div className="grow1">
            <Text type="title" fontSize="40" dataCy="backhome" href="/" />
          </div>
          <div className="grow2">
            <Search user={login} />
          </div>
        </div>
        <Results error={this.state.hasError} user={myUser} />
      </div>
    );
  }
}
