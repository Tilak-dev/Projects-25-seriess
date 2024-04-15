import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function Stars(indexOfStars = 5) {
  function handleOnClick(getIndex) {
    console.log(getIndex);
  }
  function handleOnEnter(getIndex) {
    console.log(getIndex);
  }
  function handleOnLeave(getIndex) {
    console.log(getIndex);
  }
  return (
    <div>
      {[...Array(indexOfStars)].map((_,index) => {
        index++;
        return (
          <BsFillStarFill
            key={index}
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOnEnter(index)}
            onMouseLeave={() => handleOnLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Stars;
