import React from "react";
import Nav from "./containers/nav";
// import { BrowserRouter as Router } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Signup from "./components/1-signup";
import Login from "./components/2-login";
import Dashboard from "./components/3-dashboard";

// const routing = (
//   <Router>
//     <div id='routing-container'>
//       <Route path='/login' component={LoginComponent}></Route>
//       <Route path='/signup' component={SignupComponent}></Route>
//       <Route path='/dashboard' component={DashboardComponent}></Route>
//     </div>
//   </Router>
// );

export const App = () => (
  <Router>
    <Nav />
    <div id="routing-container">
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);
