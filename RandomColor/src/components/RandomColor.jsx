import React, { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOf, setTypeOf] = useState("hex");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }
  const handleOnHexColor = () => {
    //example #000000
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "G", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor)
  };
  const handleOnRGBColor = () => {
    const r = randomColor(255);
    const g = randomColor(255);
    const b = randomColor(255);

    setColor(`rgb(${r},${g},${b})`)
  };
  return (
    <div>
      <button
        onClick={() => {
          setTypeOf("hex");
        }}
      >
        Select Hex Color
      </button>
      <button
        onClick={() => {
          setTypeOf("rgb");
        }}
      >
        Select RGB Color
      </button>
      <button
        onClick={
          typeOf === "hex" ? () => handleOnHexColor() : () => handleOnRGBColor()
        }
      >
        Ganerate a Random Color
      </button>
      <br />
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}

export default RandomColor;
