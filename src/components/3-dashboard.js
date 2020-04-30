import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import styles from "../styles/dashboardStyles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const firebase = require("firebase");

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper elevation={0} className={classes.paper}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Submit Story"
            multiline
            rows={6}
            // defaultValue="Enter"
            variant="outlined"
          />
          <Button className={classes.submit}>Submit</Button>
          <Button className={classes.exit}>
            <Link className={classes.link} to="/">
              Exit
            </Link>
          </Button>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Dashboard);
