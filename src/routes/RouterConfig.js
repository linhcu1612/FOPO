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
import { ROOT, LOGIN, REGISTER, SETTING, MUSIC, REPORT } from "./CONSTANTS";

export const RouterConfig = (props) => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT}>
          <Home theme={props.theme} />
        </Route>
        <Route exact path={LOGIN}>
          <Login theme={props.theme} />
        </Route>
        <Route exact path={REGISTER} component={Register} />
        <Route exact path={SETTING} component={Setting} />
        <Route exact path={MUSIC} component={Music} />
        <Route exact path={REPORT} component={Report} />
        {/* <Route path='/login'>
          <Login />
        </Route> */}

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
