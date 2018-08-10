import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

// Search class to find user
class Search extends PureComponent {
  // initial bootstrap props and state
  constructor(props) {
    super(props);
    this.sendUser = this.sendUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.state = { user: this.props.user };
  }

  // if component updates compare states and force render
  componentDidUpdate(prevState) {
    if (this.state.user !== prevState.user) {
      this.setState({ user: `${this.state.user}` });
    }
  }

  // when components loads for the first time
  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  // set user value
  setUser(e) {
    this.setState({ user: e.target.value });
  }

  // send user pushing it on history API
  sendUser(e) {
    e.preventDefault();
    this.props.history.push(`/user/${this.state.user}`);
    this.setState({ user: `${this.state.user}` });
  }

  // render DOM
  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendUser}>
          <Input
            id="q"
            type="text"
            name="q"
            value={this.state.user}
            onChange={this.setUser}
            className="search-page__input"
          />
          <Button className="search-page__button" title="Buscar" />
        </form>
      </div>
    );
  }
}

export default withRouter(Search); // router props match params login
