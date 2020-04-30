import styled from "styled-components";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "600",
    letterSpacing: ".2rem",
    color: "#151515c2",
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#364f6b",
    letterSpacing: ".2rem",
    fontWeight: "bold",
  },
  hasAccountHeader: {
    width: "100%",
    color: "#3d4447",
    fontSize: ".8rem",
    letterSpacing: ".8px",
  },
  logInLink: {
    width: "100%",
    textDecoration: "none",
    color: "#17b978",
    fontWeight: "bold",
    fontSize: "1rem",
    letterSpacing: ".8px",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: "1rem",
    letterSpacing: ".8px",
    fontWeight: "bold",
  },
});

export default styles;
