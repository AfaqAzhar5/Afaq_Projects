import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import "./Contact.css";
import Validation from "./Validation";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const reset = () => {
    setValues({
      username: "",
      email: "",
      password: "",
    });
  };
  const [isSubmit, setIsSubmit] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [errors, setErrors] = useState(null);
  console.log("errors username", errors?.username);
  console.log("errors email", errors?.email);
  console.log("errors password", errors?.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      values.username !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      errors?.username == "" &&
      errors?.email == "" &&
      errors?.password == ""
    ) {
      emailjs
        .sendForm("gmail_service", "template_w3jcvmr", event.target, "u3ibyRsWqyqj_hJiI")

        .then(
          (success) => {
            console.log(success.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // alert("Data is Submitted");
      reset();
    } else {
      // alert("error");
    }
  };

  return (
    <div className="main_contaciner">
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <h2>Login Form</h2>
        </div>
        <div className="user_name">
          <h5>Username</h5>
        </div>
        <div className="user_name_input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors?.username && <p>{errors?.username}</p>}
        </div>

        <div className="user_email">
          <h5>Email</h5>
        </div>
        <div className="user_email_input">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors?.email && <p>{errors?.email}</p>}
        </div>

        <div className="user_password">
          <h5>Password</h5>
        </div>
        <div className="user_password_input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors?.password && <p>{errors?.password}</p>}
        </div>
        <div className="btn">
          <button
            type="submit"
            onClick={() => {
              setIsSubmit("");
            }}
          >
            Submit
          </button>
          <Link to="/" style={{ marginTop: "7%" }}>
            <button type="button">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
