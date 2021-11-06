/** @format */

import React from "react";

const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "220px",
  display: "block",
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
};

const Form = (props) => {
  return (
    <form style={formStyle} onSubmit={props.handleSubmit}>
      {props.children}
      <div>
        <button style={submitStyle} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
