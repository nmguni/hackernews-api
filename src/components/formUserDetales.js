import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center" m={2} width={500} height={550}>
          <Paper
            style={{ padding: "1rem", backgroundColor: "rgb(225, 225, 225)" }}
          >
            <React.Fragment>
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth={true}
              />
              <br />
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth={true}
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                fullWidth={true}
              />
              <br />
              <Button
                style={{ backgroundColor: "#364f6b" }}
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
            </React.Fragment>
          </Paper>
        </Box>
      </div>
    );
  }
}

export default FormUserDetails;
