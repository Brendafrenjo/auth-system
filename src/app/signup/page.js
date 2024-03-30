"use Client";
import Link from "next/link";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> parent of 9298717 (Update page.js)
import { useRouter } from "next/navigation";
import { axios } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import toast, { Toaster } from "react-hot-toast";
import "../page.module.css";
import "../globals.css";
=======
>>>>>>> parent of 9298717 (Update page.js)

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSignup() {
    try {
      setLoading(true);
      console.log("User data:", user);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data.message);
      router.push("/login");
    } catch (error) {
      console.log("SignUp failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email && user.password && user.username) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  function handleChange() {}

  return (
<<<<<<< HEAD
    <div className="container signup-form">
      <Toaster />
      <h1 className="text-center mt-5">{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <form className="">
        <label for="userName">Username</label>
=======
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
>>>>>>> parent of 9298717 (Update page.js)
        <input
          type="text"
          id="username"
          className="username form-control mb-2 mt-2"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
        />
<<<<<<< HEAD
        <label for="email">Email</label>
=======
        <label htmlFor="emial" id="email">
          Email
        </label>
>>>>>>> parent of 9298717 (Update page.js)
        <input
          type="email"
          id="email"
          className="email form-control mb-2 mt-2"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
<<<<<<< HEAD
        <label for="password">Password</label>
=======
        <label htmlFor="password" id="password">
          Password
        </label>
>>>>>>> parent of 9298717 (Update page.js)
        <input
          type="password"
          id="password"
          className="password form-control mb-2 mt-2"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
<<<<<<< HEAD
        <button
          className="btn btn-success mt-3 mb-2 form-control"
          onClick={onSignup}
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link href="/login" className="text-center">
          Go to login page
        </Link>
=======
>>>>>>> parent of 9298717 (Update page.js)
      </form>
    </div>
  );
};

export default SignUpPage;
