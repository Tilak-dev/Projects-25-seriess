import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./stars.css";

function Stars({ indexOfStars = 2 }) {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(getIndex) {
    setSelected(getIndex);
  }
  function handleOnEnter(getIndex) {
    setHover(getIndex);
  }
  function handleOnLeave() {
    setHover(selected);
  }
  return (
    <div className="box">
      {[...Array(indexOfStars)].map((_, index) => {
        index++;
        return (
          <BsFillStarFill
            key={index}
            className={index <= (hover || selected) ? "active" : "inactive"}
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOnEnter(index)}
            onMouseLeave={() => handleOnLeave()}
            size={40}
          />
        );
      })}
      <br  />
      <br  />
      <b className="br">Hii there, you have Selected {selected ? selected : "0"}</b>
    </div>
  );
}

export default Stars;
