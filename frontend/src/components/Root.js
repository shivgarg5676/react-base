
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { hot } from "react-hot-loader";
import Router from './Router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class Root extends Component {
  render() {
    const { store, history,persistor } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline/>
          <MuiThemeProvider theme={theme}>
              <Router history={history}/>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired
};

export default hot(module)(Root);
