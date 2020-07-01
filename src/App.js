import React, { useState } from "react";
import "./styles.css";
import Data from "./Info.json";
import Accordion from "./Accordion";

const App = () => {
  const [test, settest] = useState(Data);

  const toggleMe = (item, index) => {
    // copy the data
    const data = [...test];
    // run the loop of the length of data
    for (let i = 0; i < data.length; i++) {
      // make visible property false for other objects
      if (i !== index) {
        data[i].visible = false;
      }
    }
    // the clicked object visible property swap from true to false or vice versa
    data[index].visible = !data[index].visible;
    settest(data);
  };

  return (
    <div className="App">
      <Accordion src={test} toggle={toggleMe} />
    </div>
  );
};

export default App;
