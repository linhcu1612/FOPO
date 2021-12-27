/** @format */

import React from "react";

import { useSelector } from "react-redux";

import classes from "./Reset.module.css";

const Reset = (props) => {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);

  const textColor = pomo[currPomoIndex][`color_${props.theme}`];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
    };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  const emailRef = React.useRef();

  return (
    <>
      <h1 className={classes.header}>Login</h1>
      <form className={classes.form}>
        <div>
          <label className={classes.label}>EMAIL:</label>
          <input
            ref={emailRef}
            type='text'
            placeholder='example@gmail.com'
            className={classes.input}
          />
        </div>
        <div>
          <div
            className={classes.submit_button}
            style={{ color: textColor }}
            onClick={handleSubmit}>
            Reset Password
          </div>
        </div>
      </form>
    </>
  );
};

export default Reset;
