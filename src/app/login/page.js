"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../page.module.css";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onLogin() {}

  function handleChange(e) {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <div className="container signup-form">
      <h1 className="text-center mt-5">Log in</h1>
      <hr />
      <form className="">
        <label htmlFor="emial" id="email" className="mb-2 mt-2">
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
          onClick={onLogin}
        >
          Login here
        </button>
        <Link href="/signup" className="text-center">
          Visit signup page
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
