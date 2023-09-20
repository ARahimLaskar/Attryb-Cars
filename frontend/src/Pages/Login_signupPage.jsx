import React, { useState, useEffect } from "react";
import "./Login_signupPage.css";

import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login_signupPage = () => {
  const [action, setAction] = useState("Sign Up");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSignup = () => {
    setAction("Sign Up");
    axios
      .post(`https://attryb-backend-pom7.onrender.com/user/signup`, inputValues)
      .then((res) => {
        console.log(res.data);
        if (res.data == "signup successful") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Saved Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.error == "User already exists") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "User already exists, use different email",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    setAction("Login");
    axios
      .post(`https://attryb-backend-pom7.onrender.com/user/login`, inputValues)
      .then((res) => {
        console.log(res.data);
        if (res.data.msg == "login Successful") {
          localStorage.setItem("user_name", res.data.user.name);
          localStorage.setItem("token", res.data.token);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        } else if (res.data == "invalid credentials") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid Credentials, Please check your password",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data == "something went wrong") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <span class="material-symbols-outlined">person</span>
            <input
              type="text"
              placeholder="Enter Name"
              required
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="input">
          <span class="material-symbols-outlined">mail</span>
          <input
            type="email"
            placeholder="Enter Email"
            required
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <span class="material-symbols-outlined">lock</span>
          <input
            type="password"
            placeholder="Enter Password"
            required
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>click here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
