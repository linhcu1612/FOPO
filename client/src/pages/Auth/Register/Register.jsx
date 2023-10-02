/** @format */

import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { LOGIN } from "../../../routes/CONSTANTS";

import Error from "../../../components/UIs/Error/Error";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import classes from "./Register.module.css";

import { authRegister } from "../../../store/auth/authActions";

import { switchPage } from "../../../store/auth/authSlice";

const Register = (props) => {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const textColor = pomo[currPomoIndex][`color_${props.theme}`];
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  dispatch(switchPage());

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) navigate("/");
    if (success) navigate("/login");
  }, [navigate, userInfo, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(authRegister(data));
  };
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Register</h1>
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
          <label className={classes.label}>USERNAME:</label>
          <input
            ref={usernameRef}
            type='text'
            placeholder='Lucas'
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
    </div>
  );
};

export default Register;
