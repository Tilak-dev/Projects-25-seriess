import React, { useState } from "react";
import data from "./data";
import "./accodian.css";

function Accordian() {
  const [selected, setSelected] = useState(false);

  const singleSelection = (getDataId) => {
    setSelected(getDataId == selected ? false : getDataId);
  };
  //   console.log(selected);
  return (
    <div className="acc-wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div className="title">
                <h3>{dataItem.question}</h3>{" "}
                <span onClick={() => singleSelection(dataItem.id)}>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="acc-content">{dataItem.answer}</div>
              ) : (
                false
              )}
            </div>
          ))
        ) : (
          <div className="empty">Data is Not Present !!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
