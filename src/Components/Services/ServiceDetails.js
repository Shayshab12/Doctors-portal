import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import Details from "./Details";

const ServiceDetails = () => {
  const { userId } = useParams();

  return (
    <div className="text-center">
      <h2>Service Infomartion {userId}</h2>
    </div>
  );
};

export default ServiceDetails;
<h2>Service Infomartion</h2>;
