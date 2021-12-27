/** @format */

import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { LOGIN } from "../../../routes/CONSTANTS";

import classes from "./Register.module.css";

const Register = (props) => {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);

  const textColor = pomo[currPomoIndex][`color_${props.theme}`];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  return (
    <>
      <h1 className={classes.header}>Register</h1>
      <form className={classes.form}>
        <div>
          <label className={classes.label}>FIRST NAME:</label>
          <input
            ref={passwordRef}
            type='text'
            className={classes.input}
            placeholder='Linh'
          />
        </div>
        <div>
          <label className={classes.label}>LAST NAME:</label>
          <input
            ref={passwordRef}
            type='text'
            className={classes.input}
            placeholder='Cu'
          />
        </div>
        <div>
          <label className={classes.label}>EMAIL:</label>
          <input
            ref={usernameRef}
            type='text'
            placeholder='example@gmail.com'
            className={classes.input}
          />
        </div>
        <div>
          <label className={classes.label}>PASSWORD:</label>
          <input ref={passwordRef} type='password' className={classes.input} />
        </div>
        <div>
          <div
            className={classes.submit_button}
            style={{ color: textColor }}
            onClick={handleSubmit}>
            Register with Email
          </div>
        </div>
      </form>
      <div className={classes.signup_wrapper}>
        <div className={classes.signup_text}>Already have an account?</div>
        <Link to={LOGIN}>
          <div className={classes.signup_button}>Login</div>
        </Link>
      </div>
    </>
  );
};

export default Register;
