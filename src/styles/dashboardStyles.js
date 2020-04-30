const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  exit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#85203b",
    letterSpacing: ".2rem",
    fontWeight: "bold",
    color: "#fff",
    margin: ".5rem",
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#17b978",
    color: "#fff",
    letterSpacing: ".2rem",
    fontWeight: "bold",
    margin: ".5rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
});

export default styles;
