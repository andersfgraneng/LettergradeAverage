import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Front from './components/Front';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Front />
    <App />
  </Provider>,
  document.querySelector('#root')
);
