import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Service from "./Service";

const Services = () => {
  const [data] = useFetch();

  return (
    <div>
      <div className="container my-5">
        <h2 className="fw-bold text-center">Our Services</h2>
        <div className="row text-center">
          {data?.map((info) => (
            <Service key={info.userId} info={info}></Service>
          ))}
          <NavLink to="/blog">
            <button className="btn btn-outline-warning">Know More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
<h2>This is our Service</h2>;
