"use Client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });

  async function onSignup() {}

  function handleChange() {}

  return (
    <div>
      <h1 className="text-center">Signup</h1>
      <hr />
      <form>
        <label htmlFor="firstName" id="firstName">
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
        <label htmlFor="lastName" id="lastName">
          First Name
        </label>
        <input
          type="text"
          id="lastName"
          className="lastName form-control"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastName}
        />
        <label htmlFor="userName" id="userName">
          First Name
        </label>
        <input
          type="text"
          id="username"
          className="username form-control"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor="emial" id="email">
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
        <label htmlFor="password" id="password">
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
      </form>
    </div>
  );
};

export default SignUpPage;
