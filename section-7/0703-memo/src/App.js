import React, { useState } from "react";
import Header from "./Header";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default App;
