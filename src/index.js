import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./context/Context";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HashRouter as Router } from "react-router-dom";

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
