import { useState } from "react";
import Counter from "./HOC/Counter";
import PureCompo from "./PureCompo/PureCompo";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleComponents = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <Counter />
      {toggle && <PureCompo />}
      <button onClick={toggleComponents}>Click to toggle Pure Component</button>
    </div>
  );
}

export default App;
