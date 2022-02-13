import axios from "axios";
import React, { useEffect } from "react";
import Aside from "./Aside";
import Card from "./Card";
const Home = () => {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" flex justify-center items-center">
      <Aside />
      <Card />
    </div>
  );
};

export default Home;
