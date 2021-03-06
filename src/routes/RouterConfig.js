/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Setting from "../pages/Setting/Setting";
import Music from "../pages/Music/Music";
import Report from "../pages/Report/Report";
import NotFound from "../pages/NotFound/NotFound";
import Reset from "../pages/Auth/Reset/Reset";
import {
  ROOT,
  LOGIN,
  REGISTER,
  SETTING,
  MUSIC,
  REPORT,
  RESET,
} from "./CONSTANTS";

export const RouterConfig = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={ROOT}>
          <Home theme={props.theme} bgColor={props.bgColor} />
        </Route>
        <Route exact path={LOGIN}>
          <Login theme={props.theme} />
        </Route>
        <Route exact path={REGISTER}>
          <Register theme={props.theme} />
        </Route>
        <Route exact path={RESET}>
          <Reset theme={props.theme} />
        </Route>
        <Route exact path={SETTING} component={Setting} />
        <Route exact path={MUSIC} component={Music} />
        <Route exact path={REPORT}>
          <Report theme={props.theme} />
        </Route>

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
