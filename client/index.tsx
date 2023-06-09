import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
