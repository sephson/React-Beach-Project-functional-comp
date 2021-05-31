import React from "react";
import ReactDOM from "react-dom";
import GlobalState from "./GlobalState";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,

  document.getElementById("root")
);
