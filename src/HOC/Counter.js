import React from "react";
import HigherOrderCompo from "./HigherOrderCompo";
import "./counter.css";

const Counter = (props) => {
  return (
    <>
      <div className="counter-container">
        <div className="hoc-info">
          <h3>Defination of HOC:</h3>
          <p>
            Higher Order Components are components which takes component as an
            arguments and return a new component with some additional features.
            It is an optimization technique.
          </p>
        </div>

        <div className="count-wrapper">
          <h3>Count:{props.value}</h3>
          <button onClick={props.submit}>Click Here !</button>
        </div>
      </div>
    </>
  );
};

export default HigherOrderCompo(Counter);
