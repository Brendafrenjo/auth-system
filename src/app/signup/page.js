"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import toast, { Toaster } from "react-hot-toast";
import "../page.module.css";
import "../globals.css";

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
      const res = await axios.post("/api/users/signup", user);
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

  function handleChange(e) {
    const { value, name } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="container signup-form">
      <Toaster />
      <h1 className="text-center mt-5">{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <form className="">
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
