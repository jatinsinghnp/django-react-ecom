import React, { useState, useEffect } from "react";
import axios from "axios";
const Jump = () => {
  const [posts, setPost] = useState();
  useEffect(() => {
    console.log("hellow");
    const fetchapi = async () => {
      const data = await axios
        .get("http://127.0.0.1:8000/api/")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(data);
    };
    fetchapi();
  }, []);

  return (
    <div>
      <h1>hellow api 123</h1>
      {posts.map((item) => {
        console.log(item.id);
        return (
          <section key={item.id} className="bg-red-700 text-white">
            <h1>{item.product_title}</h1>
            <p>{item.product_desc}</p>
            <img src={item.prod_img} alt="" />
          </section>
        );
      })}
    </div>
  );
};

export default Jump;
