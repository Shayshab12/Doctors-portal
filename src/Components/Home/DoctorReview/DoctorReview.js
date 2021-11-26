import React from "react";

const DoctorReview = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-12 text-start my-5">
            <div className="px-5">
              <h2 className="mb-4">
                We will help to find health, to everyone.
              </h2>
              <hr className="w-75 ms-4" />
              <h5 className=" mb-5 mt-4">
                The optimum ratio of price and quality responsible and
                conscientious approach
              </h5>
              <p className="text-justify">
                On the basis of the medical center “Nordis” can be given a
                thorough examination of the body and get the advice of highly
                qualified specialists in various fields of medicine. According
                to studies, our doctors will make an individual program of
                prevention and treatment of identified diseases, directed to a
                surgical treatment if necessary. In today’s operational
                department conducted a wide range of operations under local and
                general anesthesia.
              </p>
              <div className="d-flex">
                <img
                  src="https://nordis.true-emotions.studio/clinic/wp-content/uploads/sites/9/2018/04/uef.png"
                  alt=""
                />
                <p className="fw-bold ms-3">Ms. Lara Croft</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://www.heroesmile.com/wp-content/uploads/2019/05/form-nurse.png"
              alt=""
              className="w-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorReview;
