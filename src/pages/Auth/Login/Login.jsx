/** @format */

import React from "react";
import Form from "../../../components/Forms/Form";
import Field from "../../../components/Forms/Field";

const Login = () => {
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
      <h1>Login</h1>
      <Form handleSubmit={handleSubmit}>
        <Field ref={usernameRef} label='Username:' type='text' />
        <Field ref={passwordRef} label='Password:' type='password' />
      </Form>
    </>
  );
};

export default Login;
