import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Username"),

    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),

    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit() {
    //Call the server
    console.log("Submitted Register Form");
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
