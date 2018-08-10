import React from "react";
import { css } from "glamor";
import Text from "./Text";
import organization from "./media/organization.png";
import location from "./media/location.png";
import star from "./media/star.png";
import repositories from "./media/repositories.png";
import followers from "./media/followers.png";
import Globals from "./Globals";

// vars
var myStars = [];
var apiUser,
  login,
  starredCount,
  pages,
  lastPage,
  onlyNumber,
  addNumber,
  lastPages,
  lastPageClose,
  numberLastPage,
  link,
  countPages = "";

// if env is production fetch from github api, otherwise, mock api
Globals.api.env === "production"
  ? (apiUser = Globals.api.apiGithubUser)
  : (apiUser = Globals.api.apiMockUser);

// styles
const styles = {
  avatar: css({
    display: "block",
    width: 280,
    height: 280,
    MozBoxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
    WebkitBoxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
    border: 2
  })
};

// repositories list component
export default class Results extends React.Component {
  // initial bootstrap props and state
  constructor(props) {
    super(props);
    this.state = { user: "", stars: "" };
    this.setState = this.setState.bind(this);
    this.fetchStarred = this.fetchStarred.bind(this);
    this.traversingPagination = this.traversingPagination.bind(this);
  }

  // process to check if user has more than one page of items
  // Github API limits items from each request
  traversingPagination(response) {
    var myUrl = response;
    link = myUrl.headers.get("Link"); // intercept request's header Link
    if (link) {
      // if there is a Link at header, there is more than one page to grab
      lastPage = link.lastIndexOf("&page="); // position of last page string
      onlyNumber = parseInt(lastPage, 10); // parse int page number
      addNumber = onlyNumber + 6; // add enought position
      lastPageClose = link.lastIndexOf(">"); // get end of string
      numberLastPage = link.substring(addNumber, lastPageClose); // get substring with NUMBER_OF_PAGES
      pages = numberLastPage; // store number of pages
      fetch(apiUser + login + "/starred?per_page=100&page=" + numberLastPage) // fetch last page
        .then(response => {
          lastPages = response.json();
          return lastPages;
        })
        .then(lastPages => {
          countPages = lastPages.length; // ITEMS_LAST_PAGE
          if (countPages >= 0 && countPages <= 100) {
            starredCount = (pages - 1) * 100 + countPages; // (NUMBER_OF_PAGES - 1) * 100 items per page + ITEMS_LAST_PAGE
            myStars = starredCount;
            this.setState({
              starred: starredCount // set state
            });
          }
        });
    } else {
      // if there is no header's Link, there is less than 100 items starred and no pagination
      fetch(apiUser + login + "/starred?per_page=100")
        .then(response => {
          lastPages = response.json();
          return lastPages;
        })
        .then(lastPages1 => {
          countPages = lastPages1.length;
          if (countPages >= 0 && countPages <= 100) {
            starredCount = countPages;
            myStars = starredCount;
            this.setState({
              starred: starredCount
            });
          }
        });
      return response.json();
    }
  }

  // fetch number of items starred by user
  fetchStarred() {
    login = this.props.user.login;
    console.log(login);
    if (login) {
      fetch(apiUser + login + "/starred?per_page=100").then(response => {
        this.traversingPagination(response); // function to get number of pages and number of starred
      });
    }
  }

  // if there is an user, fetch starred
  componentDidMount() {
    if (this.props.user) {
      this.setState({ user: this.props.user });
      this.fetchStarred();
    }
  }

  // if user changed, fetch starred
  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) {
      this.setState({ user: this.props.user });
      this.fetchStarred();
      return;
    }
  }
  // render DOM
  render() {
    if (this.props.error === true) {
      // IF error render USER NOT FOUND
      return (
        <div className="container templateColumns2 user-results">
          <div className="grow1" />
          <div className="grow1">
            <Text id="not-found" type="notfound" label="User not found :(" />
          </div>
        </div>
      );
    } else {
      // IF success, render user infos
      return (
        <div className="container templateColumns2 user-results">
          <div className="grow1">
            <img
              id="user-avatar"
              src={this.state.user.avatar_url}
              alt={this.state.user.login}
              {...styles.avatar}
            />
            <Text id="user-name" type="UserName" label={this.state.user.name} />
            <Text
              id="user-login"
              type="details"
              label={"@" + this.state.user.login}
            />
            <Text
              id="user-email"
              type="details"
              label={this.state.user.email}
            />
            <Text id="user-bio" type="details" label={this.state.user.bio} />
            <Text
              id="user-company"
              type="profile"
              label={this.state.user.company}
              icon={organization}
            />
            <Text
              id="user-location"
              type="profile"
              label={this.state.user.location}
              icon={location}
            />
            <Text id="user-stars" type="profile" label={myStars} icon={star} />
            <Text
              id="user-repo-numbers"
              type="profile"
              label={this.state.user.public_repos}
              icon={repositories}
            />
            <Text
              id="user-followers"
              type="profile"
              label={this.state.user.followers}
              icon={followers}
            />
            <Text
              id="user-following"
              type="profile"
              label={this.state.user.following}
              icon={followers}
            />
          </div>
          <div className="grow2">{/* render repositories */}</div>
        </div>
      );
    }
  }
}
