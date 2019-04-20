import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Component from "./component";
import * as homeActions from "./actions";

class HomeComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Component id="home"/>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  homeActions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
