import React from "react";

const Accordion = props => {
  return (
    <div className="Accordion">
      {props.src.map((item, index) => {
        return (
          <div key={item.name + index}>
            <div
              className="accordion-title"
              onClick={() => props.toggle(item, index)}
            >
              {item.name}
            </div>
            <div
              className="accordion-content"
              style={{ display: item.visible ? "block" : "none" }}
            >
              {item.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
