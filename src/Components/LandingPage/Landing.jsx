import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./LandingStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  const classes = useStyles();
  

  const clickHandler=()=>{
    history.push("/categories");
  }

  return (
    <Container className={classes.root} maxWidth="false">
      <Typography component="div" style={{ height: "100vh" }}>
        <Grid xs={12} className={classes.welcome}>
          <Typography
            variant="h2"
            style={{ color: "#e91e63", textShadow: "2px 2px 4px #000000" }}
          >
            Welcome To GrowCify
          </Typography>
        </Grid>
        <Button className={classes.button} onClick={clickHandler}>
          Click here to see all categories
        </Button>
      </Typography>
    </Container>
  );
};


export default Landing
