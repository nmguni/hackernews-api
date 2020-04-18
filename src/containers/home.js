import React from "react";
import {
  StoriesContainerWrapper,
  GlobalStyle,
} from "../styles/StoriesContainerStyles";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

// cards
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// image
import officalNews from "../images/offical-hacker-news.jpg";
import hackerNews from "../images/hacker-news.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },
  rootImages: {
    height: "300px",
  },
  title: {
    fontWeight: "bold",
    color: "#3d4447",
  },
  bodyText: {
    color: "#666666",
    lineHeight: "1.6rem",
    fontSize: "1.2rem",
  },
  icon: {
    color: "rgba(0,0,0, .7)",
  },
  media: {
    height: 140,
  },
  imageTitle: {
    fontWeight: "bold",
    padding: ".5rem",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  link: {
    color: "#3d4447",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <Paper className={classes.root} elevation={0}>
          <Typography className={classes.title} variant="h4" gutterBottom>
            Hello,
          </Typography>
          <Typography className={classes.bodyText} variant="body1" gutterBottom>
            Hacker News is a social news website focusing on computer science
            and entrepreneurship. It is run by Paul Graham's investment fund and
            startup incubator, Y Combinator. In general, content that can be
            submitted is defined as "anything that gratifies one's intellectual
            curiosity...{" "}
            <a
              href="http://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon
                className={classes.icon}
                icon={faWikipediaW}
              />{" "}
            </a>
          </Typography>{" "}
          <Typography className={classes.bodyText} variant="body1">
            I buit Hacker news API with the help of{" "}
            <a
              href="https://www.youtube.com/watch?v=LN6Dol_fX0w&t=5989s"
              target="_blank"
              className={classes.link}
            >
              freecodeCamp
            </a>{" "}
            and decided to customise it to truly test my undestanding ans to
            make this my own.
          </Typography>
          <Box mt={3} style={{ textAlign: "center" }}>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6}>
                <Typography className={classes.imageTitle} variant="body1">
                  Offical Hacker News
                </Typography>
                <Card className={classes.rootImages}>
                  <CardMedia
                    className={classes.media}
                    image={officalNews}
                    title="Contemplative Reptile"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Card>
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography className={classes.imageTitle} variant="body1">
                  {" "}
                  My Version
                </Typography>
                <Card className={classes.rootImages}>
                  <CardMedia
                    className={classes.media}
                    image={hackerNews}
                    title="Contemplative Reptile"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </StoriesContainerWrapper>
    </div>
  );
};
