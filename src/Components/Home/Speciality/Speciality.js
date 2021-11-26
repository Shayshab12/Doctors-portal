import React from "react";
import css from "./spec.css";
const Speciality = () => {
  return (
    <div className=" specifi p-5">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <span
                  className="iconify"
                  data-icon="ic:outline-privacy-tip"
                ></span>
              </div>
              <div className=" ms-3 text-start">
                <h5>Medical Privacy</h5>
                <p className="w-75">
                  We guarantee the safety and sterility of medical equipment as
                  well as the non-disclosure of information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <span
                  className="iconify"
                  data-icon="ic:outline-privacy-tip"
                ></span>
              </div>
              <div className="text-start ms-3">
                <h5>Famous Doctors</h5>
                <p className="w-75">
                  Doctors of our clinic have international certificates and are
                  recognized all over the world. All staff are interned abroad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <i className="fas fa-graduation-cap iconify"></i>
              </div>
              <div className="text-start ms-3">
                <h5>Booking a visit</h5>
                <p className="w-75">
                  You can make an appointment for a doctor and also receive a
                  reminder before the visit to the clinic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <i className="far fa-gem iconify"></i>
              </div>
              <div className="text-start ms-3">
                <h5>Modern Equipment</h5>
                <p className="w-75">
                  We use only the most modern medical equipment, skills for
                  modern trends and innovations introducing into our practice.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <span className="iconify" data-icon="mi:storm"></span>
              </div>
              <div className="text-start ms-3">
                <h5>Modern Equipment</h5>
                <p className="w-75">
                  We use only the most modern medical equipment, skills for
                  modern trends and innovations introducing into our practice.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-lg-flex rounded-3 p-3 ">
              <div className="mt-4 ms-3">
                <i className="fas fa-walking iconify"></i>
              </div>
              <div className="text-start ms-3">
                <h5>Modern Equipment</h5>
                <p className="w-75">
                  We use only the most modern medical equipment, skills for
                  modern trends and innovations introducing into our practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
