import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import "./pure.css";

const PureCompo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useMemo(() => {
    setCount(count + 1);
  }, []);
  return (
    <>
      <div className="pure-container">
        <div className="pure-info">
          <h3>This is PureCompo</h3>
          <p>
            Pure Components are the components which renders same output for
            same state and props
          </p>
        </div>

        <div className="pure-btn">
          <h3>Count:{count}</h3>
          <button onClick={handleClick}>INC</button>
        </div>
      </div>
    </>
  );
};
export default PureCompo;
