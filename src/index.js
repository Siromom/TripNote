import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tripApp from './reducers';
import App from './components/App';

import "./index.css";

const store = createStore(tripApp);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
  