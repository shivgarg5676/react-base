import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import { ConnectedRouter } from "react-router-redux";

const styles = theme => ({
  header: {
    position: "fixed",
    top: "0px",
    width: "100%",
    zIndex: "2"
  },
  body: {
    paddingTop: "56px",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      paddingTop: 48
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  loader: {
    display: "flex",
    position: "fixed",
    background: "rgba(0,0,0,0.2)",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  }
});
class RouterComponent extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <div id="header" className={this.props.classes.header}>
            <Header />
          </div>
          <div id="app-body" className={this.props.classes.body}>
            {this.props.loading && (
              <div className={this.props.classes.loader}>
                <CircularProgress
                  className={this.props.classes.progress}
                  size={50}
                />
              </div>
            )}
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              open={this.props.snackbarStatus ? true : false}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
              message={<span id="message-id">{this.props.snackbarStatus}</span>}
            />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

RouterComponent.propTypes = {
  routing: PropTypes.object,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  snackbarStatus: PropTypes.string,
  history: PropTypes.object
};

function mapStateToProps(state, props) {
  return {
    routing: state.routing,
    loading: state.common ? state.common.isLoading : false,
    snackbarStatus: state.common ? state.common.snackbarStatus : "",
    history: props.history
  };
}

export default connect(mapStateToProps)(withStyles(styles)(RouterComponent));
