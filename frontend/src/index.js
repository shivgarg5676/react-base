import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
// import './styles/styles.scss'; // Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const { store, persistor } = configureStore();
render(
  <AppContainer>
    <Root store={store} history={history} persistor={persistor} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} persistor={persistor} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

window.onLoad = function () {
  document.addEventListener("deviceready", window.onDeviceReady, false);
}

window.onDeviceReady = function () {
  if (window.isCordova) {
    //Some app specific code 
  }
}
