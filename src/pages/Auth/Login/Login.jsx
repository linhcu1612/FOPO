/** @format */

import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { RESET, REGISTER } from "../../../routes/CONSTANTS";

import classes from "./Login.module.css";

const Login = (props) => {
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
      <h1 className={classes.header}>Login</h1>
      <form className={classes.form}>
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
            Login with Email
          </div>
        </div>
        <div className={classes.forgot_wrapper}>
          <Link to={RESET}>
            <div className={classes.forgot_button}>Forgot Password</div>
          </Link>
        </div>
      </form>
      <div className={classes.signup_wrapper}>
        <div className={classes.signup_text}>Do not have an account?</div>
        <Link to={REGISTER}>
          <div className={classes.signup_button}>Create Account</div>
        </Link>
      </div>
    </>
  );
};

export default Login;
