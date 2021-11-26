import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.information);
        const allDetails = data.information?.find(
          (item) => item.userId === userId
        );
        setData(allDetails);
      });
  }, [userId]);
  console.log(data);
  return (
    <div className="text-center mb-5">
      {" "}
      <h1>{data.title}</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={data.coverImg}
              className="img-fluid"
              width="550px"
              alt=""
            />

            <div className="text-start">
              <h3 className="my-3">{data.details?.service}</h3>
              <p>{data.details?.explanation}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {data.experts?.map((expert) => (
                <div
                  className="col-12 p-3 mb-5 shadow border"
                  key={expert?.doctorName}
                >
                  <img
                    src={expert.img}
                    className="rounded-circle w-25"
                    alt=""
                  />
                  <h3>{expert?.doctorName}</h3>
                  <h5>{expert?.speciality}</h5>
                  <p>
                    <span className="fw-bold">Fees:</span> {expert?.fees}
                  </p>
                  <button className="btn btn-warning">Make Consultation</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
