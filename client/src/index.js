import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.sass';
import App from './App';

import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AlertTemplate from "react-alert-template-mui";

import { positions, Provider as AlertProvider } from "react-alert";
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const options = {
  position: positions.MIDDLE
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
