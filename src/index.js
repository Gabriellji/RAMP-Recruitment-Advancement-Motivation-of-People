/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import App from './App.jsx';
// eslint-disable-next-line import/extensions
import Provider from './context/index.jsx';
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
