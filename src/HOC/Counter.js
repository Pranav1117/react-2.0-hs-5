import React from "react";
import HigherOrderCompo from "./HigherOrderCompo";
const Counter = (props) => {
  return (
    <>
      <h3>Count:{props.value}</h3>
      <button onClick={props.submit}>Click Here !</button>

      <h3>Dfination of HOC:</h3>
      <p>
        Higher Order Components are components which takes component as an
        arguments and return a new component with some additional features. It
        is an optimization technique.
      </p>
    </>
  );
};

export default HigherOrderCompo(Counter);
