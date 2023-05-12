import { useState } from "react";
import Counter from "./HOC/Counter";
import PureCompo from "./PureCompo/PureCompo";

function App() {
  return (
    <div className="App">
      <Counter />
      <PureCompo />
    </div>
  );
}

export default App;
