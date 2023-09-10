/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Setting from "../pages/Setting/Setting";
import Music from "../pages/Music/Music";
import Report from "../pages/Report/Report";
import NotFound from "../pages/NotFound/NotFound";
import Reset from "../pages/Auth/Reset/Reset";
import ProtectedRoute from "./ProtectedRoute";
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
    <>
      <Routes>
        <Route
          exact
          path={ROOT}
          element={<Home theme={props.theme} bgColor={props.bgColor} />}
        />
        <Route exact path={LOGIN} element={<Login theme={props.theme} />} />
        <Route
          exact
          path={REGISTER}
          element={<Register theme={props.theme} />}
        />
        <Route exact path={RESET} element={<Reset theme={props.theme} />} />
        <Route element={<ProtectedRoute theme={props.theme} />}>
          <Route exact path={SETTING} element={<Setting />} />
          <Route exact path={MUSIC} element={<Music />} />
          <Route exact path={REPORT} element={<Report theme={props.theme} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
