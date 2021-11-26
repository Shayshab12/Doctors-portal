import React from "react";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { userId, title, description, coverImg } = props.info;
  return (
    <div className="col-lg-3">
      <div
        className="card shadow-lg mx-auto mb-2 text-center text-dark p-3"
        style={{ width: "18rem" }}
      >
        <img
          src={coverImg}
          className="card-img-top coverImg"
          height="160px"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">
            <small>{description}</small>
          </p>
          <NavLink to={`/details/${userId}`}>
            <button className="btn btn-outline-info">
              Learn More<i className="fab fa-leanpub ms-1"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Service;
