import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    textAlign: "center"
  },
});

const HomeComponent = ({ classes }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={6}>
        <div className={classes.root}>
          Home Route
        </div>
      </Grid>
    </Grid>
  );
};

HomeComponent.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(HomeComponent);
