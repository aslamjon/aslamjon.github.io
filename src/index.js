import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from "./router/Router";

import GlobalStyle from './components/Global';
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle>
      <Router/>
    </GlobalStyle>
  </Provider>,
  document.getElementById('root')
);

