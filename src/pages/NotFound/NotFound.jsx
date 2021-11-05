/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ROOT } from "../../routes/CONSTANTS";

const NotFound = () => {
  return (
    <>
      <Link to={ROOT}>Home</Link>
      <Typography variant='h2'>404: page not found!</Typography>
    </>
  );
};

export default NotFound;
