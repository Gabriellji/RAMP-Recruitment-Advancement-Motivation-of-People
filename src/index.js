/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Provider from './context';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider>
        <App />
        <GlobalStyle />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
