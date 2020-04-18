import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Jobs } from "./jobs";
import { NewStories } from "./newStories";
import { Signin } from "./signin";
import { HomePage } from "./home";

import HeaderStyles from "../styles/header.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "API" };
  }

  changeApiTetx = () => {
    this.setState({ title: " " });
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
                onClick={this.changeApiTetx}
                className={HeaderStyles.navItem}
                to="/HomePage"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetx}
                className={HeaderStyles.navItem}
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
                to="/jobs"
              >
                {" "}
                Jobs{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={this.changeApiTetxSignin}
                className={HeaderStyles.navItem}
                to="/signin"
              >
                {" "}
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <Route path="/jobs" component={Jobs} />
        <Route path="/homePage" component={HomePage} />
        <Route path="/newStories" component={NewStories} />
        <Route path="/signin" component={Signin} />
      </div>
    );
  }
}

export default Nav;
