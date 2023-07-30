/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";

ReactDOM.render(
  <Auth0Provider
    domain='dev-qglcdzici40y2xho.us.auth0.com'
    clientId='FstxjvOrZV21tVKUfbpyojVX618SNSLF'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
