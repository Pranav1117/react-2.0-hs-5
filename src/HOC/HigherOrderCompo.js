import React from "react";
import { useState } from "react";

function HigherOrderCompo(WrappedCompo) {
  function EnhancingFunc() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <>
        <WrappedCompo value={count} submit={handleClick} />
      </>
    );
  }
  return EnhancingFunc;
}

export default HigherOrderCompo;
