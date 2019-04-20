import React from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './component';
import { bindActionCreators } from "redux";
import * as headerActions from './actions';
import PropTypes from "prop-types";
class HeaderContainer extends React.Component{
    constructor(){
      super();
      this.onHeaderClick = this.onHeaderClick.bind(this);
    }
    onHeaderClick(){
      this.props.headerActions.redirectToHomePage();
    }
    render(){
        return(
          <HeaderComponent
          onHeaderClick={this.onHeaderClick}
          />
        )
    }

}

HeaderContainer.propTypes = {
  routing: PropTypes.object.isRequired,
  headerActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
