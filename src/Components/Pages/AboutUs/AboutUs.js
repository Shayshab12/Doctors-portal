import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="text-center my-5">
      <div className="shadow mb-3 p-2 w-75 mx-auto">
        <h3>About us</h3>
        <p>
          With 3,000+ Satisfied Patients... We hope to provide the best possible
          service.
        </p>
        <NavLink to="/blog">
          <button className="btn btn-info mb-4 py-3 rounded-3 px-5">
            visit our Blogs
          </button>
        </NavLink>
      </div>

      <div className="mb-4">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-4 col-12 ">
              <div className="card">
                <h3 className="text-primary">
                  <i className="fas fa-book-reader"></i>
                  Advanced medical technologies
                </h3>
                <p className="mx-auto description">
                  The Advanced Medical Technology Association (AdvaMed) today
                  announced the launch of its Center for Digital Health, a new
                  advocacy platform designed to advance digital health and the
                  contributions of the medical technology industry to
                  data-driven health care.
                </p>
                <button className="btn btn-info w-50 rounded-3 m-3 mx-auto">
                  Consult with Us<i className="fab fa-get-pocket"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-12 ">
              <div className="card">
                <h3 className="text-primary">
                  <i className="fas fa-rocket"></i>
                  High professionalism of specialists
                </h3>
                <p className="mx-auto description">
                  Neurosurgery is the highest-paid specialty in the medical
                  profession. With patients suffering from brain-related illness
                  or injury, spine, spinal cord and nervous system.
                  Neurosurgeons can specialize in adult or infant and child
                  treatment.
                </p>
                <button className="btn btn-info w-50 rounded-3 mx-auto m-3">
                  Consult with Us<i className="fab fa-get-pocket"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="card">
                <h3 className="text-primary">
                  <i className="fas fa-gift"></i>
                  High quality of medical services
                </h3>
                <p className="mx-auto description">
                  If you don’t mind the pressure of holding a patient’s heart in
                  your hands, then this top-paying field of invasive cardiology
                  might be the right medical specialty for you to pursue. Forbes
                  reported that doctors plays a significant rule in our
                  hospital.
                </p>
                <button className="btn btn-info w-50 rounded-3 mx-auto m-3">
                  Consult with Us<i className="fab fa-get-pocket"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="card">
                <h3 className="text-primary">
                  <i className="fas fa-glasses"></i>
                  Optimal prices and quality
                </h3>
                <p className="mx-auto description">
                  An ophthalmologist — Eye M.D. — is a medical or osteopathic
                  doctor who specializes in eye and vision care.
                  Ophthalmologists differ from optometrists and opticians in
                  their levels of training and in what they can diagnose and
                  treat.
                </p>
                <button className="btn btn-info w-50 rounded-3 mx-auto m-3">
                  Consult with Us<i className="fab fa-get-pocket"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="card">
                <h3 className="text-primary">
                  <i className="fas fa-disease"></i>Easy and Realiable Service
                </h3>
                <p className="mx-auto description">
                  Pharmacy technicians are highly qualified personnel who are
                  opted to work in a particular company especially, for their
                  well-versed abilities. Globally there is a wide range of
                  immensely qualified technical personnel in our hospital.
                </p>
                <button className="btn btn-info w-50 rounded-3 mx-auto m-3">
                  Consult with Us<i className="fab fa-get-pocket"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 container">
        <div className="row g=2">
          <div className="col-lg-4 col-12 ">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/GyiobIq4fnk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-4 col-12 ">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/3Nf6Q2skGOM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-4 col-12 ">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/Jb7d5GMQzQs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
