"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../page.module.css";
import "../globals.css";

const SignUpPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  async function onSignup() {}

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    return () => {
      second;
    };
  }, [user]);

  function handleChange(e) {
    const { value, name } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="container signup-form">
      <h1 className="text-center mt-5">Signup</h1>
      <hr />
      <form className="">
        <label htmlFor="firstName" className="mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="firstName form-control"
          placeholder="First Name"
          onChange={handleChange}
          value={user.firstName}
        />
        <label htmlFor="lastName" className="mb-2 mt-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="lastName form-control"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastName}
        />
        <label htmlFor="userName" className="mb-2 mt-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="username form-control"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor="emial" className="mb-2 mt-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="email form-control"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <label
          htmlFor="password"
          id="password"
          className="mb-2 mt-2 text-center"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="password form-control"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <button
          className="btn btn-success mt-3 mb-2 form-control"
          onClick={onSignup}
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link href="/login" className="text-center">
          Visit login page
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
