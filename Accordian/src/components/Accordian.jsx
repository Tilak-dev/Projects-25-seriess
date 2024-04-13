import React, { useState } from "react";
import data from "./data";
import "./accodian.css";

function Accordian() {
  const [selected, setSelected] = useState(false);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  const btnClicked = () => {
    setEnableMulti(!enableMulti);
  };

  const singleSelection = (getDataId) => {
    setSelected(getDataId == selected ? false : getDataId);
  };
  const multiSelection = (getDataId) => {
    let copyMulti = [...multi];
    const findById = copyMulti.indexOf(getDataId);
    console.log(findById);
    if (findById === -1) {
      copyMulti.push(getDataId);
    } else {
      copyMulti.splice(findById, 1);
    }
    setMulti(copyMulti);
  };

  // console.log(setMulti);
  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          btnClicked();
        }}
      >
        Select Multi
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMulti
                    ? () => {
                        singleSelection(dataItem.id);
                      }
                    : () => {
                        multiSelection(dataItem.id);
                      }
                }
              >
                <h3>{dataItem.question}</h3>
                <span /*onClick={() => singleSelection(dataItem.id)}*/>+</span>
              </div>
              {multiSelection
                ? multi.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )
                : selected !== dataItem.id && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )}

              {/* {selected === dataItem.id || multi.indexOf(dataItem.id) !== -1 ? (
                <div className="acc-content">{dataItem.answer}</div>
              ) : (
                false
              )} */}
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
