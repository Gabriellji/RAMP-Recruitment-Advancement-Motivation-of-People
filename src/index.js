import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import Provider from "./context/Context";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider>
        <App />
        <GlobalStyle />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
