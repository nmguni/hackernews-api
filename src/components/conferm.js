import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog
            style={{ backgroundColor: "rgba(225, 225, 225, 0.64)" }}
            open="true"
            fullWidth="true"
            maxWidth="sm"
          >
            <AppBar title="Confirm User Data" />
            <List
              style={{ padding: "1rem", backgroundColor: "rgb(225, 225, 225)" }}
            >
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>

              <br />
              <Button
                style={{
                  backgroundColor: "#d72323",
                  margin: "1rem",
                  color: "#fff",
                }}
                variant="contained"
                onClick={this.back}
              >
                Back
              </Button>

              <Button
                style={{
                  backgroundColor: "#364f6b",
                  margin: "1rem",
                  color: "#fff",
                }}
                variant="contained"
                onClick={this.continue}
              >
                Confirm & Continue
              </Button>
            </List>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
