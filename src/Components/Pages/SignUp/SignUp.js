import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import css from "./SignUp.css";
const SignUp = () => {
  const {
    signInUsingGoogle,
    signInUsingFacebook,
    handleSignUp,
    regEmail,
    regPassword,
    regName,
    error,
  } = useAuth();
  return (
    <div
      id="signup-page"
      className="mx-auto my-3 border border-1 rounded-3 p-3"
    >
      <h2 className="text-success fw-bold">Sign Up Here!!</h2>

      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="form-control"
            onBlur={regName}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={regEmail}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onBlur={regPassword}
            placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>

        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </form>
      <p className="mx-auto text-danger">{error}</p>
      <hr />
      <div className="text-center">
        <button
          onClick={signInUsingGoogle}
          className="btn-info p-2 rounded-3 fw-bold me-2"
        >
          Google Login
        </button>
        <button
          onClick={signInUsingFacebook}
          className="btn-info p-2 rounded-3 fw-bold"
        >
          Facebook Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
