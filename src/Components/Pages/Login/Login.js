import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import css from "./Login.css";

const Login = () => {
  const {
    setUser,
    signInUsingGoogle,
    signInUsingFacebook,
    email,
    password,
    regEmail,
    regPassword,
    handleResetPassword,
    error,
    setError,
    setIsLoading,
  } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  const handleFacebookLogin = () => {
    signInUsingFacebook()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <div className="mx-auto border border-1 rounded-3 p-3 my-3">
              <h2 className="text-success fw-bold">Please Login!!</h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    onBlur={regEmail}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                    className="form-control"
                    id="exampleInputPassword1"
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
                  Don't have any account? <Link to="/sign-up">SignUp Here</Link>
                </p>
                <p>
                  Forget Password?
                  <button
                    className="btn btn-outline-info ms-2"
                    onClick={handleResetPassword}
                  >
                    Click Here
                  </button>
                </p>
              </form>
              <p>{error}</p>
              <hr />
              <div className="text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn-info p-2 rounded-3 fw-bold me-2"
                >
                  Google Login
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="btn-info p-2 rounded-3 fw-bold"
                >
                  Facebook Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="https://www.sjahs.org/wp-content/uploads/2019/08/shutterstock_667833025.jpg"
              className="w-100 mt-5 rounded-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
