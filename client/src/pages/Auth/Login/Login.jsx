/** @format */

import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { REGISTER } from "../../../routes/CONSTANTS";

import Error from "../../../components/UIs/Error/Error";

import { authLogin } from "../../../store/auth/authActions";
import { switchPage } from "../../../store/auth/authSlice";

import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const textColor = pomo[currPomoIndex][`color_${props.theme}`];

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(authLogin(data));
    dispatch(switchPage());
  };
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Login</h1>
      <form className={classes.form}>
        {error && <Error>{error}</Error>}
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
          <label className={classes.label}>PASSWORD:</label>
          <input
            ref={passwordRef}
            type='password'
            placeholder='123456'
            className={classes.input}
          />
        </div>
        <div>
          <div
            type='submit'
            className={classes.submit_button}
            onClick={handleSubmit}
            style={{ color: textColor }}
            disabled={loading}>
            Login with Email
          </div>
        </div>
      </form>
      <div className={classes.signup_wrapper}>
        <div className={classes.signup_text}>Do not have an account?</div>
        <Link to={REGISTER}>
          <div className={classes.signup_button}>Create Account</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
