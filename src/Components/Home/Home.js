import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import DoctorReview from "./DoctorReview/DoctorReview";
import css from "./home.css";
import Speciality from "./Speciality/Speciality";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Services />
      <Speciality />
      <DoctorReview />
    </div>
  );
};

export default Home;
<h3>this is home</h3>;
