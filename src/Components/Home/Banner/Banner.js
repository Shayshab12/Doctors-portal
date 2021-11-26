import React from "react";
import { Carousel } from "react-bootstrap";
import css from "./Banner.css";
const Banner = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <h1>We care and protect your health.</h1>
          <p className="text-white">
            Only modern and best equipment advanced medical technologies and
            innovative diagnosis.
          </p>
          <div className="d-lg-flex justify-content-center">
            <button className="btn btn-info fw-bold p-3 mx-2">about us</button>
            <button className="btn btn-info fw-bold p-3 mx-2">
              <i className="fas fa-id-card-alt"></i>Call Back
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <h1>Correct diagnosis is half the success.</h1>
          <p className="text-white">
            Deeper appreciation and concern for our client’s investments and the
            human experience.
          </p>
          <button className="btn btn-info fw-bold p-3 mx-2">about us</button>
          <button className="btn btn-info fw-bold p-3 mx-2">Call Back</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <h1>We do our best for you and your health.</h1>
          <p className="text-white">
            High professional doctors level. All specialists have extensive
            practical experience and training courses.
          </p>
          <button className="btn btn-info fw-bold p-3 mx-2">about us</button>
          <button className="btn btn-info fw-bold p-3 mx-2">Call Back</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
