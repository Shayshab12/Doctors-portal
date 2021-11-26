import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.information);
        setData(data.information);
      });
  }, []);
  return [data];
};

export default useFetch;
