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
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  noAccountHeader: {
    width: "100%",
    width: "100%",
    color: "#3d4447",
    fontSize: ".8rem",
    letterSpacing: ".8px",
  },
  signUpLink: {
    width: "100%",
    textDecoration: "none",
    color: "#17b978",
    fontSize: "1rem",

    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});

export default styles;
