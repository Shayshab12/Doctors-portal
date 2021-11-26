import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/login";
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand bg-dark" to="/">
            <img
              src="https://nordis.true-emotions.studio/clinic/wp-content/uploads/sites/9/2018/04/logono.svg"
              alt=""
            />
            {/* <span className="text-info">N</span>ordis */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>

              {!user.displayName ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <i className="fas fa-sign-in-alt"></i>Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={handleLogOut}
                    to="/logOut"
                  >
                    LogOut
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  SignUp
                </Link>
              </li>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </ul>

            {user.displayName && (
              <div className="nav-item">
                <img
                  src={user.photoURL}
                  className="rounded-circle w-25"
                  alt=""
                />
                <p className="text-dark">{user.displayName}</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
