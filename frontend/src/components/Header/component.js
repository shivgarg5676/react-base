import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  headerWeb: {
    flex: 1,
    cursor: "pointer"
  },
  headerMobile: {
    flex: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: -20,
  },
};


const HeaderComponent = ({ classes, onHeaderClick }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={window.isCordova? classes.headerMobile: classes.headerWeb} onClick={onHeaderClick}>
            React Redux Boilerplate
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};
export default withStyles(styles)(HeaderComponent);

