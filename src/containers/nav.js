import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Jobs } from "./jobs";
import { NewStories } from "./newStories";
import { Comments } from "./comments";
import { Signin } from "./signin";

import HeaderStyles from "../styles/header.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "API" };
  }

  changeApiTetx = () => {
    this.setState({ title: "Stories" });
  };
  changeApiTetxJobs = () => {
    this.setState({ title: "Jobs" });
  };
  changeApiTetxComents = () => {
    this.setState({ title: "Comments" });
  };

  changeApiTetxSignin = () => {
    this.setState({ title: "Signin" });
  };

  render() {
    return (
      <div>
        <nav className={HeaderStyles.header}>
          <h3 className={HeaderStyles.title}>
            Hacker News <span>{this.state.title}</span>
          </h3>

          <ul className={HeaderStyles.navList}>
            <li>
              {" "}
              <Link
                className={HeaderStyles.navItem}
                activeClassName={HeaderStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetx}
                className={HeaderStyles.navItem}
                activeClassName={HeaderStyles.activeNavItem}
                to="/newStories"
              >
                New Stories
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetxJobs}
                className={HeaderStyles.navItem}
                activeClassName={HeaderStyles.activeNavItem}
                to="/jobs"
              >
                {" "}
                Jobs{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetxComents}
                className={HeaderStyles.navItem}
                activeClassName={HeaderStyles.activeNavItem}
                to="/comments"
              >
                Comments
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetxSignin}
                className={HeaderStyles.navItem}
                activeClassName={HeaderStyles.activeNavItem}
                to="/signin"
              >
                {" "}
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <Route path="/jobs" component={Jobs} />
        {/* <Route path="/" component={StoriesContainer} /> */}
        <Route path="/newStories" component={NewStories} />
        <Route path="/comments" component={Comments} />
        <Route path="/signin" component={Signin} />
      </div>
    );
  }
}

export default Nav;
