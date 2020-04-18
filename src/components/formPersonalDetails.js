import React, { Component } from "react";
// import { MuiThemeProvider } from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
              <h1>Enter Personal Detail</h1>
              <TextField
                placeholder="Enter Your Occupation"
                label="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.Occupation}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <TextField
                placeholder="Enter Your Last City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <TextField
                placeholder="Enter Your Bio"
                label="Bio"
                onChange={handleChange("bio")}
                defaultValue={values.bio}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <Button
                style={{ backgroundColor: "#364f6b", marginRight: "1rem" }}
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
              <Button
                style={{ backgroundColor: "#d72323" }}
                color="primary"
                variant="contained"
                onClick={this.back}
              >
                Back
              </Button>
            </React.Fragment>
          </Paper>
        </Box>
      </div>
    );
  }
}

export default FormPersonalDetails;
