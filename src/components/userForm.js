import React, { Component } from "react";
import { FormUserDetails } from "./formUserDetales";

export class UserForm extends Component {
  state = {
    set: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // procceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <h1>personal </h1>
          // <FormPersonalDetails
          //   nextStep={this.nextStep}
          //   prevStep={this.prevStep}
          //   handleChange={this.handleChange}
          //   values={values}
          // />
        );
      case 3:
        return (
          <h1>confrim </h1>
          // <Confirm
          //   nextStep={this.nextStep}
          //   prevStep={this.prevStep}
          //   values={values}
          // />
        );
      case 4:
        return (
          <div>
            {" "}
            <h1>personal </h1>
          </div>
        );
    }
  }
}

export default UserForm;
