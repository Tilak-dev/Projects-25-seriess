import React, { useState } from "react";
import "./image.css";
import { data } from "./data";

function ImageBox() {
  const [current, setCurrent ] = useState(1)
  return (
    <div className="box">
      {data.map((item) => {
        return <div key={item.id} className="image"><img src={item.image} alt="" /></div>;
      })}
    </div>
  );
}

export default ImageBox;
