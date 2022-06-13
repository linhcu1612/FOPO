/** @format */

import React from "react";

import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.wrapper} style={{ backgroundColor: props.bg }}>
      {props.icon}
      <div className={classes.number}>{props.number ? props.number : "--"}</div>
      <div className={classes.text_body}>{props.title}</div>
    </div>
  );
};

export default Category;
